"use client";

import React, { useState } from "react";
import { Button, Fieldset, TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { HiOutlineMail } from "react-icons/hi";
import { IoPersonOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { isValidEmail, isValidPhoneNumber } from "@/functions";
import { supabase } from "@/supabase";
import { blockFont } from "@/fonts";

interface BookProps {
  // Define your prop types here
}

const Book: React.FC<BookProps> = ({}) => {
  // Initialize local state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requestedDate, setRequestedDate] = useState<Date | null>(null);
  const [details, setDetails] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [requestedDateError, setRequestedDateError] = useState("");

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState(false);

  // Handle input changes
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.currentTarget.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleRequestedDateChange = (value: Date | null) => {
    setRequestedDate(value);
  };

  const handleDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetails(event.currentTarget.value);
  };

  // Handle form submission
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let errorPresent = false;

    if (name === "") {
      setNameError("Please enter a name");
      errorPresent = true;
    }
    if (phone === "") {
      setPhoneError("Please enter a phone number");
      errorPresent = true;
    }
    if (email === "") {
      setEmailError("Please enter an email");
      errorPresent = true;
    }
    if (requestedDate === null) {
      setRequestedDateError("Please enter a date");
      errorPresent = true;
    }
    if (!isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number");
      setPhone("");
      errorPresent = true;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email");
      setEmail("");
      errorPresent = true;
    }

    if (errorPresent) {
      return;
    }

    const formattedDate = requestedDate?.toISOString();
    // Create a data object
    const formData = {
      name,
      phone,
      email,
      formattedDate,
      details,
    };

    const { error } = await supabase.from("bookings").insert({
      name: name,
      details: details,
      phone: phone,
      email: email,
      datetime: formattedDate,
    });

    if (error) {
      setBookingSuccess(false);
      setBookingError(true);
    } else {
      setBookingSuccess(true);
      setBookingError(false);
    }

    setName("");
    setNameError("");
    setPhone("");
    setPhoneError("");
    setEmail("");
    setEmailError("");
    setRequestedDate(null);
    setRequestedDateError("");
    setDetails("");
  }

  return (
    <div className="w-full min-h-screen flex flex-col space-y-4 justify-center items-center px-2">
      {bookingSuccess ? (
        <span className="text-green-500 text-center">
          Thank you for submitting a booking request! We will be in touch with
          you ASAP.
        </span>
      ) : (
        <></>
      )}
      {bookingError ? (
        <span className="text-red-500 text-center">
          Something went wrong with the booking request.. Please reach out to us
          on instagram.
        </span>
      ) : (
        <></>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-2"
      >
        <div className="w-full flex justify-start items-center">
          <span className={`${blockFont.className} uppercase text-2xl`}>
            Bookings
          </span>
        </div>

        <Fieldset>
          <TextInput
            label="Name"
            placeholder={nameError !== "" ? nameError : "Name"}
            leftSection={<IoPersonOutline />}
            value={name}
            error={nameError !== ""}
            onChange={handleNameChange}
          />
          <TextInput
            label="Phone"
            placeholder={phoneError !== "" ? phoneError : "Phone"}
            leftSection={<IoPhonePortraitOutline />}
            value={phone}
            error={phoneError !== ""}
            onChange={handlePhoneChange}
          />
          <TextInput
            label="Email"
            placeholder={emailError !== "" ? emailError : "Email"}
            leftSection={<HiOutlineMail />}
            value={email}
            error={emailError !== ""}
            onChange={handleEmailChange}
          />
          <DateTimePicker
            label="Requested Date"
            placeholder={
              requestedDateError !== "" ? requestedDateError : "Pick a date"
            }
            valueFormat="DD/MM/YYYY HH:mm:ss"
            leftSection={<BsCalendarDate />}
            clearable
            value={requestedDate}
            error={requestedDateError !== ""}
            onChange={handleRequestedDateChange}
          />
          <TextInput
            label="Details"
            placeholder="Details"
            leftSection={<BiCommentDetail />}
            value={details}
            onChange={handleDetailsChange}
          />
        </Fieldset>
        <Button type="submit" color="#EFC258">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Book;

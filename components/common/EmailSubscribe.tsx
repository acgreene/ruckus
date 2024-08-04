"use client";

import React, { useState } from "react";
import { isValidEmail } from "@/functions";

interface EmailSubscribeProps {
  message: string;
  feature: boolean;
}

const EmailSubscribe: React.FC<EmailSubscribeProps> = ({
  message,
  feature,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  // Function to handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = isValidEmail(email);

    if (isValid) {
      setError(null);
      setSubscribed(true);

      await fetch("/api/loops/create-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
    } else {
      setError("Invalid email address");
    }

    setTimeout(() => {
      setError(null);
      setSubscribed(false);
    }, 5000);
  };
  return (
    <div
      className={`flex flex-col ${feature ? "space-y-4" : "xs:space-y-1 md:space-y-2"} text-wrap h-full w-full items-center justify-center`}
    >
      <span
        className={`${feature ? "text-xl sm:text-4xl" : "text-xs xs:text-base md:text-xl"} text-center text-ruckus-purple`}
      >
        {subscribed ? "Thank you, we will be in touch soon!" : message}
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-5/6">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          className={`${feature ? "text-xl placeholder:text-xl" : "text-xs xs:text-base md:text-xl placeholder:text-xs placeholder:xs:text-base placeholder:md:text-xl"} bg-transparent focus:outline-none border-b-2 md:border-b-4 text-white placeholder:text-white`}
          placeholder="Your email"
          required
        />
        {error !== null ? <span className="text-red-500">{error}</span> : <></>}
        <button
          type="submit"
          className={`border md:border-4 rounded-xl xs:p-1 md:p-2 transition-all duration-300 ${subscribed ? "bg-green-500" : "bg-transparent"}`}
        >
          <span
            className={`md:whitespace-nowrap ${feature ? "text-xl sm:text-4xl" : "text-xs xs:text-base md:text-xl"}`}
          >
            {subscribed ? "Subscribed! :)" : "Subscribe"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default EmailSubscribe;

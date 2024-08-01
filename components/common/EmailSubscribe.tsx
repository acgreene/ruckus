import React, { useState } from "react";
import { isValidEmail } from "@/functions";

interface EmailSubscribeProps {
  // Define your prop types here
}

const EmailSubscribe: React.FC<EmailSubscribeProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  // Function to handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = isValidEmail(email);

    if (isValid) {
      setError(null);
      setSubscribed(true);
      console.log(email);

      //   TODO: post email to DB and loops
    } else {
      setError("Invalid email address");
    }

    setTimeout(() => {
      setError(null);
      setSubscribed(false);
    }, 8000);
  };
  return (
    <div className="flex flex-col space-y-2">
      <span className="text-xl">
        {subscribed
          ? "Thanks will email u soon <33"
          : "Get notified about our shows!"}{" "}
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          className="bg-transparent focus:outline-none text-xl border-b-4 text-white placeholder:text-white placeholder:text-xl"
          placeholder="Your email"
          required
        />
        {error !== null ? <span className="text-red-500">{error}</span> : <></>}
        <button
          type="submit"
          className={`border-4 rounded-xl p-2 transition-all duration-300 ${subscribed ? "bg-green-500" : "bg-transparent"}`}
        >
          <span className="whitespace-nowrap">
            {subscribed ? "Subscribed!! :)" : "Subscribe"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default EmailSubscribe;

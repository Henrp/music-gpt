"use client";

import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import AppTitle from "./AppTitle";
import Examples from "./Examples";
import ChatBox from "./ChatBox";
import Limitations from "./Limitations";

export default function WelcomeSection() {
  const [isConversationStarted, setIsConversationStarted] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
      setMessage("");
    }
  };

  const handleSubmit = () => {
    // do smt with message
    if (message.trim() === "") {
      return;
    }
    console.log("Submitted: ", message);
    setMessage("");
  };

  return (
    <>
      <div>
        <AppTitle />
      </div>

      <div className="absolute bottom-0 w-full flex flex-col items-center mb-4">
        <div>
          <Examples />
        </div>

        <div className="w-full mt-3">
          <ChatBox
            message={message}
            handleSubmit={handleSubmit}
            handleKeyPress={handleKeyPress}
            handleInputChange={handleInputChange}
          />
        </div>

        <div>
          <Limitations />
        </div>
      </div>
    </>
  );
}

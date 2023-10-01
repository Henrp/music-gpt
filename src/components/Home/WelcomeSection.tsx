"use client";

import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import AppTitle from "./AppTitle";
import Examples from "./Examples";
import ChatBox from "./ChatBox";
import Limitations from "./Limitations";
import { useConversationContext } from "@/contexts/ConversationProvider";
import { SingleChatMessageType } from "@/types/MessageTypes";
import ConversationAndChatbox from "./ConversationAndChatbox";

export default function WelcomeSection() {
  const { isConversationStarted, setIsConversationStarted } =
    useConversationContext();
  const [message, setMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<SingleChatMessageType[]>([]);

  const [userQueries, setUserQueries] = useState<string[]>([]);
  const [aiResponses, setAiResponses] = useState<string[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
      setMessage("");
    }
  };

  const sendQuery = async () => {
    // send query to backend
    if (message.trim() === "") return;

    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        body: JSON.stringify(message),
      });

      console.log(res);
      const data = await res.json();
      console.log(data);
      setLoading(false);

      const result = data.answer;
      return result;
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // When user submit message -> show user message & ai loading ui
  // when query is done -> show ai msg

  const handleSubmit = async () => {
    // do smt with message
    if (message.trim() !== "") {
      console.log("Submitted: ", message);

      if (isConversationStarted === false) {
        const newIsConversationStarted = true;
        setIsConversationStarted(newIsConversationStarted);
      }

      setUserQueries([...userQueries, message]);

      const response = await sendQuery();

      console.log("response: ", response);
      setAiResponses([...aiResponses, response]);

      setMessage("");
    }
    return;
  };

  if (isConversationStarted) {
    return (
      <div className="w-full h-full">
        <ConversationAndChatbox
          userQueries={userQueries}
          aiResponses={aiResponses}
          loading={loading}
        />
        <div className="sticky bottom-0 flex flex-col w-100% mt-3 mb-4 pb-3">
          {/*make so that when receive user input it does not change position*/}
          <ChatBox
            message={message}
            handleSubmit={handleSubmit}
            handleKeyPress={handleKeyPress}
            handleInputChange={handleInputChange}
          />
          <Limitations />
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <AppTitle />
      </div>

      <div className="absolute bottom-0 w-full flex flex-col items-center mb-4">
        {/* <div>
          <Examples />
        </div> */}

        <div className="flex flex-col w-full mt-3">
          <ChatBox
            message={message}
            handleSubmit={handleSubmit}
            handleKeyPress={handleKeyPress}
            handleInputChange={handleInputChange}
          />
          <Limitations />
        </div>
      </div>
    </>
  );
}

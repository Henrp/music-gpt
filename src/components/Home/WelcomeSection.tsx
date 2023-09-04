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
  const { isConversationStarted, setIsConversationStarted } = useConversationContext();
  const [message, setMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<SingleChatMessageType[]>([]);

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
    if (message.trim() !== "") {
      console.log("Submitted: ", message);

      if ( isConversationStarted === false) {
        const newIsConversationStarted = true;
        setIsConversationStarted(newIsConversationStarted);
      }

      const fakeResponse = "This is a fake response";

      const newChatMessage: SingleChatMessageType = {
        user: message,
        ai: fakeResponse,
      }

      setChatMessages([...chatMessages, newChatMessage]);

      setMessage("");
    }
    return;
  };

  if (isConversationStarted ) {
        return (
          <div className="w-full h-full">
            <ConversationAndChatbox chatMessages={chatMessages}/>
            <div className="sticky bottom-0 flex flex-col w-100% mt-3 mb-4 pb-3"> {/*make so that when receive user input it does not change position*/}
              <ChatBox
                message={message}
                handleSubmit={handleSubmit}
                handleKeyPress={handleKeyPress}
                handleInputChange={handleInputChange}
              />
              <Limitations />
            </div>
          </div>
        )
    }

  return (
    <>
      <div>
        <AppTitle />
      </div>

      <div className="absolute bottom-0 w-full flex flex-col items-center mb-4">
        <div>
          <Examples />
        </div>

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

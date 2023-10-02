"use client";

import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import AppTitle from "./AppTitle";
import Examples from "./Examples";
import ChatBox from "./ChatBox";
import Limitations from "./Limitations";
import { useConversationContext } from "@/contexts/ConversationProvider";
import { SingleChatMessageType } from "@/types/MessageTypes";
import ConversationAndChatbox from "./ConversationAndChatbox";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "@/configs/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  chatId?: string;
  initialUserQueries?: string[];
  initialAiResponses?: string[];
};

export default function WelcomeSection({
  chatId = "",
  initialUserQueries,
  initialAiResponses,
}: Props) {
  const { isConversationStarted, setIsConversationStarted } =
    useConversationContext();
  const [message, setMessage] = useState<string>("");
  // const [chatMessages, setChatMessages] = useState<SingleChatMessageType[]>([]);

  const [userQueries, setUserQueries] = useState<string[]>(
    initialUserQueries || []
  );
  const [aiResponses, setAiResponses] = useState<string[]>(
    initialAiResponses || []
  );

  const [loading, setLoading] = useState<boolean>(false);

  const { data: session } = useSession();

  // useEffect(() => {
  //   console.log("chatId: ", chatId);

  // }, [chatId]);

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

      const trimedMessage = message.trim();
      const userQueryData = {
        text: trimedMessage,
        createdAt: serverTimestamp(),
        user: {
          _id: session?.user?.email!,
          name: session?.user?.name!,
          avatar: session?.user?.image!,
        },
      };

      await addDoc(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        userQueryData
      );

      setUserQueries([...userQueries, message]);

      const response = await sendQuery();

      const trimedResponse = response.trim();
      const aiResponseData = {
        text: trimedResponse,
        createdAt: serverTimestamp(),
        user: {
          _id: "ai",
          name: "ai",
          avatar: "ai",
        },
      };

      await addDoc(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        aiResponseData
      );

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
        <ConversationAndChatbox
          userQueries={userQueries}
          aiResponses={aiResponses}
          loading={loading}
        />

        {chatId !== "" && (
          <div className="flex flex-col w-full mt-3">
            <ChatBox
              message={message}
              handleSubmit={handleSubmit}
              handleKeyPress={handleKeyPress}
              handleInputChange={handleInputChange}
            />
            <Limitations />
          </div>
        )}
      </div>
    </>
  );
}

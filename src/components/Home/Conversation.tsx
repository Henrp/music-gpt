"use client";

import { useConversationContext } from "@/contexts/ConversationProvider";
import { SingleChatMessageType } from "@/types/MessageTypes";
import React from "react";
import ConversationHeader from "./ConversationHeader";
import ChatList from "./ChatList";
import { QuerySnapshot } from "firebase/firestore";

type Props = {
  userQueries: string[];
  aiResponses: string[];
  loading: boolean;
  chatId?: string;
  pastChats?: QuerySnapshot;
};

export default function Conversation({
  userQueries,
  aiResponses,
  loading,
  chatId = "",
  pastChats,
}: Props) {
  const { isConversationStarted } = useConversationContext();
  // console.log(userQueries);

  // if (!isConversationStarted) {
  //   return <></>;
  // }

  return (
    <div className="h-[5000px] w-full max-w-screen-xl mx-auto">
      <ChatList
        userQueries={userQueries}
        aiResponses={aiResponses}
        loading={loading}
        chatId={chatId}
        pastChats={pastChats}
      />
    </div>
  );
}

// Context
// useState, useEffect => React hooks
// useContext =

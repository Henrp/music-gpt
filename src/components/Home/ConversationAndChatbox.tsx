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

export default function ConversationAndChatbox({
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
    <div className="min-h-screen w-full">
      <div className="sticky top-0 z-10">
        <ConversationHeader chatId={chatId} />
      </div>

      <div className="mt-20 max-w-screen-xl mx-auto">
        <ChatList
          userQueries={userQueries}
          aiResponses={aiResponses}
          loading={loading}
          chatId={chatId}
          pastChats={pastChats}
        />
      </div>
    </div>
  );
}

// Context
// useState, useEffect => React hooks
// useContext =

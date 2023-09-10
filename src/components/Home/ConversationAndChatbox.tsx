"use client";

import { useConversationContext } from "@/contexts/ConversationProvider";
import { SingleChatMessageType } from "@/types/MessageTypes";
import React from "react";
import ConversationHeader from "./ConversationHeader";
import ChatList from "./ChatList";

type Props = {
  chatMessages: SingleChatMessageType[];
};

export default function ConversationAndChatbox({ chatMessages }: Props) {
  const { isConversationStarted } = useConversationContext();

  if (!isConversationStarted) {
    return <></>;
  }

  return (
    <div className="h-[2000px]">
      <div className="sticky top-0 z-10 ">
        <ConversationHeader />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <ChatList chatMessages={chatMessages} />
      </div>
    </div>
  );
}

// Context
// useState, useEffect => React hooks
// useContext =

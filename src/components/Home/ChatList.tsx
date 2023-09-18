import { SingleChatMessageType } from "@/types/MessageTypes";
import React from "react";
import ChatListItem from "./ChatListItem";

type Props = {
  userQueries: string[];
  aiResponses: string[];
  loading: boolean;
};

export default function ChatList({ userQueries, aiResponses, loading }: Props) {
  const chatLength = userQueries.length;

  return (
    <div className="flex flex-col">
      {userQueries.map((query, index) => (
        <div key={index} className="mt-10">
          <ChatListItem type="user" msg={query} />
          {index !== chatLength - 1 ? (
            <ChatListItem type="ai" msg={aiResponses[index]} loading={false} />
          ) : (
            <ChatListItem
              type="ai"
              msg={aiResponses[index]}
              loading={loading}
            />
          )}
        </div>
      ))}
    </div>
  );
}

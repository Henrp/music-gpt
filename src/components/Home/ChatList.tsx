import { SingleChatMessageType } from "@/types/MessageTypes";
import React from "react";
import ChatListItem from "./ChatListItem";

type Props = {
  chatMessages: SingleChatMessageType[];
};

export default function ChatList({ chatMessages }: Props) {
  return chatMessages.map(({ user, ai }, index) => (
    <div key={index} className="mt-10">
      <ChatListItem type="user" msg={user} />
      <ChatListItem type="ai" msg={ai} />
    </div>
  ));
}

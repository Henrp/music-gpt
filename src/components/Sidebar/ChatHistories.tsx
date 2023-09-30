import React from "react";
import { QuerySnapshot } from "firebase/firestore";
import ChatRow from "./ChatRow";

type Props = {
  chats: QuerySnapshot | undefined;
};

export default function ChatHistories({ chats }: Props) {
  return (
    <div className="h-full flex-col items-center justify-center">
      {chats?.docs.map((chat) => (
        <ChatRow key={chat.id} id={chat.id} />
      ))}
    </div>
  );
}

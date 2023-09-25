import React from "react";
import { QuerySnapshot } from "firebase/firestore";
import ChatRow from "./ChatRow";

type Props = {
  chats: QuerySnapshot | undefined;
};

export default function ChatHistories({ chats }: Props) {
  return (
    <div className="h-full flex items-center justify-center">
      {/*might need to change justify-center to justify-start*/}
      <p className="text-lg">Chat Histories...</p>
      {chats?.docs.map((chat) => (
        <ChatRow key={chat.id} id={chat.id} />
      ))}
    </div>
  );
}

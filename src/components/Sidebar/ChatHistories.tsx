import React from "react";
import { QuerySnapshot } from "firebase/firestore";
import ChatRow from "./ChatRow";
import Image from "next/image";

type Props = {
  chats: QuerySnapshot | undefined;
};

export default function ChatHistories({ chats }: Props) {
  return (
    <div className="h-full flex-col items-center justify-center">
      {chats?.docs.map((chat) => (
        <div key={chat.id} className="flex-row">
          {/* <Image
            className="flex"
            src="/chat_icon.png"
            width={20}
            height={20}
            alt="chat_icon"
          /> */}
          <ChatRow id={chat.id} />
        </div>
      ))}
    </div>
  );
}

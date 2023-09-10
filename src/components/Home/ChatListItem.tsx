// HW

import { SingleChatMessageType } from "@/types/MessageTypes";
import Image from "next/image";
import React from "react";

type Props = {
  type: "user" | "ai";
  msg: string;
};

export default function ChatListItem({ type, msg }: Props) {
  return (
    <div
      className={`${
        type === "user" ? "pr-3" : "flex-row-reverse pl-3"
      } flex items-center justify-end h-16`}
    >
      {" "}
      {/*need to stop overflowing of words -> if a certain amount of word is reached go to next line. Also, user icon has to be on the right side bottom corner. Must follow down with the increasing text (same goes for ai)*/}
      <div
        className={`${
          type === "user" ? "bg-[#DFD7CB]" : "bg-white"
        } rounded-xl p-4 drop-shadow-sm`}
      >
        <p className="text-lg">{msg}</p>
      </div>
      <div className={`${type === "user" ? "ml-2" : "mr-2"} flex h-10 w-10`}>
        <Image
          className="object-cover rounded-full"
          src={"/defaultProfilePic.jpeg"}
          width={800}
          height={800}
          alt="User profile picture"
        />
      </div>
    </div>
  );
}

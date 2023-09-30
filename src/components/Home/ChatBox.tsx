"use client";

import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import ChatBoxSubmitIcon from "../ui/ChatBoxSubmitIcon";

type Props = {
  message: string;
  handleSubmit: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export default function ChatBox({
  message,
  handleSubmit,
  handleInputChange,
  handleKeyPress,
}: Props) {
  return (
    <div
      className="w-full max-w-[700px] mx-auto
    flex px-4 py-3 bg-white shadow-sm
    border border-[#D9D9D9] rounded-xl"
    >
      <input
        type="text"
        placeholder="Message MusicGPT..."
        className="flex-grow text-primaryDark focus:outline-none"
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button
        className={`ml-3 ${
          message.trim() === ""
            ? "text-gray-400 cursor-default"
            : "text-yellow-500 cursor-pointer"
        }`}
        disabled={message.trim() === ""}
        onClick={handleSubmit}
      >
        <ChatBoxSubmitIcon />
      </button>
    </div>
  );
}

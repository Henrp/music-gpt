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
      className="w-7/12 min-w-[300px] mx-auto
    flex px-4 py-2 bg-white shadow-lg
    border border-[#D9D9D9] rounded-xl"
    >
      <input
        type="text"
        placeholder="Ask about music history and theory..."
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

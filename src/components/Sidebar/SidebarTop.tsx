import React from "react";
import { LuPanelLeftClose } from "react-icons/lu";

export default function SidebarTop() {
  return (
    <div
      className="flex justify-center items-center
      py-4 px-2"
    >
      <p className="font-semibold text-2xl">MusicGPT</p>
      <LuPanelLeftClose
        className="ml-3 w-8 h-8 
      opacity-80 cursor-pointer"
      />
    </div>
  );
}

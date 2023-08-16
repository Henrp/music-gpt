"use client";

import React from "react";
import LeftCloseIcon from "../ui/LeftCloseIcon";

export default function SidebarTop() {
  return (
    <div className="flex justify-between items-center py-4 px-2">
      <div className="flex justify-center">
        <p className="ml-3 font-semibold text-2xl">MusicGPT</p>
      </div>

      <button onClick={() => {}}>
        <LeftCloseIcon />
      </button>
    </div>
  );
}

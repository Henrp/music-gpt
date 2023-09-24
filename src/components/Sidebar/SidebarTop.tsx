"use client";

import React, { useState } from "react";
import LeftCloseIcon from "../ui/LeftCloseIcon";
import RightOpenIcon from "../ui/RightOpenIcon";
import Image from "next/image";

type Props = {
  isVisible: boolean;
  toggleSidebar: () => void;
};

export default function SidebarTop({ isVisible, toggleSidebar }: Props) {
  return (
    <>
      {isVisible ? (
        <div className="flex items-center justify-center">
          <div className="flex w-full border border-[#DFD7CB] rounded-md px-4 py-2">
            <Image
              className="mr-2"
              src={"/plus.svg"}
              width={25}
              height={25}
              alt="plus icon"
            />
            <button className=" text-base font-medium">New Chat</button>
          </div>
          <button
            className="border border-[#DFD7CB] rounded-md p-1 ml-2"
            onClick={toggleSidebar}
          >
            <LeftCloseIcon />
          </button>
        </div>
      ) : (
        <button onClick={toggleSidebar}>
          <RightOpenIcon />
        </button>
      )}
    </>
  );
}

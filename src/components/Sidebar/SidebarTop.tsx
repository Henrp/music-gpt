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
    <div className="flex justify-between items-center py-4 px-2">
      {isVisible ? (
        <>
          <div className="flex justify-center">
            <Image
              src="/defaultProfilePic.jpeg"
              width={30}
              height={30}
              alt="logo"
            />
            <p className="ml-3 font-semibold text-2xl">MusicGPT</p>
          </div>
          <button onClick={toggleSidebar}>
            <LeftCloseIcon />
          </button>
        </>
      ) : (
        <button onClick={toggleSidebar}>
          <RightOpenIcon />
        </button>
      )}
    </div>
  );
}

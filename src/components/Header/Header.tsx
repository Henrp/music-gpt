import React from "react";
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {
  return (
    <div
      className="w-full
    bg-[#EFEDE6] py-2.5 border-b border-primaryGrey flex items-center justify-center
    z-50"
    >
      <Image
        className="pr-3"
        src="/logo.png"
        width={50}
        height={50}
        alt="logo"
      />
      <div className="text-xl font-semibold">MusicGPT</div>

      <div className="absolute top-0 left-0 h-screen">
        <Sidebar isMobile={true} />
      </div>
    </div>
  );
}

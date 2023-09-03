import React from "react";
import Image from "next/image";

export default function AppTitle() {
  return (
    <div className="flex items-center">
      <Image
      className="pr-3"
        src="/logo.png"
        width={80}
        height={80}
        alt="logo"
      />
      <p className="font-bold text-5xl">MusicGPT</p>
    </div>
  );
}

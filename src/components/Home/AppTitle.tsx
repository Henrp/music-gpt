import React from "react";
import Image from "next/image";

export default function AppTitle() {
  return (
    <div className="flex">
      <Image
      className="pr-3"
        src="/defaultProfilePic.jpeg"
        width={60}
        height={60}
        alt="logo"
      />
      <p className="font-bold text-4xl">MusicGPT</p>
    </div>
  );
}

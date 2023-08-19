import Image from "next/image";
import React from "react";

export default function UserInfo() {
  return (
    <div
      className="flex items-center justify-center px-4 py-2
      bg-[#FCFAF4]
    border border-black/20 rounded-xl"
    >
      <div className="flex">
        <Image
          className="rounded-full"
          src="/defaultProfilePic.jpeg"
          width={30}
          height={30}
          alt="User Profile Picture"
        />
      </div>

      <p className="ml-3 text-xl">Guest</p>
    </div>
  );
}

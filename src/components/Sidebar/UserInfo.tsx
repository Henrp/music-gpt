import Image from "next/image";
import React from "react";

export default function UserInfo() {
  return (
    <div
      className="flex items-center justify-center px-4 py-2
    border-2 border-slate-300 rounded-2xl shadow-lg"
    >
      <div className="flex">
        <Image
          className="rounded-full"
          src="public/default-profile-pic.jpeg"
          width={30}
          height={30}
          alt="User Profile Picture"
        />
      </div>

      <p className="text-xl">Guest</p>
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function UserInfo() {
  return (
    <div
      className="flex items-center justify-center px-4 py-2
    border-2 border-slate-300 rounded-2xl shadow-lg"
    >
      {/* <div className="flex">
        <Image
          className="rounded-full"
          src={}
          width={}
          height={}
          alt="User Profile Pic"
        />
      </div> */}

      <p className="text-xl">Guest</p>
    </div>
  );
}

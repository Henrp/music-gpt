import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function UserInfo() {
  const { data } = useSession();

  console.log(data);

  return (
    <div
      className="flex items-center justify-center px-4 py-3 mb-1
      bg-[#FCFAF4]
    border border-black/20 rounded-xl"
    >
      <div>
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

// HW

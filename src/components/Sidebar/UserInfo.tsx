import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import ThreeDotsIcon from "../ui/ThreeDotsIcon";
import LogoutIcon from "../ui/LogoutIcon";

export default function UserInfo() {
  const { data } = useSession();
  const userName = data?.user?.name;
  const userImage = data?.user?.image || "/defaultProfilePic.jpeg";

  // manage logout popup state
  const [showPopup, setShowPopup] = useState(false);

  const handleOnClick = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col items-center">
      {showPopup && (
        <div
          className="absolute -translate-y-16 z-50 w-full bg-[#FFFCE8]
        border border-black/20 rounded-lg
        flex items-center justify-between px-6 py-3 "
        >
          <p className="text-lg">Log out</p>
          <button onClick={() => signOut()}>
            <LogoutIcon />
          </button>
        </div>
      )}

      <button
        className="w-full flex items-center justify-between px-4 py-3
      bg-[#FCFAF4]
    border-t border-black/20"
        onClick={handleOnClick}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Image
              className="rounded-full"
              src={userImage}
              width={30}
              height={30}
              alt="User Profile Picture"
            />
            <p className="truncate ml-2 text-l font-semibold">{userName}</p>
          </div>

          <ThreeDotsIcon />
        </div>
      </button>
    </div>
  );
}

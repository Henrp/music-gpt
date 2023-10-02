// HW

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  chatId?: string;
};

export default function ConversationHeader({ chatId = "" }: Props) {
  if (chatId === "") {
    return <></>;
  }

  return (
    <Link
      href="/"
      className="hidden md:flex 
    bg-[#EFEDE6] py-2.5 border-b border-primaryGrey items-center justify-center"
    >
      <Image
        className="pr-3"
        src="/logo.png"
        width={50}
        height={50}
        alt="logo"
      />
      <div className="text-xl font-semibold">MusicGPT</div>
    </Link>
  );
}

// HW

import React from 'react'
import Image from "next/image";

export default function ConversationHeader() {
  return (
    <div className="bg-[#EFEDE6] py-2.5 border-b border-primaryGrey flex items-center justify-center">
      <Image
      className="pr-3"
        src="/logo.png"
        width={50}
        height={50}
        alt="logo"
      />
      <div className="text-xl font-semibold">MusicGPT</div>
    </div>
  )
}

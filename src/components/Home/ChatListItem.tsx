// HW

import { SingleChatMessageType } from '@/types/MessageTypes'
import Image from 'next/image';
import React from 'react'

type Props = {
    type: "user" | "ai";
    msg: string;
}

export default function ChatListItem({ type, msg }: Props) {
  return (
    <div className={`${type === "user" ? "" : ""} flex items-center h-16`}>
        <div className="rounded-xl bg-[#DFD7CB] p-4">
            <p className="text-lg">{msg}</p>
        </div>
        
        <div className="flex ml-2 h-8 w-8">
            <Image
                className="object-cover rounded-full"
                src={"/defaultProfilePic.jpeg"}
                width={800}
                height={800}
                alt="User profile picture"
            />
        </div>
        
    </div>
  )
}

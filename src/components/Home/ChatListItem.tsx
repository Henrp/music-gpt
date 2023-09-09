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
    <div className={`${type === "user" ? "justify-end" : "flex-row-reverse justify-end"} flex items-center h-16`}>
        <div className={`${type === "user" ? "bg-[#DFD7CB]" : "bg-white"} rounded-xl p-4`}>
            <p className="text-lg">{msg}</p>
        </div>
        
        <div className={`${type === "user" ? "ml-2" : "mr-2"} flex h-8 w-8`}>
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

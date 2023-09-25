"use client";

import React, { useState } from "react";
import LeftCloseIcon from "../ui/LeftCloseIcon";
import RightOpenIcon from "../ui/RightOpenIcon";
import Image from "next/image";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/configs/firebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  isVisible: boolean;
  toggleSidebar: () => void;
};

export default function SidebarTop({ isVisible, toggleSidebar }: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  const createNewChat = async () => {
    console.log("new chat button pressed");
    // add new data to firebase
    // 1. collection -> table
    // 2. document -> row
    // 3. field -> column (data)

    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <>
      {isVisible ? (
        <div className="flex items-center justify-center">
          <div className="flex w-full border border-[#DFD7CB] rounded-md px-4 py-2">
            <Image
              className="mr-2"
              src={"/plus.svg"}
              width={25}
              height={25}
              alt="plus icon"
            />
            <button className="text-base font-medium" onClick={createNewChat}>
              New Chat
            </button>
          </div>
          <button
            className="border border-[#DFD7CB] rounded-md p-1 ml-2"
            onClick={toggleSidebar}
          >
            <LeftCloseIcon />
          </button>
        </div>
      ) : (
        <button onClick={toggleSidebar}>
          <RightOpenIcon />
        </button>
      )}
    </>
  );
}

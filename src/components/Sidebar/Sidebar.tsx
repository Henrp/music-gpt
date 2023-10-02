"use client";

import React, { useState } from "react";
import SidebarTop from "./SidebarTop";
import ChatHistories from "./ChatHistories";
import UserInfo from "./UserInfo";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/configs/firebase";

// 1. Open/Close Button + Website Name
// 2. Chat Histories
// 3. User Info

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  // connecting to firebase
  const { data: session } = useSession();

  // read data from firebase cloudstore using react-firebase-hooks
  // use email from session to find a dataset
  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats")
  );

  return (
    <div
      className={`${
        isVisible
          ? "w-64 bg-secondary border-r-2 border-[#C0C0C0]/60"
          : "w-16 bg-primary"
      }
      ease-in-out duration-200 
      h-full flex flex-col  
       z-50 overflow-hidden`}
    >
      <div className="p-2">
        <SidebarTop isVisible={isVisible} toggleSidebar={toggleSidebar} />
      </div>

      {isVisible && (
        <div className="flex flex-col h-full">
          <div className="grow">
            <ChatHistories chats={chats} />
            {/* keep it empty */}
          </div>
          <div className="">
            <UserInfo />
          </div>
        </div>
      )}
    </div>
  );
}

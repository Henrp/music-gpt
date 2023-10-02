"use client";

import React, { useState } from "react";
import SidebarTop from "./SidebarTop";
import ChatHistories from "./ChatHistories";
import UserInfo from "./UserInfo";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/configs/firebase";

// 1. Open/Close Button + Website Name
// 2. Chat Histories
// 3. User Info

type Props = {
  isMobile?: boolean;
};

export default function Sidebar({ isMobile = false }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  // connecting to firebase
  const { data: session } = useSession();

  // read data from firebase cloudstore using react-firebase-hooks
  // use email from session to find a dataset
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div
      className={`${
        isVisible
          ? "w-64 bg-secondary border-r-2 border-[#C0C0C0]/60"
          : "w-16 bg-primary"
      }
      ease-in-out duration-200 
      ${isMobile && !isVisible ? "" : "h-full"} flex flex-col  
       z-40 overflow-hidden`}
    >
      <div className="p-[7px]">
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

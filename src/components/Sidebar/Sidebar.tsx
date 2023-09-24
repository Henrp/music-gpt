"use client";

import React, { useState } from "react";
import SidebarTop from "./SidebarTop";
import ChatHistories from "./ChatHistories";
import UserInfo from "./UserInfo";

// 1. Open/Close Button + Website Name
// 2. Chat Histories
// 3. User Info

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

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
            <ChatHistories />
            {/* keep it empty */}
          </div>
          <div className="p-2">
            <UserInfo />
          </div>
        </div>
      )}
    </div>
  );
}

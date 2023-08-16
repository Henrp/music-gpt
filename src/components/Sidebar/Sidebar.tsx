import React from "react";
import SidebarTop from "./SidebarTop";
import ChatHistories from "./ChatHistories";
import UserInfo from "./UserInfo";

// 1. Open/Close Button + Website Name
// 2. Chat Histories
// 3. User Info

export default function Sidebar() {
  return (
    <div
      className="w-80 h-full flex flex-col border-r-2 
      border-slate-400 z-50 overflow-hidden"
    >
      <div className="p-2">
        <SidebarTop />
      </div>

      <div className="grow bg-blue-100">
        <ChatHistories />
        {/* keep it empty */}
      </div>

      <div className="p-2">
        <UserInfo />
      </div>
    </div>
  );
}

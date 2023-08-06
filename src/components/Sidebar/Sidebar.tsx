import React from "react";
import SidebarTop from "./SidebarTop";
import ChatHistories from "./ChatHistories";
import UserInfo from "./UserInfo";

// 1. Open/Close Button + Website Name
// 2. Chat Histories
// 3. User Info

export default function Sidebar() {
  return (
    <div className="flex flex-col grow bg-red-100">
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

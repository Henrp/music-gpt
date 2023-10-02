import ChatPageWrapper from "@/components/Home/ChatPageWrapper";
import React from "react";

export default function ChatPage({ params }: { params: { id: string } }) {
  return (
    <div className="w-full h-full">
      <ChatPageWrapper chatId={params.id} />
    </div>
  );
}

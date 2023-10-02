import { SingleChatMessageType } from "@/types/MessageTypes";
import React from "react";
import ChatListItem from "./ChatListItem";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { QuerySnapshot, collection, orderBy, query } from "firebase/firestore";
import { db } from "@/configs/firebase";

type Props = {
  userQueries: string[];
  aiResponses: string[];
  loading: boolean;
  chatId?: string;
  pastChats?: QuerySnapshot;
};

export default function ChatList({
  userQueries,
  aiResponses,
  loading,
  chatId = "",
  pastChats,
}: Props) {
  const chatLength = pastChats?.docs.length || 0;
  // console.log(pastChats);

  const { data: session } = useSession();
  const [chatMessages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  // console.log("chatMdssages", chatMessages);

  chatMessages?.docs.map((doc, idx) => {
    console.log(doc.data().text);
  });

  return (
    <div className="flex flex-col w-full h-full bg-green-300">
      {chatMessages?.docs.map((doc, idx) => (
        <div key={idx} className="mt-10">
          {idx % 2 === 0 ? (
            <ChatListItem type="user" msg={doc.data().text} />
          ) : idx !== chatLength - 1 ? (
            <ChatListItem type="ai" msg={doc.data().text} loading={false} />
          ) : (
            <ChatListItem type="ai" msg={doc.data().text} loading={loading} />
          )}
        </div>
      ))}
    </div>
  );
}

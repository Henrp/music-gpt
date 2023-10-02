"use client";
import { db } from "@/configs/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import WelcomeSection from "./WelcomeSection";

export default function ChatPageWrapper({ chatId }: { chatId: string }) {
  const [userQueries, setUserQueries] = useState<string[]>([]);
  const [aiResponses, setAiResponses] = useState<string[]>([]);

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

  return (
    <div>
      <WelcomeSection
        chatId={chatId}
        initialUserQueries={chatMessages?.docs.map((doc, index) => {
          if (index % 2 === 0) {
            return doc.data().text;
          }
          return null;
        })}
        initialAiResponses={chatMessages?.docs.map((doc, index) => {
          if (index % 2 === 1) {
            return doc.data().text;
          }
          return null;
        })}
      />
    </div>
  );
}

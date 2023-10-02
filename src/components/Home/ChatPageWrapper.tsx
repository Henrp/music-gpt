"use client";
import { db } from "@/configs/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import WelcomeSection from "./WelcomeSection";

export default function ChatPageWrapper({ chatId }: { chatId: string }) {
  console.log("chat id: ", chatId);

  // const { data: session } = useSession();
  // const [chatMessages] = useCollection(
  //   session &&
  //     query(
  //       collection(
  //         db,
  //         "users",
  //         session.user?.email!,
  //         "chats",
  //         chatId,
  //         "messages"
  //       ),
  //       orderBy("createdAt", "asc")
  //     )
  // );

  // console.log("chatMEssages", chatMessages);

  return (
    <div className="w-full h-full flex justify-center">
      <WelcomeSection chatId={chatId} />
    </div>
  );
}

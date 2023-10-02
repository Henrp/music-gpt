"use client";
import { db } from "@/configs/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import WelcomeSection from "./WelcomeSection";

export default function ChatPageWrapper({ chatId }: { chatId: string }) {
  console.log("chat id: ", chatId);

  return (
    <div className="flex justify-center">
      <WelcomeSection chatId={chatId} />
    </div>
  );
}

import { db } from "@/configs/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

export default function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const router = useRouter();

  const [active, setActive] = useState(false);

  // read data from firestore by querying the id
  // -> use user email to get the list of `chats` with `messages`

  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats", id, "messages")
    )
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  // delete chat
  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  return (
    <Link href={`/chat/${id}`}>
      {/* <p className={`${active ? "hidden" : ""}`}>Chat Histories...</p> */}

      <div
        className={`${
          active ? "bg-slate-300" : "bg-white"
        } flex items-center justify-between p-2 cursor-pointer`}
      >
        <p>
          {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
        </p>
        <button className={`${active ? "" : "hidden"}`} onClick={removeChat}>
          Delete
        </button>
      </div>
    </Link>
  );
}

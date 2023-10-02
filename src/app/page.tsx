/**
 * Home Page
 * 1. App Title
 * 2. Example Questions
 * 3. ChatBox
 * 4. Limitations
 */

import AppTitle from "@/components/Home/AppTitle";
import ChatBox from "@/components/Home/ChatBox";
import Examples from "@/components/Home/Examples";
import Limitations from "@/components/Home/Limitations";
import WelcomeSection from "@/components/Home/WelcomeSection";

export default async function Home() {
  // const data = await getData();
  // console.log(data);

  return (
    <div
      className="w-full h-full
      flex flex-col justify-center items-center 
      bg-primary"
    >
      {/* <ConversationAndChatbox /> */}

      <WelcomeSection />
    </div>
  );
}

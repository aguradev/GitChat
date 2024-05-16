import ChatLists from "@/components/elements/ChatLists";
import HeaderContact from "@/components/elements/HeaderContact";
import InputMessage from "@/components/elements/InputMessage";
import ChatLayout from "@/components/layouts/ChatApp";
import { supabase } from "@/services/supabase";
import { useState, useRef, useEffect } from "react";

const Home = () => {
  const chatListRef = useRef(null);
  const [messageLists, stateMessageLists] = useState([]);

  useEffect(() => {
    chatListRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [messageLists]);

  useEffect(() => {
    async function LoadGlobalMessage() {
      try {
        let { data, error } = await supabase.from("global_chat").select("*");

        if (error) {
          throw new Error(error?.message);
        }

        stateMessageLists([...data]);
      } catch (error) {
        console.error(error);
      }
    }

    function channelGlobalMessage() {
      supabase
        .channel("custom-all-channel")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "global_chat",
          },
          (payload) => {
            console.log("event added");
            stateMessageLists((state) => [...state, payload.new]);
          }
        )
        .subscribe();
    }

    LoadGlobalMessage();
    channelGlobalMessage();
  }, []);

  return (
    <ChatLayout>
      <section className="relative flex flex-col h-screen overflow-hidden">
        <HeaderContact />
        <ChatLists messages={messageLists} chatListsRef={chatListRef} />
        <InputMessage />
      </section>
    </ChatLayout>
  );
};

export default Home;

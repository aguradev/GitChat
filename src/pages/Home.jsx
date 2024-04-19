import ChatLists from "@/components/elements/ChatLists";
import HeaderContact from "@/components/elements/HeaderContact";
import InputMessage from "@/components/elements/InputMessage";
import ChatLayout from "@/components/layouts/ChatApp";
import { useState, useRef, useEffect } from "react";

const Home = () => {
  const chatListRef = useRef(null);
  const [messageLists, stateMessageLists] = useState([
    {
      id: 1,
      message_from: 1,
      message_to: 2,
      content:
        "wr 2 seingetku tetap sama namanya tapi kalau dekan kurang tau aku.",
      timestamp: `15:42`,
    },
    {
      id: 2,
      message_from: 1,
      message_to: 2,
      content: "Aku duluan balik Van di telp soalnya",
      timestamp: `16:23`,
    },
    {
      id: 3,
      message_from: 2,
      message_to: 1,
      content: "Ok",
      timestamp: `16:25`,
    },
    {
      id: 4,
      message_from: 1,
      message_to: 2,
      content: "van masih di kampus?",
      timestamp: `16:30`,
    },
    {
      id: 5,
      message_from: 2,
      message_to: 1,
      content: "udh mo balik",
      timestamp: `16:31`,
    },
  ]);

  function addMessageChat(input) {
    stateMessageLists((stateLatest) => {
      return [
        ...stateLatest,
        {
          id: stateLatest[stateLatest.length - 1].id + 1,
          message_from: 1,
          message_to: 2,
          content: input,
          timestamp: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
      ];
    });
  }

  useEffect(() => {
    chatListRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [messageLists]);

  return (
    <ChatLayout>
      <section className="flex flex-col h-screen">
        <HeaderContact />
        <ChatLists messages={messageLists} chatListsRef={chatListRef} />
        <InputMessage sendMessageEvent={addMessageChat} />
      </section>
    </ChatLayout>
  );
};

export default Home;

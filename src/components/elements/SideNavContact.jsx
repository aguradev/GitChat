import { useContext, useState } from "react";
import { Input } from "@components/ui/input";
import ContactList from "./ContactList";
import { UseAppContext } from "@components/context/AppContext";
import { ChatLayoutContext } from "@components/context/ChatContext";
import "boxicons";

const SearchChatInput = () => {
  const { theme } = UseAppContext();

  return (
    <div className="relative">
      <label htmlFor="search_chat" className="absolute top-2.5 left-4">
        <box-icon
          name="search"
          size="16px"
          color={theme === "dark" ? "white" : "black"}
        ></box-icon>
      </label>
      <Input
        className="pl-10 rounded-full"
        placeholder="Search messages..."
        id="search_chat"
      />
    </div>
  );
};

const ChatLists = () => {
  const [chatLists, setChatLists] = useState([
    {
      id: "8f901c92-74fb-4a1d-998a-22af1d94a1b9",
      profile: "https://placehold.co/100x100",
      firstName: "Moses",
      lastName: "Heidenreich",
      isActive: true,
    },
    {
      id: "26cb99f8-fb04-4c84-b17f-1f7e7c0f7b60",
      profile: "https://placehold.co/100x100",
      firstName: "Holden",
      lastName: "Hane",
      isActive: false,
    },
    {
      id: "e21b4d47-84f9-4904-a43f-7fe2cb279eaa",
      profile: "https://placehold.co/100x100",
      firstName: "Bonita",
      lastName: "Funk",
      isActive: false,
    },
    {
      id: "39b7c2d5-f008-4d53-889c-6f08e0f34ac2",
      profile: "https://placehold.co/100x100",
      firstName: "Keara",
      lastName: "Feeney",
      isActive: false,
    },
    {
      id: "a54d8253-bb4f-43fd-b594-cc290c36d849",
      profile: "https://placehold.co/100x100",
      firstName: "Tianna",
      lastName: "Olson",
      isActive: false,
    },
  ]);

  function selectChatContact(id) {
    const findChat = chatLists.find((item) => {
      return id === item.id;
    });

    if (!findChat) {
      return;
    }

    chatLists.map((item) => (item.isActive = false));
    findChat.isActive = !findChat.isActive;

    setChatLists([...chatLists]);
  }

  return (
    <>
      <ul className="flex-1 overflow-hidden">
        {!chatLists.length && (
          <li className="px-24 py-6 text-center">No Messages Found...</li>
        )}
        {!!chatLists.length &&
          chatLists.map((item) => (
            <li key={item.id} className={`relative border-b duration-300`}>
              <ContactList classActive={item.isActive} contacts={{ ...item }}>
                <div
                  className="stretched-link"
                  onClick={() => selectChatContact(item.id)}
                ></div>
              </ContactList>
            </li>
          ))}
      </ul>
    </>
  );
};

const SideNavContact = () => {
  const { sideContactActive } = useContext(ChatLayoutContext);
  return (
    <aside
      className={`relative h-screen overflow-hidden ease-in-out duration-300 ${
        !sideContactActive ? "w-0" : "w-[400px]"
      }`}
    >
      <nav className={`flex flex-col h-full border-r shadow-sm`}>
        <div
          className={`ease-linear duration-200 ${
            !sideContactActive
              ? "opacity-0 invisible"
              : "opacity-100 visible delay-200"
          }`}
        >
          <div className="flex flex-col justify-between p-4 pb-6 border-b gap-x-4 ">
            <div className="mb-5 text-2xl font-bold">Messages</div>
            <SearchChatInput />
          </div>

          <ChatLists />
        </div>
      </nav>
    </aside>
  );
};

export default SideNavContact;

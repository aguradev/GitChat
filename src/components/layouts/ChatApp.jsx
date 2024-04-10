import SideNavContact from "@components/elements/SideNavContact";
import ChatAppCss from "@/assets/css/chatApp.module.css";
import SideNavProfile from "../elements/SideNavProfile";
import { createContext, useState } from "react";
const chatContextValue = {
  setSideContactActive: () => null,
};
export const ChatLayoutContext = createContext(chatContextValue);

const ChatLayout = ({ children }) => {
  const [sideContactActive, setSideContactActive] = useState(true);
  const valueProvider = {
    sideContactActive,
    setSideContactActive,
  };

  return (
    <ChatLayoutContext.Provider value={valueProvider}>
      <div className={ChatAppCss.wrapper}>
        <div className="relative z-10 flex">
          <SideNavProfile />
          {sideContactActive && <SideNavContact />}
        </div>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </ChatLayoutContext.Provider>
  );
};

export { ChatLayout };

import SideNavContact from "@components/elements/SideNavContact";
import ChatAppCss from "@/assets/css/chatApp.module.css";
import SideNavProfile from "@components/elements/SideNavProfile";
import { createContext, useState } from "react";
import PropTypes from "prop-types";

const chatContextValue = {
  setSideContactActive: () => null,
};
const ChatLayoutContext = createContext(chatContextValue);

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

ChatLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export { ChatLayoutContext, ChatLayout };

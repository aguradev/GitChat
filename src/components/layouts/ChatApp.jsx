import SideNavContact from "@components/elements/SideNavContact";
import ChatAppCss from "@/assets/css/chatApp.module.css";
import SideNavProfile from "@components/elements/SideNavProfile";
import PropTypes from "prop-types";
import { ChatContextLayout } from "@components/context/ChatContext";

const SidebarLayout = () => {
  return (
    <div className="fixed z-[99] flex sm:relative">
      <SideNavProfile />
      <SideNavContact />
    </div>
  );
};

const ChatLayout = ({ children }) => {
  return (
    <ChatContextLayout>
      <div className={ChatAppCss.wrapper}>
        <SidebarLayout />
        <main className="flex-1 p-6 pl-24 overflow-y-auto sm:pl-6">
          {children}
        </main>
      </div>
    </ChatContextLayout>
  );
};

ChatLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ChatLayout;

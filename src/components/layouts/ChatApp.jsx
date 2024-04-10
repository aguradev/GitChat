import SideNavContact from "@components/elements/SideNavContact";
import ChatAppCss from "@/assets/css/chatApp.module.css";
import SideNavProfile from "@components/elements/SideNavProfile";
import PropTypes from "prop-types";
import { ChatContextLayout } from "@components/context/ChatContext";

const SidebarLayout = () => {
  return (
    <div className="relative z-10 flex">
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
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </ChatContextLayout>
  );
};

ChatLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ChatLayout;

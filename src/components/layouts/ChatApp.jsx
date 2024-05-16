import ChatAppCss from "@/assets/css/chatApp.module.css";
import PropTypes from "prop-types";
import { ChatContextLayout } from "@components/context/ChatContext";

// const SidebarLayout = () => {
//   return (
//     <div className="fixed z-[99] flex sm:relative">
//       <SideNavContact />
//     </div>
//   );
// };

const ChatLayout = ({ children }) => {
  return (
    <ChatContextLayout>
      <div className={ChatAppCss.wrapper}>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </ChatContextLayout>
  );
};

ChatLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ChatLayout;

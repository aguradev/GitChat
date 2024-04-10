import SideNavContact from "@components/elements/SideNavContact";
import ChatAppCss from "@/assets/css/chatApp.module.css";

const ChatLayout = ({ children }) => {
  return (
    <div className={ChatAppCss.wrapper}>
      <SideNavContact />
      {/* <main className="main">{children}</main> */}
    </div>
  );
};

export default ChatLayout;

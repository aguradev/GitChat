import { Avatar, AvatarImage } from "@/components/ui/avatar";
import PropsTypes from "prop-types";
import { UseAppContext } from "../context/AppContext";

const ChatBubble = ({ position, message, timestamp, img }) => {
  const positionChat = position === "right" ? "flex-row-reverse" : "flex-row";
  const parseTimestamp = new Date(timestamp);

  return (
    <div className={`flex p-6 pb-0 items-center gap-x-4 mb-8 ${positionChat}`}>
      <Avatar className="w-14 h-14">
        <AvatarImage src={img} />
      </Avatar>
      <div
        className={`flex gap-y-2 flex-col ${
          position === "right" ? `items-end` : `items-start`
        }`}
      >
        <div className="p-4 rounded bg-zinc-800">
          <p className="text-sm max-w-[800px]">{message}</p>
        </div>
        <span className="text-xs">{parseTimestamp.toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default function ChatLists({ messages, chatListsRef }) {
  const { userSession } = UseAppContext();
  const defaultImg =
    "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";

  return (
    <div className="flex-1 overflow-y-auto">
      {messages &&
        messages.map((message) => (
          <ChatBubble
            position={message.user_id === userSession.id ? `right` : `left`}
            key={message.id}
            message={message.caption}
            timestamp={message.created_at}
            img={
              message.user_id === userSession.id
                ? userSession?.user_metadata?.avatar_url
                : defaultImg
            }
          />
        ))}

      <span ref={chatListsRef}></span>
    </div>
  );
}

ChatLists.propTypes = {
  messages: PropsTypes.arrayOf(PropsTypes.object).isRequired,
};

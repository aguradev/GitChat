import { Avatar, AvatarImage } from "@/components/ui/avatar";
import PropsTypes from "prop-types";

const ChatBubble = ({ position, message, timestamp }) => {
  const positionChat = position === "right" ? "flex-row-reverse" : "flex-row";

  return (
    <div className={`flex p-6 pb-0 items-center gap-x-4 mb-8 ${positionChat}`}>
      <Avatar className="w-14 h-14">
        <AvatarImage
          src={`https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg`}
        />
      </Avatar>
      <div
        className={`flex gap-y-2 flex-col ${
          position === "right" ? `items-end` : `items-start`
        }`}
      >
        <div className="p-4 rounded bg-zinc-800">
          <p className="text-sm max-w-[800px]">{message}</p>
        </div>
        <span className="text-xs">{timestamp}</span>
      </div>
    </div>
  );
};

export default function ChatLists({ messages, chatListsRef }) {
  return (
    <div className="flex-1 overflow-y-auto">
      {messages &&
        messages.map((message) => (
          <ChatBubble
            position={message.message_from === 1 ? `right` : `left`}
            key={message.id}
            message={message.content}
            timestamp={message.timestamp}
          />
        ))}

      <span ref={chatListsRef}></span>
    </div>
  );
}

ChatLists.propTypes = {
  messages: PropsTypes.arrayOf(PropsTypes.object).isRequired,
};
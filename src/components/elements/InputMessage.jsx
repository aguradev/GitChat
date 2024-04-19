import { useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function InputMessage({ sendMessageEvent }) {
  const inputMessage = useRef(null);

  function submitMessage(event) {
    event.preventDefault();
    const input = inputMessage.current;

    if (input.value === "") {
      return;
    }

    sendMessageEvent(input.value.trim());
    input.value = "";
  }

  return (
    <div className="p-4 border-t bg-zinc-900">
      <form
        className="flex items-center gap-x-4"
        onSubmit={submitMessage}
        autoComplete="off"
      >
        <Input
          className="px-5 py-6 rounded-full"
          placeholder="Message here..."
          ref={inputMessage}
        />
        <Button
          type="submit"
          className="w-12 h-12 p-0 text-lg rounded-full dark:bg-zinc-800"
        >
          🕊️
        </Button>
      </form>
    </div>
  );
}

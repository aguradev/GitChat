import { useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { UseAppContext } from "../context/AppContext";
import { supabase } from "@/services/supabase";

export default function InputMessage() {
  const inputMessage = useRef(null);
  const { userSession } = UseAppContext();
  const supabaseConfig = supabase;

  async function submitMessage(event) {
    event.preventDefault();
    const input = inputMessage.current;

    if (input.value === "") {
      return;
    }

    try {
      const { error } = await supabaseConfig
        .from("global_chat")
        .insert([{ user_id: userSession.id, caption: input.value.trim() }])
        .select();

      input.value = "";

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error);
    }
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

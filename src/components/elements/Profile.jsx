import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UseAppContext } from "../context/AppContext";
import { supabase } from "@/services/supabase";

export default function Profile({ profile_url, name }) {
  const { setLoading } = UseAppContext().loadingState;

  async function SignOutHandler() {
    await supabase.auth.signOut();
    setLoading(true);
  }

  return (
    <section>
      <Avatar className="w-16 h-16 mb-4">
        <AvatarImage src={profile_url} />
      </Avatar>
      <h3 className="h5">Welcome, {name}</h3>
      <Button variant="secondary" onClick={SignOutHandler}>
        Logout
      </Button>
    </section>
  );
}

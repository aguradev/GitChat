import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Home(props) {
  const { user, logoutEvent } = props;
  const { avatar_url, full_name, name } = user;

  return (
    <section className="px-4 py-6 md:px-0 small-container">
      <Avatar className="w-16 h-16 mb-4">
        <AvatarImage src={avatar_url} />
      </Avatar>
      <h3 className="h5">Welcome, {name}</h3>
      <Button variant="secondary" onClick={logoutEvent}>
        Logout
      </Button>
    </section>
  );
}

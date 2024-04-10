import { UseAppContext } from "@/components/context/AppContext";
import { ChatLayout } from "@/components/layouts/ChatApp";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Home = (props) => {
  const { userSession } = UseAppContext();
  const { logoutEvent } = props;
  const { avatar_url, name } = userSession.user_metadata;

  return (
    <ChatLayout>
      <section>
        <Avatar className="w-16 h-16 mb-4">
          <AvatarImage src={avatar_url} />
        </Avatar>
        <h3 className="h5">Welcome, {name}</h3>
        <Button variant="secondary" onClick={logoutEvent}>
          Logout
        </Button>
      </section>
    </ChatLayout>
  );
};

export default Home;

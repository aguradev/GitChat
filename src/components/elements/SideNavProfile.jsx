import { useContext } from "react";
import { UseAppContext } from "@/components/context/AppContext";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@components/ui/dropdown-menu";
import { ChatLayoutContext } from "@components/layouts/ChatApp";
import "boxicons";

const ProfileSection = () => {
  const { userSession } = UseAppContext();
  const { avatar_url } = userSession.user_metadata;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-10 h-10 mb-4">
          <AvatarImage src={avatar_url} />
        </Avatar>

        <DropdownMenuContent>
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

const SideNavProfile = () => {
  const { theme } = UseAppContext();
  const { setSideContactActive } = useContext(ChatLayoutContext);
  return (
    <aside className="z-10 h-screen">
      <nav className="h-full p-4 border-r dark:bg-zinc-900 bg-zinc-100">
        <ul>
          <li>
            <ProfileSection />
          </li>
          <li>
            <Button
              variant="secondary"
              className="px-2 rounded-full"
              onClick={() => setSideContactActive((prevStatus) => !prevStatus)}
            >
              <box-icon
                name="menu"
                color={theme === "dark" ? "white" : "black"}
                size="24px"
              ></box-icon>
            </Button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavProfile;

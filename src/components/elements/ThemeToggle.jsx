import { Button } from "@components/ui/button";
import "boxicons";
import { UseAppContext } from "@/components/context/AppContext";
import { useState } from "react";

function DarkMode() {
  return <box-icon type="solid" name="moon" color="white"></box-icon>;
}

function LightMode() {
  return <box-icon type="solid" name="sun" color="black"></box-icon>;
}

export default function ThemeToggle() {
  const { setTheme } = UseAppContext();
  const [statusTheme, setStatusTheme] = useState("system");

  useState(() => {
    if (localStorage.getItem("ui-theme")) {
      setStatusTheme(localStorage.getItem("ui-theme"));
    }
  }, []);

  function changeTheme() {
    console.log("change themes");
    const conditionChange =
      !localStorage.getItem("ui-theme") ||
      localStorage.getItem("ui-theme") === "dark";
    setTheme(conditionChange ? "light" : "dark");
    setStatusTheme(conditionChange ? "light" : "dark");
  }

  return (
    <Button variant="ghost" onClick={changeTheme}>
      {statusTheme === "light" ? <LightMode /> : <DarkMode />}
    </Button>
  );
}

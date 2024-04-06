import { Button } from "@components/ui/button";
import "boxicons";
import { UseTheme } from "@/components/provider/theme";
import { useState } from "react";

function DarkMode() {
  return <box-icon type="solid" name="moon" color="white"></box-icon>;
}

function LightMode() {
  return <box-icon type="solid" name="sun" color="black"></box-icon>;
}

export default function ThemeToggle() {
  const { setTheme } = UseTheme();
  const [statusTheme, setStatusTheme] = useState(
    () => localStorage.getItem("ui-theme") || "system"
  );

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

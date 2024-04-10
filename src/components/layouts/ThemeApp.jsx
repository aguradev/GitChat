import { AppContext } from "@/components/context/AppContext";

export default function ThemeApp({ children }) {
  return (
    <AppContext defaultTheme="dark" storageKey="ui-theme">
      {children}
    </AppContext>
  );
}

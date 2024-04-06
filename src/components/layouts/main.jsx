import { ThemeProvider } from "@/components/provider/theme";
import ThemeToggle from "@/components/elements/ThemeToggle";

export default function LayoutApp({ children }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <nav className="p-4">
        <div className="flex items-center justify-between mx-auto small-container">
          <div className="text-2xl font-bold">GitChat 💬</div>

          <div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      {children}
    </ThemeProvider>
  );
}

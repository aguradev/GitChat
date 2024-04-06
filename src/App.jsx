import { ThemeProvider } from "@/components/provider/theme";
import LoginPage from "@/pages/Login";
import ThemeToggle from "./components/elements/ThemeToggle";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <main className="relative">
          <nav className="p-4">
            <div className="flex items-center justify-between mx-auto small-container">
              <div className="text-2xl font-bold">GitChat 💬</div>

              <div>
                <ThemeToggle />
              </div>
            </div>
          </nav>

          <section className={`max-w-[500px] mx-auto py-72 px-2`}>
            <LoginPage />
          </section>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;

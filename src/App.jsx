import { ThemeProvider } from "@/components/provider/theme";
import LoginPage from "@/pages/Login";
import ThemeToggle from "./components/elements/ThemeToggle";
import supabase from "@/services/supabase";
import { useEffect, useState } from "react";

function App() {
  const [userSession, setUserSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSessionUser() {
      const { data } = await supabase.auth.getSession();

      if (data) {
        const { session } = data;
        setUserSession(session);
        console.log("before", session);

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
          setUserSession(session);
        });

        setTimeout(() => setLoading(false), 3000);

        return () => subscription.unsubscribe();
      }

      return;
    }

    getSessionUser();
  }, []);

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

          {loading ? (
            <div>loading...</div>
          ) : userSession ? (
            <section className="small-container">
              <h1>Welcome</h1>
            </section>
          ) : (
            <LoginPage />
          )}
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;

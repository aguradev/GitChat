import { ThemeProvider } from "@/components/provider/theme";
import { useEffect, useState } from "react";
import supabase from "@/services/supabase";

import LoaderSection from "@/components/elements/Loader";
import LoginPage from "@/pages/Login";
import Home from "@/pages/Home";
import LayoutApp from "./components/layouts/main";

function App() {
  const [userSession, setUserSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function updateStateLoading() {
      await new Promise((res) => {
        setTimeout(() => {
          setLoading(false);
          res(true);
        }, 1000);
      });
    }

    async function getSessionUser() {
      const { data } = await supabase.auth.getSession();

      if (data) {
        const { session } = data;
        setUserSession(session);

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
          setUserSession(session?.user);
        });

        await updateStateLoading();

        return () => subscription.unsubscribe();
      }

      await updateStateLoading();

      return;
    }

    getSessionUser();
  }, []);

  async function SignOutHandler() {
    await supabase.auth.signOut();
    setLoading(true);
  }

  useEffect(() => {
    if (loading) {
      const timerLoading = setTimeout(() => setLoading(false), 1000);
      return () => clearInterval(timerLoading);
    }

    return;
  }, [loading]);

  return (
    <>
      <LayoutApp>
        <main className="relative">
          {loading ? (
            <LoaderSection />
          ) : userSession ? (
            <Home
              user={userSession.user_metadata}
              logoutEvent={SignOutHandler}
            />
          ) : (
            <LoginPage />
          )}
        </main>
      </LayoutApp>
    </>
  );
}

export default App;

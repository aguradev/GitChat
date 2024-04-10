import { useEffect, useState } from "react";
import supabase from "@/services/supabase";

import LoaderSection from "@/components/elements/Loader";
import LoginPage from "@/pages/Login";
import Home from "@/pages/Home";
import { UseAppContext } from "@components/context/AppContext";

function App() {
  const [loading, setLoading] = useState(true);
  const { userSession } = UseAppContext();

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
      {loading ? (
        <LoaderSection />
      ) : userSession ? (
        <Home logoutEvent={SignOutHandler} />
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default App;

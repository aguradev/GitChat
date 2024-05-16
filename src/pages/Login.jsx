import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabase";
import ThemeToggle from "@/components/elements/ThemeToggle";
import "boxicons";
import { UseAppContext } from "@/components/context/AppContext";
import FooterSection from "@/components/ui/footer";

const LoginPage = () => {
  const supabaseConfig = supabase;
  const { authUrlState } = UseAppContext();

  async function handleOauthSignIn(provider) {
    try {
      const { err } = await supabaseConfig.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: import.meta.env.VITE_SUPABASE_REDIRECT_URL,
        },
      });

      if (err) {
        throw new Error(err);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-4">
        <div className="flex items-center justify-between mx-auto small-container">
          <div className="text-2xl font-bold">GitChat 💬</div>

          <div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="flex flex-col h-screen">
        <section
          className={`max-w-[500px] mx-auto px-2 flex-1 place-content-center`}
        >
          <h1 className="text-center h1">Welcome to GitChat 💬</h1>
          <div className="flex flex-col gap-y-3">
            <Button
              className="flex overflow-hidden gap-x-2"
              onClick={() => handleOauthSignIn("google")}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                className="w-[18px] h-[18px]"
              />
              Sign in with google
            </Button>
            <Button
              className="flex overflow-hidden gap-x-2"
              onClick={() => handleOauthSignIn("github")}
            >
              <box-icon type="logo" name="github" color="silver"></box-icon>
              Sign in with github
            </Button>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
};

export default LoginPage;

import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabase";
import ThemeToggle from "@/components/elements/ThemeToggle";
import "boxicons";
import { UseAppContext } from "@/components/context/AppContext";

const LoginPage = () => {
  const supabaseConfig = supabase;
  const { authUrlState } = UseAppContext();

  async function handleOauthSignIn(provider) {
    try {
      const { data, err } = await supabaseConfig.auth.signInWithOAuth({
        provider: provider,
        options: {
          skipBrowserRedirect: true,
          redirectTo: import.meta.env.VITE_SUPABASE_REDIRECT_URL,
        },
      });

      if (err) {
        throw new Error(err);
      }

      if (data?.url) {
        authUrlState.setAuthUrl(data?.url);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <nav className="p-4">
        <div className="flex items-center justify-between mx-auto small-container">
          <div className="text-2xl font-bold">GitChat 💬</div>

          <div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className={`max-w-[500px] mx-auto py-72 px-2`}>
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
    </>
  );
};

export default LoginPage;

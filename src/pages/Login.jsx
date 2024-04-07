import { Button } from "@/components/ui/button";
import supabase from "@/services/supabase";
import "boxicons";

const LoginPage = () => {
  const supabaseConfig = supabase;

  async function handleOauthSignIn(provider) {
    try {
      const { data, err } = await supabaseConfig.auth.signInWithOAuth({
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

import { Button } from "@/components/ui/button";
import supabase from "@/services/supabase";

const LoginPage = () => {
  const supabaseConfig = supabase;

  async function handleOauthSignIn(provider) {
    const { data, err } = await supabaseConfig.auth.signInWithOAuth({
      provider: provider,
    });

    console.log(data);
  }

  return (
    <>
      <section className={`max-w-[500px] mx-auto py-72 px-2`}>
        <h1 className="mb-8 text-4xl font-bold text-center">
          Welcome to GitChat 💬
        </h1>
        <div className="flex flex-col gap-y-3">
          <Button className="flex overflow-hidden gap-x-2">
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
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              className="w-[18px] h-[18px]"
            />
            Sign in with github
          </Button>
        </div>
      </section>
    </>
  );
};

export default LoginPage;

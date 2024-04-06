import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <>
      <h1 className="text-4xl mb-8 font-bold">Welcome to GitChat 💬</h1>
      <div className="flex flex-col gap-y-3">
        <Button className="overflow-hidden flex gap-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            className="w-[18px] h-[18px]"
          />
          Sign in with google
        </Button>
        <Button className="overflow-hidden flex gap-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            className="w-[18px] h-[18px]"
          />
          Sign in with github
        </Button>
      </div>
    </>
  );
};

export default LoginPage;

import LoaderSection from "@/components/elements/Loader";
import LoginPage from "@/pages/Login";
import Home from "@/pages/Home";
import { UseAppContext } from "@components/context/AppContext";

function App() {
  const { loading } = UseAppContext().loadingState;
  const { userSession } = UseAppContext();

  return (
    <>{loading ? <LoaderSection /> : userSession ? <Home /> : <LoginPage />}</>
  );
}

export default App;

import { ThemeProvider } from "./components/provider/theme";
import LoginPage from "@/pages/Login";
// import { GeistSans } from "geist/font/sans";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <main className={`grid place-content-center h-screen`}>
          <LoginPage />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;

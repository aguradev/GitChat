import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/base.css";
import "@/assets/css/ui.css";
import "./assets/css/index.css";
import ThemeApp from "@components/layouts/ThemeApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeApp>
      <App />
    </ThemeApp>
  </React.StrictMode>
);

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// eslint-disable-next-line react-refresh/only-export-components
const Main = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={
        theme === "light"
          ? "bg-white text-black min-h-screen"
          : "bg-gray-900 text-white min-h-screen"
      }
    >
      <BrowserRouter>
        <SnackbarProvider>
          <App theme={theme} toggleTheme={toggleTheme} />
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<Main />);

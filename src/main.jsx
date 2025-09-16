import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { VerseProvider } from "./contexts/VerseContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <VerseProvider>
        <App />
      </VerseProvider>
    </BrowserRouter>
  </StrictMode>
);

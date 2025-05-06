import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles/index.css'
import LinkProvider from "./context/CreateLinkProvider.jsx";
import PasswordProvider from "./context/CreatePasswordProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LinkProvider>
      <PasswordProvider>
        <App />
      </PasswordProvider>
    </LinkProvider>
  </StrictMode>
);

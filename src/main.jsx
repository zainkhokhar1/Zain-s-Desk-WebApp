import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import LinkProvider from "./context/CreateLinkProvider.jsx";
import PasswordProvider from "./context/CreatePasswordProvider.jsx";
import CreateNewBookProvider from "./context/CreateNewBookContextProvider.jsx";
import ChapterCreateProvider from "./context/CreateChapterProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreateNewBookProvider>
      <LinkProvider>
        <PasswordProvider>
          <ChapterCreateProvider>
            <App />
          </ChapterCreateProvider>
        </PasswordProvider>
      </LinkProvider>
    </CreateNewBookProvider>
  </StrictMode>
);

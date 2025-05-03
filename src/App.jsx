import Navbar from "./components/sidebar/SideBar";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./screens/Settings";
import ExamPreparation from "./screens/ExamPreparation";
import QuickLinks from "./screens/QuickLinks";
import PasswordVault from "./screens/PasswordVault";
import Todos from "./screens/Todos";
import Notifications from "./screens/Notifications";
import ExpenseManagement from "./screens/ExpenseManagement";
import LinkProvider from "./context/CreateLinkProvider";
import Chapters from "./screens/Chapters";

function App() {
  return (
    <div className="bg-black pb-2 overflow-x-hidden text-[#F0F0F0]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam-preparation" element={<ExamPreparation />} />
          <Route path="/quick-links" element={<QuickLinks />} />
          <Route path="/password-vault" element={<PasswordVault />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/expense-management" element={<ExpenseManagement />} />
          <Route path="/:subject/chapters" element={<Chapters />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

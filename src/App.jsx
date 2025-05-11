import Navbar from "./components/sidebar/SideBar";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./screens/Settings";
import ExamPreparation from "./screens/exam-preparation/ExamPreparation";
import QuickLinks from "./screens/QuickLinks";
import PasswordVault from "./screens/PasswordVault";
import Notifications from "./screens/Notifications";
import ExpenseManagement from "./screens/ExpenseManagement";
import Chapters from "./screens/exam-preparation/Chapters";
import SingleChapterPreview from "./screens/exam-preparation/SingleChapterPreview";
import Main from "./screens/productivity-tracker/Main";

function App() {
  return (
    <div className="bg-black pb-2 overflow-x-hidden text-[#F0F0F0]">
      <Router>
        <Navbar />
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Exam Preparation Routes */}
          <Route path="/exam-preparation" element={<ExamPreparation />} />
          <Route
            path="exam-preparation/:subject/chapters"
            element={<Chapters />}
          />
          <Route
            path="exam-preparation/:subject/:chapter"
            element={<SingleChapterPreview />}
          />

          {/* Other Routes */}
          <Route path="/quick-links" element={<QuickLinks />} />
          <Route path="/password-vault" element={<PasswordVault />} />
          <Route path="/productiviy-tracker" element={<Main />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/expense-management" element={<ExpenseManagement />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

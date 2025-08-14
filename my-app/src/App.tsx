import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import ProjectsPage from "./pages/Projects";
import MyTasksPage from "./pages/MyTasks";
import CalendarPage from "./pages/Calendar";
import TimeManagePage from "./pages/TimeManage";
import SettingsPage from "./pages/Settings";

import styles from "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/my-tasks" element={<MyTasksPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/time-manage" element={<TimeManagePage />} />
        <Route path="/settings" element={<SettingsPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

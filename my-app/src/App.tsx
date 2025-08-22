import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects/Projects";
import Settings from "./pages/SettingsP/Settings";

import styles from "./App.scss";
import Project from "./pages/Project/Project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/project" element={<Project />} />
        <Route path="/my-tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

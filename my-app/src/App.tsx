import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Settings from "./pages/SettingsP/Settings";
import Tasks from "./pages/Tasks";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Project from "./pages/Project/Project";
import { useStore } from "./stores/StoreContext";
const App = observer(() => {
  const { themeStore } = useStore();
  useEffect(() => {
    themeStore.isInLocalStorage();
  }, []);
  return (
    <div className="app" data-theme={themeStore.getTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/my-tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
});

export default App;

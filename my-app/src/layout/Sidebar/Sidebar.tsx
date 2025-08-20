import { NavLink } from "react-router-dom";
import { LuLayoutDashboard, LuFolder, LuSquareCheck, LuCalendar,
         LuClock3, LuSettings } from "react-icons/lu";
         
import  "./sidebar.scss";

const items = [
  { to: "/",            label: "Dashboard",  icon: <LuLayoutDashboard /> },
  { to: "/projects",    label: "Projects",   icon: <LuFolder /> },
  { to: "/my-tasks",    label: "My Tasks",   icon: <LuSquareCheck /> },
  { to: "/calendar",    label: "Calendar",   icon: <LuCalendar /> },
  { to: "/time-manage", label: "Time Manage",icon: <LuClock3 /> },
  { to: "/settings",    label: "Settings",   icon: <LuSettings /> },
];

const Sidebar = () => {
  return (
      <aside className="sidebar__wrapper">
        <nav className="sidebar__nav">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end
              className={({ isActive }) =>
                ["sidebar__item", isActive && "active"].filter(Boolean).join(" ")
              }
            >
              <span className="sidebar__icon">{it.icon}</span>
              <span className="sidebar__label">{it.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    
  );
}

export default Sidebar;
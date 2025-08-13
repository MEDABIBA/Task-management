import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./AppLayout.scss";

const AppLayout = ({ children }) => {
  return (
    <div className="wrap">
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  );
}

export default AppLayout;
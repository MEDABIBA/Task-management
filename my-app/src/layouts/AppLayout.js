import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import styles from "./AppLayout.scss";

const AppLayout = ({ children }) => {
  return (
    <div className="wrap">
      <Sidebar />
      <main className="main">
        <Header/>
        {children}
      </main>
    </div>
  );
}

export default AppLayout;
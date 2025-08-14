import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import styles from "./AppLayout.scss";
import type { JSX, ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="wrap">
      <Sidebar />
      <main className="main">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default AppLayout;

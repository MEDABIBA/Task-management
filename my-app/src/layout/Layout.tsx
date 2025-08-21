import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

import { PropsWithChildren } from "react";

import "./layout.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-main">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

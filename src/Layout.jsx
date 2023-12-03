import React from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="default wid-100-p hei-100-p">
      <Header />
      <main className="default wid-100-p hei-100-p">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

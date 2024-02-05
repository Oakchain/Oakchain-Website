import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [showSideBar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSideBar);
  };

  return (
    <>
      <Header toggle={toggleSidebar} />
      <Sidebar show={showSideBar} toggle={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

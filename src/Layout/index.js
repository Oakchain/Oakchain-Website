import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children, hideFooter = false }) => {
  const [showSideBar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSideBar);
  };

  return (
    <>
      <Header toggle={toggleSidebar} />
      <Sidebar show={showSideBar} toggle={toggleSidebar} />
      {children}
      {hideFooter ? null : <Footer />}
    </>
  );
};

export default Layout;

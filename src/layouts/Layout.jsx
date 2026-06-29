import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const hideNavbar =
    location.pathname === "/admin-dashboard" ||
    location.pathname === "/add-property";

  const hideFooter =
    location.pathname === "/admin-dashboard" ||
    location.pathname === "/add-property";

  return (
    <>
      {!hideNavbar && <Navbar show={show} setShow={setShow} />}

      <Outlet />

      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  const location = useLocation();

  // ✅ Hide navbar/footer when on login or signup page
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Header />}
      
      <main>
        <Outlet /> {/* This is where Home, Login, Signup will render */}
      </main>

      {!hideNavbar && <Footer />}
    </>
  );
}
import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import "./index.css";

import Layout from "./Router.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Chatbot from "./components/Chatbot.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

function RootApp() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // ms
      once: true,       // run once per element
      easing: "ease-out-cubic"
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Chatbot />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);
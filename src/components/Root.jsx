import React from "react";
import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <>
      <Heading />
      <Outlet />
      <Footer />
    </>
  );
}

import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <div className="h-screen">
        <div>
          <Header />
          <div className="min-h-screen ">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

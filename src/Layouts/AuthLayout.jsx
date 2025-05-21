import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div className="bg-[#F8F5F8] pt-10">
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;

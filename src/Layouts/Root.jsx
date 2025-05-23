import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer"
import "../index.css";

const Root = () => {
  return (
    <div className="bg-base-100 pt-10">
      <div className="md:container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default Root;

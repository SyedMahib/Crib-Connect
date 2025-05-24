import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer"
import "../index.css";

const Root = () => {
  return (
    <div className="dark:bg-gray-900 pt-10">
      <div className=" bg-base-100 md:container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default Root;

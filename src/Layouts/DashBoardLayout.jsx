import React, { useState } from "react";
import { FaBars, FaClipboardList, FaList, FaPlus, FaTimes, FaUser } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const DashBoardLayout = () => {

     const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);


  return (
    <div className="flex min-h-screen bg-gray-100 overflow-x-auto">

 <button
        className="lg:hidden fixed top-25 left-2 z-50 text-2xl text-primary"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed lg:static top-23 left-0 z-40 w-64 bg-white shadow-md p-4 pt-16 transform transition-transform duration-300
  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
  lg:translate-x-0`}>
        <h2 className="text-3xl font-bold mb-6 text-primary">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold flex items-center gap-2"
                  : "text-secondary flex items-center gap-2 "
              }
            >
              <FaClipboardList /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addToFindRoommates"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold flex items-center gap-2"
                  : "text-secondary flex items-center gap-2 hover:font-bold"
              }
            >
              <FaPlus /> Add Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myListings"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold flex items-center gap-2"
                  : "text-secondary flex items-center gap-2 hover:font-bold"
              }
            >
              <FaList /> My Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold flex items-center gap-2"
                  : "text-secondary flex items-center gap-2 hover:font-bold"
              }
            >
              <FaUser /> Profile
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Navbar></Navbar>
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoardLayout;

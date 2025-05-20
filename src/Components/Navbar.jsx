import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#3D365C] font-bold " : "text-[#7C4585]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#3D365C] font-bold " : "text-[#7C4585]"
          }
          to="/addToFindRoommates"
        >
          Add to Find Roommate
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#3D365C] font-bold " : "text-[#7C4585]"
          }
          to="/browseListings"
        >
          Browse Listing
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#3D365C] font-bold " : "text-[#7C4585]"
          }
          to="/myListings"
        >
          My Listings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-3xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
                    <img className="w-[70px]" src={logo} alt="" />
                    <a className="font-extrabold text-2xl text-[#3D365C]">CribConnect</a>
                  </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <a className=" bg-[#F8B55F] btn text-[#3D365C] font-bold">LogIn</a>
        <a className=" bg-[#F8B55F] btn text-[#3D365C] font-bold">SignUp</a>
      </div>
    </div>
  );
};

export default Navbar;

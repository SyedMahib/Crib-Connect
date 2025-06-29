import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { IoLogOut } from "react-icons/io5";
import { FaBlenderPhone, FaExclamationCircle, FaHome } from "react-icons/fa";
import { AiTwotoneFileAdd } from "react-icons/ai";
import { PiBrowsersFill } from "react-icons/pi";
import { MdDashboardCustomize, MdOutlinePostAdd, MdOutlineSupportAgent } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);


  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged Out successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const navLinks = (
    <>
      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary dark:text-blue-600 font-bold" : "text-secondary"
          }
          to="/"
        >
          <FaHome size={21} />
          Home
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold " : "text-secondary"
          }
          to="/about"
        >
          <FaExclamationCircle size={20} />
          About Us
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold " : "text-secondary"
          }
          to="/browseListings"
        >
          <PiBrowsersFill size={22} />
          Browse Listing
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold " : "text-secondary"
          }
          to="/contact"
        >
          <FaBlenderPhone size={20} />
          Contact Us
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold " : "text-secondary"
          }
          to="/support"
        >
          <MdOutlineSupportAgent size={23} />
          Support
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-sm rounded-3xl px-2 md:px-5">
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
          <img className="w-[35px] md:w-[70px]" src={logo} alt="" />
          <a className="font-extrabold text-lg md:text-2xl text-primary">
            CribConnect
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="rounded-full ring">
                <img
                  id="user-profile-avatar"
                  className="w-[100px]"
                  alt="User Image"
                  src={`${user && user.photoURL}`}
                  data-tooltip-content={user.displayName}
                  data-tooltip-place="bottom"
                />
                <Tooltip anchorSelect="#user-profile-avatar" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/dashboard" className="text-primary font-bold text-sm">
                  <MdDashboardCustomize size={22}/>
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-primary font-bold text-sm"
                >
                  <IoLogOut size={25} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Link
              to={`/auth/login`}
              className=" bg-[#F8B55F] btn text-primary font-bold text-xs md:text-sm w-[70px]"
            >
              LogIn
            </Link>
            <Link
              to={`/auth/signUp`}
              className=" bg-[#F8B55F] btn text-primary font-bold text-xs md:text-sm w-[70px]"
            >
              SignUp
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer  bg-[#3D365C] p-10">
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between text-neutral-content md:items-center container md:mx-auto">
        <aside className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="" className="w-[85px]" />
            <div className="space-y-1">
              <h1 className="text-xl font-bold">CribConnect</h1>
              <p className="w-[70%] font-medium">
                Find your best roommate with CribConnect
              </p>
            </div>
          </div>
          <p className="">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
        <div>
          <h1 className="font-bold text-lg mb-2">Company</h1>
          <div>
            <ul className="space-y-2">
              <li className="hover:font-bold">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:font-bold">
                <Link to="/browselistings">BrowseListings</Link>
              </li>
              <li className="hover:font-bold">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="hover:font-bold">
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-2 text-lg">Contact Us</h1>
          <div className="flex flex-col gap-2">
            <p>Addess : Syed Tower, Uttara,Dhaka-1230 </p>
            <p>Phone : +8801310339171, +8801300339171</p>
            <p>Email : syedmahib8@gmail.com </p>
          </div>
        </div>
        <nav className="grid grid-col gap-4 md:place-self-center md:justify-self-end">
          <div className="flex gap-4">
            <FaFacebook size={25}></FaFacebook>
            <FaInstagram size={25}></FaInstagram>
            <FaGithub size={25}></FaGithub>
          </div>
          <Link>Terms and condition</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

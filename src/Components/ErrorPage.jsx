import React from "react";
import Error from "../assets/errorLottie.json";
import { Link } from "react-router";
import Lottie from "lottie-react";
import Navbar from "../Components/Navbar";

const ErrorPage = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <Navbar></Navbar>
      <div className="flex-grow container mx-auto flex items-center justify-center flex-col pt-[40px] pb-[87px]">
        <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] max-w-full max-h-[70vh]">
          <Lottie animationData={Error} loop={true}></Lottie>
        </div>
        <h2 className="text-center text-primary font-bold text-3xl">
          Oops! You have landed on a wrong path
        </h2>
        <Link
          to="/"
          className="btn bg-[#F8B55F] text-primary font-bold mt-10"
        >
          Go back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

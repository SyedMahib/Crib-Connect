import React from "react";
import logo from "../assets/logo.png"

const AboutUs = () => {
  const data = [
    {
      title: "Verified Users",
      desc: "All users are verified for safety and trust.",
    },
    {
      title: "Location-Based Listings",
      desc: "Search by university or city to find nearby roommates.",
    },
    {
      title: "Real-Time Availability",
      desc: "Always up-to-date room and roommate availability.",
    },
    {
      title: "No Hidden Fees",
      desc: "Completely transparent and upfront platform.",
    },
    {
      title: "Community First",
      desc: "Focused on user experience and mutual respect.",
    },
    { title: "Fast & Simple", desc: "Post or find rooms in under 5 minutes." },
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          About CribConnect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-80 md:h-96 overflow-hidden rounded-lg shadow">
            <img
              src={logo}
              alt="About CribConnect"
              className="w-[500px] h-full object-cover"
            />
          </div>

          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              <strong>CribConnect</strong> is a modern platform designed to help
              students and young professionals find the perfect roommates and
              rental listings — fast, safely, and with ease. Whether you’re
              moving for school, work, or simply seeking a better living
              situation, we’re here to connect you with verified listings and
              trustworthy people.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              With our intuitive listing system, real-time availability, and
              profile-based roommate search, CribConnect empowers users to find
              their ideal match without the usual stress or uncertainty.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is to simplify the way people find shared housing —
              making it safe, transparent, and community-driven.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
            Why CribConnect?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all"
              >
                <h4 className="text-xl font-bold text-secondary mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

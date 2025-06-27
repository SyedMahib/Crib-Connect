import React from "react";
import { FaShieldAlt, FaMapMarkedAlt, FaBell, FaUsers } from "react-icons/fa";

const WhyTrustUs = () => {
  const reasons = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Verified Users",
      desc: "Every user is authenticated to ensure safety and trust.",
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl text-green-600" />,
      title: "Location-Based Listings",
      desc: "Find roommates and rooms based on your preferred location or university.",
    },
    {
      icon: <FaBell className="text-3xl text-yellow-600" />,
      title: "Real-Time Alerts",
      desc: "Get notified instantly when a listing matches your preferences.",
    },
    {
      icon: <FaUsers className="text-3xl text-purple-600" />,
      title: "Community First",
      desc: "Built for students and renters with a focus on transparency and respect.",
    },
  ];

  return (
    <section className="mb-[100px]">
      <div className=" mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Why Trust Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-10 rounded-xl shadow hover:shadow-md transition-all text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl text-primary font-semibold mb-2">{item.title}</h4>
              <p className="text-secondary font-medium text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;

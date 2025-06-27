import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaHome, FaHandshake } from "react-icons/fa";

const QuickStates = () => {
  const stats = [
    {
      id: 1,
      title: "Total Users",
      value: 1200,
      icon: <FaUsers className="text-3xl text-blue-600" />,
    },
    {
      id: 2,
      title: "Listings Posted",
      value: 500,
      icon: <FaHome className="text-3xl text-green-600" />,
    },
    {
      id: 3,
      title: "Successful Matches",
      value: 300,
      icon: <FaHandshake className="text-3xl text-purple-600" />,
    },
  ];

  return (
    <section className="mb-[100px] pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Quick Stats
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-all"
            >
              <div className="bg-gray-100 p-3 rounded-full">{stat.icon}</div>
              <div>
                <p className="text-primary font-semibold text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-secondary">
                  <CountUp end={stat.value} duration={3} enableScrollSpy={true} scrollSpyDelay={200} />
                  <span className="text-base text-gray-400">+</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStates;

import React, { use } from 'react';
import { Link } from 'react-router';

const howItWorksPromise = fetch("/HowItWorks.json")
.then((res) => res.json());

const HowItWorks = () => {
  
    const howItWorks = use(howItWorksPromise);

  return (
    <section className="my-[100px]"> 
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-primary mb-6">Ready to find your perfect roommate?</p>
          <Link
            to="/browseListings" 
            className="inline-block bg-[#F8B55F] text-primary hover:bg-[#E8A54F] font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
          >
            Start Browsing Roommates
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedListings = () => {
  const [featuredListings, setFeaturedListings] = useState([]);
  const [error, setError] = useState(null);

  const featuredListingData = () => {
    fetch("https://a-10-server-side-phi.vercel.app/featuredListings")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedListings(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    featuredListingData();
  }, []);

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <section className="mb-[100px]">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Featured Roommate Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listings) => (
            <div
              key={listings._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={listings.image}
                  alt={listings.title}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {listings.title}
                </h3>

                <p className="text-lg font-bold text-secondary mb-2">
                  ৳ {listings.rentAmount}/month
                </p>
                <p className="text-gray-600 mb-1">
                  Location: {listings.location}
                </p>

                <p className="text-gray-600 mb-4">
                  Status:{" "}
                  <span className="text-emerald-600 font-bold">
                    {listings.availability}
                  </span>
                </p>

                <p className="text-gray-600 mb-1">
                  Room Type: {listings.roomType}
                </p>

                <div className="flex justify-end mt-auto">
                  <Link
                    to={`/listingDetails/${listings._id}`}
                    className="inline-block bg-[#F8B55F] text-primary hover:bg-[#E8A54F] font-bold py-2 px-4 rounded transition duration-200"
                  >
                    See more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;

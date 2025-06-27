import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const BrowseListings = () => {
  const listings = useLoaderData();

  const [sortOrder, setSortOrder] = useState(() => {
    return localStorage.getItem("sortOrder") || "asc";
  });

  const handleSortChange = (e) => {
    const selectOrder = e.target.value;
    setSortOrder(selectOrder);
    localStorage.setItem("sortOder", selectOrder);
  };

  const sortedListings = [...listings].sort((a, b) => {
    const lowRent = parseInt(a.rentAmount);
    const highRent = parseInt(b.rentAmount);
    return sortOrder === "asc" ? lowRent - highRent : highRent - lowRent;
  });

  return (
    <section className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Browse All Roommate Posts
        </h2>

        <div className="flex justify-end mb-6">
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedListings.map((listing) => (
            <div
              key={listing._id}
              className="bg-white shadow-md rounded-xl hover:shadow-lg"
            >
              <div className="w-full h-52 sm:h-48 md:h-56 overflow-hidden rounded-t-xl">
                <img
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
                  src={listing.image}
                  alt={listing.title}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {listing.title}
                </h3>

                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Location:</span>{" "}
                  {listing.location}
                </p>

                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Posted By:</span> {listing.name}
                </p>

                <p className="text-secondary font-bold mt-2">
                  Rent: ৳ {listing.rentAmount}/month
                </p>

                <div className="mt-3">
                  <span
                    className={`inline-block text-xs px-3 py-1 font-semibold rounded-full ${
                      listing.availability === "Available"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {listing.availability}
                  </span>
                </div>

                <div className="mt-auto pt-4">
                  <Link
                    to={`/listingDetails/${listing._id}`}
                    className="inline-block bg-[#F8B55F] text-primary hover:bg-[#E8A54F] font-bold py-2 px-4 rounded transition duration-200"
                  >
                    See More
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

export default BrowseListings;

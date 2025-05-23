import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ListingCard from './ListingCard';

const BrowseListings = () => {

    const listings = useLoaderData()

    return (
        <section className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Browse All Roommate Posts
        </h2>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border-collapse">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Title</th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Location</th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Rent</th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Room Type</th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Availability</th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Posted By</th>
                <th className="py-3 px-6 text-center text-sm font-semibold uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {listings.map((listing) => (
                <tr key={listing._id} className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="py-4 px-6 text-primary font-semibold truncate">{listing.title}</td>
                  <td className="py-4 px-6 text-gray-700 truncate">{listing.location}</td>
                  <td className="py-4 px-6 text-secondary font-bold truncate">৳ {listing.rentAmount}/month</td>
                  <td className="py-4 px-6 text-gray-700">{listing.roomType}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      listing.availability === 'Available' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {listing.availability}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-primary">{listing.name || 'N/A'}</td> {/* Display name if available */}
                  <td className="py-4 px-6 text-center">
                    <Link
                      to={`/listings/${listing._id}`}
                      className="inline-block bg-[#F8B55F] text-primary hover:bg-[#E8A54F] font-bold py-2 px-4 rounded transition duration-200 truncate"
                    >
                      See More
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    );
};

export default BrowseListings;
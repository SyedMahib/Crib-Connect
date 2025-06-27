import React from "react";
import { Link } from "react-router";

const JoinUs = () => {
  return (
    <section className="mb-[100px] py-20 rounded-xl bg-gradient-to-r from-primary to-secondary text-white mx-1">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to find your perfect roommate?
        </h2>
        <p className="text-lg mb-8">
          Join thousands already using CribConnect to post and discover room
          listings.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/browselistings"
            className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Browse Listings
          </Link>
          <Link
            to="/dashboard/addToFindRoommates"
            className="bg-white text-secondary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Post a Room
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;

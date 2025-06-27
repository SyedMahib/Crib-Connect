import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const ListingDetails = () => {
  const {
    _id,
    image,
    name,
    email,
    title,
    location,
    roomType,
    rentAmount,
    lifeStyle,
    description,
    contactInfo,
    availability,
    likeCount: initialLikeCount,
  } = useLoaderData();
  const { user } = use(AuthContext);

  const [likeCount, setLikeCount] = useState(initialLikeCount || 0);
  const [showContact, setShowContact] = useState(false);

  const handleLike = () => {
    if (user.email === email) {
      Swal.fire({
        icon: "info",
        title: "Oops!",
        text: "You cannot like your own post.",
        showConfirmButton: true,
      });
      return;
    }

    setLikeCount((prevCount) => prevCount + 1);
    setShowContact(true);

    fetch(`https://a-10-server-side-phi.vercel.app/listings/${_id}/like`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Liked!",
            text: "You have liked the post.",
            showConfirmButton: true,
          });
        }
      });
  };

  return (
    <div className="min-h-[calc(100vh-323px)]">
      <section className="py-12 min-h-screen mx-2">
        <div className="container mx-auto px-10 max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <p className="text-xl font-bold text-center text-secondary mb-6">
            {likeCount} people interested in this post!
          </p>

          <div className="w-full max-h-96 overflow-hidden mx-auto mb-6 rounded-lg shadow-md">
            <img
              className="w-full h-full object-cover object-center"
              src={image}
              alt={title}
            />
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-6 text-center">
            {title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
            {/* Rent Amount */}
            <div className="info-item">
              <p className="text-gray-600 font-semibold">Rent Amount:</p>
              <p className="text-xl md:text-2xl font-bold text-secondary">
                ৳ {rentAmount}/month
              </p>
            </div>

            {/* Location */}
            <div className="info-item">
              <p className="text-gray-600 font-semibold">Location:</p>
              <p className="md:text-lg text-gray-800 font-medium">{location}</p>
            </div>

            {/* Room Type */}
            <div className="info-item">
              <p className="text-gray-600 font-semibold">Room Type:</p>
              <p className="text-lg text-gray-800">{roomType}</p>
            </div>

            {/* Availability */}
            <div className="info-item">
              <p className="text-gray-600 font-semibold">Status:</p>
              <p
                className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                  availability === "Available"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {availability}
              </p>
            </div>

            {/* Lifestyle */}
            <div className="info-item">
              <p className="text-gray-600 font-semibold">
                Lifestyle Preference:
              </p>
              <p className="text-lg text-gray-800">{lifeStyle}</p>
            </div>

            {/* Posted By */}
            <div className="info-item">
              <p className="text-gray-600 font-semibold">Posted By:</p>
              <p className="text-lg text-gray-800">{name}</p>
            </div>

            {/* Description */}
            <div className="col-span-1 md:col-span-2 mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Description:
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {description}
              </p>
            </div>
          </div>

          {/* Like Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleLike}
              className="bg-[#F8B55F] text-primary hover:bg-[#E8A54F] font-bold py-3 px-8 rounded-full transition duration-200 text-lg shadow-md hover:shadow-lg"
            >
              Like This Post!
            </button>
          </div>

          {/* Contact Information */}
          {showContact && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                Contact Information
              </h3>
              {user && (
                <div className="text-center">
                  <p className="text-lg text-gray-800 mb-2">
                    <span className="font-semibold">Email : </span> {email}
                  </p>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">Phone : </span>
                    {contactInfo || "Not provided"}
                  </p>
                </div>
              )}
            </div>
          )}
          <div className="text-center mt-10">
            <Link
              to="/browseListings"
              className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-200"
            >
              Back to Browse Listings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingDetails;

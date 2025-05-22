import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user, userLoading } = use(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const [error, setError] = useState(null);

  const myListingData = () => {
    fetch(`http://localhost:3000/listings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyListings(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    myListingData();
  }, [user, userLoading]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/listings/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your listing has been deleted.",
                icon: "success",
              });
              setMyListings((oldListings) =>
                oldListings.filter((listing) => listing._id !== id)
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting listing:", error);
            Swal.fire({
              title: "Error!",
              text: `Failed to delete listing: ${error.message}`,
              icon: "error",
            });
          });
      }
    });
  };

  if (error) {
    return (
      <div className="text-center py-20 text-xl text-red-500">{error}</div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-323px)]">
      <h1 className="text-4xl font-bold text-[#3D365C] text-center mb-10 mt-10">
        My Roommate Listings
      </h1>

      {myListings.length === 0 ? (
        <div className="text-center text-xl text-gray-500 mt-10">
          You haven't posted any listings yet.
          <Link
            to="/addToFindRoommates"
            className="text-[#7C4585] hover:underline"
          >
            Add a new listing!
          </Link>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto shadow-lg rounded-lg hidden md:block">
            {" "}
            {/* Hide on small screens */}
            <table className="table w-full bg-white">
              <thead className="bg-[#7C4585] text-white">
                <tr>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Rent Amount</th>
                  <th>Lifestyle</th>
                  <th className="w-24">Update</th>
                  <th className="w-24">Delete</th>
                </tr>
              </thead>
              <tbody>
                {myListings.map((listing) => (
                  <tr key={listing._id} className="hover:bg-gray-50">
                    <td className="font-semibold text-[#3D365C]">
                      {listing.title}
                    </td>
                    <td>{listing.location}</td>
                    <td>${listing.rentAmount}/month</td>
                    <td>{listing.lifeStyle}</td>
                    <td>
                      <Link
                        to={`/updateListing/${listing._id}`}
                        className="btn btn-sm bg-[#F8B55F] text-[#3D365C] hover:bg-[#E8A54F] border-0 w-full"
                      >
                        Update
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(listing._id)}
                        className="btn btn-sm bg-red-500 text-white hover:bg-red-600 border-0 w-full"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="grid grid-cols-1 gap-4 md:hidden px-3">
            {" "}
            {myListings.map((listing) => (
              <div
                key={listing._id}
                className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-[#3D365C] mb-2">
                  {listing.title}
                </h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Location:</span>
                  {listing.location}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Rent:</span> $
                  {listing.rentAmount}/month
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Lifestyle:</span>
                  <span>{listing.lifeStyle}</span>
                </p>

                <div className="flex flex-col space-y-2">
                  <Link
                    to={`/updateListing/${listing._id}`}
                    className="w-full btn bg-[#F8B55F] text-[#3D365C] hover:bg-[#E8A54F] border-0"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(listing._id)}
                    className="w-full btn bg-red-500 text-white hover:bg-red-600 border-0"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyListings;

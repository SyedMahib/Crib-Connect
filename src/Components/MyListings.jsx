import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user, userLoading } = use(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const [error, setError] = useState(null);

  const myListingData = () => {
    fetch(`https://a-10-server-side-phi.vercel.app/listings?email=${user.email}`)
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
        fetch(`https://a-10-server-side-phi.vercel.app/listings/${id}`, {
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
      <h1 className="text-2xl md:text-4xl font-bold text-[#3D365C] text-center mb-10 mt-10">My Roommate Listings</h1>

      {myListings.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          You haven't posted any listings yet.{" "}
          <Link to="/addToFindRoommates" className="text-[#7C4585] hover:underline">
            Add a new listing!
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg mx-3 mb-10">
          <table className="table w-full bg-white min-w-max"> 
            {/* Table Head */}
            <thead className="bg-[#7C4585] text-white">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Location</th>
                <th className="p-4">Rent Amount</th>
                <th className="p-4">Lifestyle</th>
                <th className="p-4 w-24">Update</th>
                <th className="p-4 w-24">Delete</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {myListings.map((listing) => (
                <tr key={listing._id} className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="font-semibold text-[#3D365C] p-4">{listing.title}</td>
                  <td className="p-4 max-w-[200px] truncate">{listing.location}</td>
                  <td className="p-4  text-primary font-bold">৳ {listing.rentAmount}/month</td>
                  <td className="p-4">{listing.lifeStyle}</td>
                  <td className="p-4">
                    <Link to={`/updateListings/${listing._id}`} className="btn btn-sm bg-[#F8B55F] text-[#3D365C] hover:bg-[#E8A54F] border-0 w-full">
                      Update
                    </Link>
                  </td>
                  <td className="p-4">
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
      )}
    </div>
  );
};

export default MyListings;

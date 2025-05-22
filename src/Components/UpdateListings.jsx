import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateListings = () => {
  const {
    _id,
    title,
    location,
    roomType,
    rentAmount,
    lifeStyle,
    description,
    contactInfo,
    availability,
  } = useLoaderData();

  const { user } = use(AuthContext);

  const handleUpdateListing = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateListings = Object.fromEntries(formData.entries());
    console.log(updateListings);

    fetch(`https://a-10-server-side-phi.vercel.app/listings/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateListings),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update successful !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-[calc(100vh-323px)] mx-3">
      <div className="text-center mt-20 space-y-4">
        <h1 className="text-3xl md:text-5xl text-primary font-bold">
          Update Listing
        </h1>
      </div>
      <form
        onSubmit={handleUpdateListing}
        className="my-10 bg-primary p-5 md:p-10 rounded-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <fieldset className="fieldset rounded-box md:p-4">
            <label className="label text-white">Title</label>
            <input
              type="text"
              className="input w-full"
              name="title"
              defaultValue={title}
              placeholder="e.g., 'Looking for a roommate in NYC'"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box md:p-4">
            <label className="label text-white">Location</label>
            <input
              type="text"
              className="input w-full"
              name="location"
              defaultValue={location}
              placeholder="Enter your location"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box md:p-4">
            <label className="label text-white">Room Type</label>
            <select
              placeholder="Choose a room type"
              type="text"
              name="roomType"
              defaultValue={roomType}
              className="select w-full"
            >
              <option disabled={true}>Choose a room type</option>
              <option>Single</option>
              <option>Shared</option>
            </select>
          </fieldset>
          <fieldset className="fieldset rounded-box md:p-4">
            <label className="label text-white">Rent Amount</label>
            <input
              type="text"
              className="input w-full"
              name="rentAmount"
              defaultValue={rentAmount}
              placeholder="Enter the Rent Amount"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box md:p-4">
            <label className="label text-white">Lifestyle Preferences</label>
            <select
              placeholder="Choose a type of roommate you  want"
              type="text"
              name="lifeStyle"
              defaultValue={lifeStyle}
              className="select w-full"
            >
              <option disabled={true}>Choose the type of roommate</option>
              <option>Non-Smoker</option>
              <option>Smoker</option>
              <option>Pet-Friendly</option>
              <option>Quite</option>
              <option>Night-Owl</option>
              <option>Gamer</option>
            </select>
          </fieldset>
          <fieldset className="fieldset rounded-box md:p-4">
            <label className="label text-white">Description</label>
            <input
              type="text"
              className="input w-full"
              name="description"
              defaultValue={description}
              placeholder="Enter a brief description"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box md:p-4">
            <label className="label text-white">Contact Info</label>
            <input
              type="text"
              className="input w-full"
              name="contactInfo"
              defaultValue={contactInfo}
              placeholder="Enter you mobile number."
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box md:p-4">
            <label className="label text-white">Availability</label>
            <select
              placeholder="Choose availability"
              type="text"
              name="availability"
              defaultValue={availability}
              className="select w-full"
            >
              <option disabled={true}>Choose Availability</option>
              <option>Available</option>
              <option>Not Available</option>
            </select>
          </fieldset>
          <fieldset className="fieldset rounded-box md:p-4">
            <label className="label text-white">User Name</label>
            <input
              type="text"
              className="input w-full font-bold"
              name="name"
              defaultValue={user && user.displayName}
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset rounded-box md:p-4">
            <label className="label text-white">User Email</label>
            <input
              type="email"
              className="input w-full font-bold"
              name="email"
              defaultValue={user && user.email}
              readOnly
            />
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn border-0 w-full bg-[#F8B55F] text-primary font-bold mt-5"
          value="Update Listing"
        />
      </form>
    </div>
  );
};

export default UpdateListings;

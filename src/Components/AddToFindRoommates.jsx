import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToFindRoommates = () => {
  const { user } = use(AuthContext);

  const handleAddListing = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newListing = Object.fromEntries(formData.entries());
    console.log(newListing);

    // sending data to the db

    fetch("http://localhost:3000/listings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Listing added successfully !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-[calc(100vh-323px)]">
      <div className="text-center mt-20 space-y-4">
        <h1 className="text-5xl text-primary font-bold">
          Add To Find Roommate
        </h1>
        <p className="text-xl text-secondary font-medium">
          Finding roommates is now easier than ever with CribConnect. Fill up
          this form and post your for your roommate
        </p>
      </div>
      <form
        onSubmit={handleAddListing}
        className="my-10 bg-primary p-10 rounded-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <fieldset className="fieldset rounded-box p-4">
            <label className="label text-white">Title</label>
            <input
              type="text"
              className="input w-full"
              name="title"
              placeholder="e.g., 'Looking for a roommate in NYC'"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box p-4">
            <label className="label text-white">Location</label>
            <input
              type="text"
              className="input w-full"
              name="location"
              placeholder="Enter your location"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box p-4">
            <label className="label text-white">Room Type</label>
            <select
              defaultValue="Choose a room type"
              type="text"
              name="roomType"
              className="select w-full"
            >
              <option disabled={true}>Choose a room type</option>
              <option>Single</option>
              <option>Shared</option>
            </select>
          </fieldset>
          <fieldset className="fieldset rounded-box p-4">
            <label className="label text-white">Rent Amount</label>
            <input
              type="text"
              className="input w-full"
              name="rentAmount"
              placeholder="Enter the Rent Amount"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box p-4">
            <label className="label text-white">Lifestyle Preferences</label>
            <select
              defaultValue="Choose a room type"
              type="text"
              name="lifeStyle"
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
          <fieldset className="fieldset rounded-box p-4">
            <label className="label text-white">Description</label>
            <input
              type="text"
              className="input w-full"
              name="description"
              placeholder="Enter a brief description"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box p-4">
            <label className="label text-white">Contact Info</label>
            <input
              type="text"
              className="input w-full"
              name="contactInfo"
              placeholder="Enter you mobile number."
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box p-4">
            <label className="label text-white">Availability</label>
            <select
              defaultValue="Choose a room type"
              type="text"
              name="availability"
              className="select w-full"
            >
              <option disabled={true}>Choose Availability</option>
              <option>Available</option>
              <option>Not Available</option>
            </select>
          </fieldset>
          <fieldset className="fieldset rounded-box p-4">
            <label className="label text-white">User Name</label>
            <input
              type="text"
              className="input w-full font-bold"
              name="name"
              defaultValue={user && user.displayName}
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset rounded-box p-4">
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
          value="Add Listing"
        />
      </form>
    </div>
  );
};

export default AddToFindRoommates;

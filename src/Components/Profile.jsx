import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [university, setUniversity] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("User");
  const [isEdit, setIsEdit] = useState(false);

  const handleEditSave = () => {
    if (isEdit) {
      updateUser({ displayName: name, photoURL })
        .then(() => {
          const updatedUser = {
            ...user,
            displayName: name,
            photoURL,
            university,
            location,
            role,
          };

          localStorage.setItem(`user_${user.uid}`, JSON.stringify(updatedUser));
          setUser(updatedUser);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Profile updated!",
            showConfirmButton: false,
            timer: 1500,
          });

          setIsEdit(false);
        })
        .catch((error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${error.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      setIsEdit(true);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem(`user_${user.uid}`);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
     <div className="py-10 p-3">
      <div className="max-w-md mx-auto mt-10 p-6 rounded shadow bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">My Profile</h2>
        <div className="flex flex-col items-center mb-6">
          <img
            src={photoURL || "No image available"}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-2 ring"
          />
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-lg text-gray-500">{user?.email}</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block font-semibold">Display Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              disabled={!isEdit}
            />
          </div>

          <div>
            <label className="block font-semibold">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
              disabled={!isEdit}
            />
          </div>

          <div>
            <label className="block font-semibold">University</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="e.g. University of Dhaka"
              disabled={!isEdit}
            />
          </div>

          <div>
            <label className="block font-semibold">Location</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Dhaka, Bangladesh"
              disabled={!isEdit}
            />
          </div>

          <div>
            <label className="block font-semibold">Role</label>
            <select
              className="input input-bordered w-full"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={!isEdit}
            >
              <option>User</option>
              <option>Landlord</option>
              <option>Admin</option>
            </select>
          </div>

          <button
            type="button"
            className="btn bg-primary text-white w-full mt-4"
            onClick={handleEditSave}
          >
            {isEdit ? "Save Changes" : "Edit Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
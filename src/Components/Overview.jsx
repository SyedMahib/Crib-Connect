import { use, useEffect, useState } from "react";
import { FaClipboardList, FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

export default function Overview() {
  const { user, userLoading } = use(AuthContext);
  const [totalListings, setTotalListings] = useState(0);
  const [myListings, setMyListings] = useState(0);
  const [error, setError] = useState(null);

  const getAllListings = () => {
    fetch("https://a-10-server-side-phi.vercel.app/listings")
      .then((res) => res.json())
      .then((data) => {
        setTotalListings(data.length);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const getMyListings = () => {
    fetch(
      `https://a-10-server-side-phi.vercel.app/listings?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyListings(data.length);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    if (user?.email) {
      getAllListings();
      getMyListings();
    }
  }, [user?.email, userLoading]);

  if (error) {
    return (
      <div className="text-center py-20 text-xl text-red-500">{error}</div>
    );
  }

  return (
    <div className="space-y-8 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Welcome! {user?.displayName}
      </h2>
      <h3 className="text-lg font-medium text-secondary mb-4">Quick Stats</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 text-3xl">
            <FaClipboardList />
          </div>
          <div>
            <p className="text-primary font-medium text-sm">Total Listings</p>
            <p className="text-2xl font-bold text-secondary">{totalListings}</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100 text-green-500 text-3xl">
            <FaClipboardList />
          </div>
          <div>
            <p className="text-primary font-medium text-sm">My Listings</p>
            <p className="text-2xl font-bold text-secondary">{myListings}</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100 text-purple-500 text-3xl">
            <FaUserAlt />
          </div>
          <div>
            <p className="text-sm text-primary">Logged in as</p>
            <p className="text-md font-medium text-secondary">
              {user?.displayName || user?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

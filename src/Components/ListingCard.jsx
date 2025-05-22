import React from "react";

const ListingCard = ({ listing }) => {
  const { name, title, lifeStyle, location, roomType, rentAmount } = listing;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col">
      <div className="p-6 flex-grow">
        {/* Title */}
        <h3 className="text-2xl font-bold text-[#3D365C] mb-2 leading-tight">
          {title}
        </h3>

        {/* Posted By */}
        <p className="text-gray-600 text-sm mb-4">
          Posted by: <span className="font-semibold text-[#7C4585]">{name || 'N/A'}</span>
        </p>

       {/* preferences */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Rent Amount */}
          <div>
            <p className="text-gray-500 text-sm">Rent Amount</p>
            <p className="text-lg font-bold text-[#3D365C]">৳{rentAmount || 'N/A'}<span className="text-sm font-normal text-gray-500">/month</span></p>
          </div>

          {/* Lifestyle Preferences */}
          <div>
            <p className="text-gray-500 text-sm">Lifestyle</p>
            <p className="text-lg font-bold text-[#3D365C] capitalize">{lifeStyle || 'N/A'}</p>
          </div>

          {/* Location */}
          <div>
            <p className="text-gray-500 text-sm">Location</p>
            <p className="text-lg font-bold text-[#3D365C]">{location || 'N/A'}</p>
          </div>

          {/* Room Type */}
          <div>
            <p className="text-gray-500 text-sm">Room Type</p>
            <p className="text-lg font-bold text-[#3D365C] capitalize">{roomType || 'N/A'}</p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          className=" btn w-full bg-[#F8B55F] hover:bg-[#E8A54F] text-primary font-bold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default ListingCard;

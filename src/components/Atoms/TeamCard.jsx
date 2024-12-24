import React from "react";

const TeamCard = ({ image, name, position }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-md bg-white rounded-xl overflow-hidden shadow-lg
    "
    >
      {/* // w-[70%] // sm:w-[40%] // md:w-[29%] md:mx-2 // lg:w-[23%] lg:mx-0 */}
      <div className="w-full h-64 relative">
        <img
          className="w-full h-full object-cover object-center"
          src={image}
          alt={`Photo of ${name}`}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;

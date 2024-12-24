import React from "react";

const LatestCard = ({ src, alt, content, title }) => {
  return (
    <div
      data-aos-duration="1000"
      data-aos="zoom-in-up"
      className="w-full sm:w-[48%]
    md:w-[31%]  mt-8"
    >
      <img src={src} alt="loading..." className="rounded-lg object-fill mb-4" />
      <span className="text-xl font-medium block mt-0 md:mt-3 mb-2">
        {title}
      </span>
      <span className="md:text-base font-normal">{content}</span>
    </div>
  );
};

export default LatestCard;

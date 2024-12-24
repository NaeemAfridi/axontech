import React from "react";
import Arrow from "../../assets/Frame.svg";
import { useNavigate } from "react-router-dom";

const CardBlogs = ({ img, content, title }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/events");
  };

  return (
    <div
      data-aos-duration="1000"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="border w-full bg-white min-h-[300px] p-4 pt-4 mt-4 rounded-xl shadow-md
                sm:w-[48%]
                md:w-[31%] "
    >
      <img src={img} className="rounded-xl object-cover " />
      <div className="px-1 pt-3">
        <span className="block my-3 text-base font-semibold">{title}</span>
        <span className="text-sm">{content}</span>
        <button
          className="block w-fit my-5 text-xs text-start"
          onClick={handleNavigate}
        >
          <span className="text-xs font-bold">SEE MORE</span>
          <img src={Arrow} className="w-3 mt-[-3px] inline-block font-normal" />
        </button>
      </div>
    </div>
  );
};

export default CardBlogs;

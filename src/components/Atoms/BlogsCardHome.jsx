import React from "react";
import Arrow from "../../assets/Frame.svg";
import { useNavigate } from "react-router-dom";

const BlogsCard = ({ src, title, content, svg }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
  };
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="w-full bg-white min-h-[300px] pt-4 mt-4 rounded-xl shadow-md
                sm:w-[48%]
                md:w-[31%] "
    >
      <div className="px-4">
        <img src={svg} className="w-6 h-8" />
        <span className="block my-3 text-base font-semibold">{title}</span>
        <span>{content}</span>
        <button
          className="block w-fit my-5 text-xs text-start"
          onClick={handleClick}
        >
          <span className="text-xs font-bold">SEE MORE</span>
          <img src={Arrow} className="w-3 mt-[-3px] inline-block font-normal" />
        </button>
      </div>
      <img src={src} />
    </div>
  );
};

export default BlogsCard;

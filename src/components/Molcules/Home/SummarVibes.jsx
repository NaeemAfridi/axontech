import React from "react";
import img from "../../../assets/Summer-Vibes.png";

const SummarVibes = () => {
  return (
    <div
      data-aos-duration="1000"
      data-aos="fade-in"
      className="bg-transparent w-full  mx-auto flex flex-col md:flex-row justify-between my-2 md:my-5"
    >
      <div className="w-full md:w-7/12 md:py-5 lg:py-10 text-center md:text-start">
        <p className="w-full md:w-8/12 text-black text-5xl font-medium leading-tight my-4">
          Taking your Idea to Scale
        </p>
        <p className=" w-full md:w-11/12 text-black text-base font-normal leading-6 my-4">
          Leverage a Software Development Company’s technological capability to
          transform your ideas into reality with the right engineering talent.
        </p>
        <button className="bg-custom-gradient inline-flex items-center border-0 py-1 px-5 rounded-lg focus:outline-none text-gray-200 text-base mt-4 lg:mt-8 shadow-2xl">
          Let’s Talk
        </button>
      </div>
      <div className="w-full md:w-5/12 h-auto my-9 md:my-0">
        <img
          src={img}
          alt="lodaing..."
          className="w-full h-[348px] md:h-full object-contain bg-fixed"
        />
      </div>
    </div>
  );
};

export default SummarVibes;

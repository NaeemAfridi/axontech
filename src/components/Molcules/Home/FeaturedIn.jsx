import React from "react";
import reactIcon from "../../../assets/react.svg";
import flutterIcon from "../../../assets/flutter-logo.svg";
import laravalIcon from "../../../assets/laraval.svg";
import xdIcon from "../../../assets/xd-icon.svg";
import figmaIcon from "../../../assets/figma.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const FeaturedIn = () => {
  const icon = [
    { icon: flutterIcon, name: "Flutter" },
    { icon: reactIcon, name: "React" },
    { icon: laravalIcon, name: "Laraval" },
    { icon: figmaIcon, name: "Figma" },
    { icon: xdIcon, name: "Adobe XD" },
  ];
  return (
    <div className="bg-transparent w-full mx-auto flex flex-col mt-16 gap-6">
      <div className="bg-transparent w-full mx-auto flex flex-row">
        <span className="border-r-2 text-[#293241] border-[#2221218c] pr-5 mr-5 text-lg font-semibold leading-7">
          Featured In
        </span>

        <a href="#">
          <span className="hover:text-[#00a7e180] text-[rgba(0,167,225,0.9)] text-lg font-semibold leading-7">
            Trusted by tech leaders
          </span>
        </a>
      </div>
      <div className="bg-transparent w-full flex justify-center md:justify-start flex-wrap gap-5">
        {icon.map((item, index) => (
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            key={index}
            className="w-60 sm:w-36 h-24 sm:h-14 rounded-md flex items-center 
            justify-center gap-5 sm:gap-3 sm:px-3 bg-white shadow-2xl
            hover:bg-[#50a2c757]
             hover:text-white hover:scale-x-[1.1] hover:scale-y-[1.2]
              hover:duration-300 hover:ease-in-out 
            "
          >
            <img
              src={item.icon}
              alt="loading .."
              className="w-14 object-cover sm:w-6"
            />

            <span className="text-base font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedIn;

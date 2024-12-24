import React from "react";
import { RectangleSvg, ServiceCard } from "../../Atoms";

import amico from "../../../assets/amico.svg";
import bro from "../../../assets/bro.svg";
import pana from "../../../assets/pana.svg";
import rafiki from "../../../assets/rafiki.svg";
import rafiki1 from "../../../assets/rafiki1.svg";
import table from "../../../assets/table.svg";
import circles from "../../../assets/circles.svg";

const Services = () => {
  const details = [
    { icon: pana, title: "Web Development " },
    { icon: bro, title: " Application Development" },
    { icon: table, title: " UI/UX Design" },
    { icon: rafiki1, title: "Software Development" },
    { icon: amico, title: "Wordpress & Plugin Development" },
    { icon: rafiki, title: "Ecommerce Development" },
  ];

  return (
    <div className="bg-transparent w-full mx-auto my-14 grid grid-cols-2 sm:grid-cols-4 gap-y-5 ps-2">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full text-center  sm:text-start col-span-2 sm:col-span-4 md:col-span-2 col-start-1 md:col-start-3 row-start-1 pr-4 md:px-5  sm:-mt-5 relative"
      >
        <div className="w-full sm:w-10/12  my-3">
          <span className="text-[#293241] text-2xl font-semibold my-3">
            Our Services Marketing Expertise
          </span>
        </div>
        <p className="text-[#293241]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </p>
      </div>
      <div className="absolute top-[500px] right-[10px] ">
        <img src={circles} className="w-80" />
      </div>
      <RectangleSvg
        fill="#202249"
        className="w-20 -z-10 absolute 
        hidden bottom-[-900px]
        sm:block sm:right-30 sm:bottom-[-210px]"
      />
      <RectangleSvg
        fill="#3E7FFF"
        className="w-3 transform rotate-[58deg] absolute
         right-10 bottom-[-7px]
         sm:right-20"
      />
      <RectangleSvg
        fill="#3E7FFF"
        className=" w-3 absolute -z-50 right-[609px] bottom-[-205px] transform rotate-[163deg]"
      />
      <RectangleSvg
        fill="#FF6701"
        className="w-3 absolute -z-50 transform rotate-[103deg]
        right-[409px] bottom-[-405px] lg:bottom-[-380px] "
      />
      <RectangleSvg
        fill="#6E2C00"
        className="w-3 absolute -z-50 right-[50px] bottom-[-835px] md:right-[89px] lg:left-[489px] md:bottom-[-435px] transform rotate-[103deg]"
      />
      <RectangleSvg
        fill="#024547"
        className="w-7 -z-50 absolute 
        left-[18px] bottom-[-1520px] 
        sm:bottom-[-455px] sm:left-[8px] transform rotate-[55deg]"
      />

      {details.map((item) => (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="col-span-2 sm:col-span-1"
        >
          <ServiceCard src={item.icon} title={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Services;

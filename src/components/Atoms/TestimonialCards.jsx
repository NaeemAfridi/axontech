import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

const TestimonialCards = ({ src, flag, title, about, content }) => {
  return (
    <div
      data-aos-duration="1000"
      data-aos="flip-right"
      data-aos-anchor-placement="top-bottom"
      className="flex flex-wrap ps-5 p-3
                w-full border h-full
                items-center border-gray-200
                rounded-lg bg-white "
    >
      <SwiperSlide>
        <div className=" flex flex-wrap -m-2 p-2 items-center border-gray-200  rounded-lg">
          <div className="w-full flex">
            <img
              alt="team"
              className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 md:mr-2"
              src={src}
            />
            <div className="flex-grow text-start">
              <h2 className="text-gray-900 title-font font-medium text-base inline">
                {title}
              </h2>
              <img src={flag} className="inline mx-2 mb-1" />
              <p className="text-gray-500 text-sm">{about}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 text-sm text-start">
          <p>{content}</p>
        </div>
      </SwiperSlide>
    </div>
  );
};

export default TestimonialCards;

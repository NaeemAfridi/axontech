import React, { useEffect } from "react";
import "./style.css";
import TestimonialCards from "../../Atoms/TestimonialCards";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/pagination";

import female from "../../../assets/testfemal.png";
import man1 from "../../../assets/testman2.png";
import man2 from "../../../assets/testMan1.png";
import ukflag from "../../../assets/ukflag.svg";
import plflag from "../../../assets/plflag.svg";
import auflag from "../../../assets/auflag.svg";

SwiperCore.use([Pagination]);

const Testimonial = () => {
  const images = [
    {
      flag: ukflag,
      img: man1,
      title: "Zoe Mantis",
      about: "Founder, Alpha Group",
      content:
        "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
    },
    {
      flag: auflag,
      img: man2,
      title: "Don Joe",
      about: "Founder, Beta Group",
      content:
        "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
    },
    {
      flag: plflag,
      img: female,
      title: "Natalie Colin",
      about: "Founder, Alpha Group",
      content:
        "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
    },
    {
      flag: plflag,
      img: female,
      title: "Natalie Colin",
      about: "Founder, Alpha Group",
      content:
        "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
    },
  ];

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className=" w-full mb-10 "
    >
      <div className=" w-full mt-14 flex flex-col ">
        <span className="text-xl font-semibold">Testimontials</span>
        <div
          className="flex flex-col flex-wrap gap-5 mt-5
                    sm:flex-row"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            initialSlide={0}
            centeredSlides={false}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            pagination={{
              clickableClass: "swiper-pagination-clickable",
              el: ".swiper-pagination",
              type: "custom", // Use 'cus   tom' pagination
              renderCustom: function (swiper, current, total) {
                let linesHTML = "";
                console.log("curren", current);
                for (let i = 0; i < total; i++) {
                  const isActive = i + 1 === current ? " active" : "";
                  linesHTML += `<div class="swiper-pagination-line${isActive}"></div>`;
                }
                return linesHTML;
              },
            }}
            onSwiper={(swiper) => {
              swiper = swiper;
            }}
            className="w-full mySwiper md:flex pb-14 justify-start relative"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
          >
            {images.map((item) => (
              <SwiperSlide key={item.title}>
                <TestimonialCards
                  src={item.img}
                  title={item.title}
                  about={item.about}
                  content={item.content}
                  flag={item.flag}
                />
              </SwiperSlide>
            ))}
            <div class="swiper-scrollbar-drag" draggable={true}></div>

            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import React from "react";
import BlogsCard from "../../Atoms/BlogsCardHome";

import svg1 from "../../../assets/4star.svg";
import svg2 from "../../../assets/star.svg";
import svg3 from "../../../assets/andro.svg";
import potential from "../../../assets/potential.png";
import screen from "../../../assets/screen.png";
import hireing from "../../../assets/hireing.png";

const Blogs = () => {
  const images = [
    {
      svg: svg2,
      img: hireing,
      title: "Start Hiring",
      content:
        "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
    },
    {
      svg: svg3,
      img: potential,
      title: "5 Effective Ways Of Hiring",
      content:
        "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
    },
    {
      svg: svg1,
      img: screen,
      title: "Development Outsourcing",
      content:
        "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
    },
  ];
  return (
    <div className="w-full mt-14 flex flex-col ">
      <span className="text-xl font-semibold">Blogs</span>
      <div
        className="flex flex-col flex-wrap gap-5 mt-3
                    sm:flex-row"
      >
        {images.map((item) => (
          <BlogsCard
            key={item.svg}
            src={item.img}
            title={item.title}
            content={item.content}
            svg={item.svg}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

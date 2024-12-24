import React from "react";
import { BlogsCard, CardBlogs } from "../components/Atoms";
import { details } from "../assets/data/blogs.js";


const Blogs = () => {

  return (
    <div className="pb-5 mx-8 my-10 lg:px-16">
      <div
        className="mx-auto text-center flex flex-col items-center 
            w-full md:w-8/12 
            lg:w-full lg:px-16"
      >
        <span
          className="block font-medium my-3
              text-xl md:text-3xl "
        >
          Blogs
        </span>
      </div>
      <div
        className="flex flex-col justify-center flex-wrap gap-5 mt-3
                    sm:flex-row"
      >
        {details.map((item, index) => (
          <CardBlogs
            key={index}
            img={item.img}
            title={item.title}
            content={item.content}
            navigate="/events"
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

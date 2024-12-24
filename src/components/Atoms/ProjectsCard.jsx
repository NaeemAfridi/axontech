import React from "react";

const ProjectsCard = ({ title, image, aos }) => {
  console.log("aos", aos.aosDuration, aos.aosData);

  return (
    <div
      data-aos-duration={aos.aosDuration}
      data-aos={aos.aosData}
      className="max-w-md bg-white rounded-3xl overflow-hidden shadow-lg
    "
    >
      {/* // w-[70%] // sm:w-[40%] // md:w-[29%] md:mx-2 // lg:w-[23%] lg:mx-0 */}
      <div className="w-full h-64 relative">
        <img
          className=" w-full h-full "
          src={image}
          alt={`Photo of ${title}`}
        />
      </div>
      <div className="py-4 px-1">
        <div className="font-bold text-md mb-4 mt-2">{title}</div>
        {/* <p className="text-gray-700 text-base">{position}</p> */}
        <div className="flex gap-8">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.1197 23.2239L0.866211 14.4712L2.89183 12.8957L12.1072 20.0604L21.335 12.8832L23.3731 14.4712L12.1197 23.2239ZM12.1197 17.8848L2.90434 10.7201L0.866211 9.13209L12.1197 0.379395L23.3731 9.13209L21.3225 10.7201L12.1197 17.8848Z"
                fill="#151517"
              />
            </svg>
            <span className="text-xs">View Study Case</span>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 cursor-pointer"
              viewBox="0 0 26 18"
              fill="none"
            >
              <path
                d="M13.4531 17.5545C11.4023 17.5801 9.37269 17.1374 7.51874 16.2604C6.08166 15.5592 4.79122 14.5908 3.71632 13.407C2.57776 12.183 1.68128 10.7545 1.07426 9.19695L0.949219 8.80183L1.08051 8.40671C1.68796 6.85052 2.58252 5.42238 3.71757 4.19666C4.79208 3.01294 6.08209 2.04458 7.51874 1.34329C9.3727 0.466252 11.4023 0.0236437 13.4531 0.0491377C15.5038 0.0236877 17.5334 0.466293 19.3874 1.34329C20.8245 2.04442 22.115 3.01279 23.1898 4.19666C24.3305 5.41898 25.2273 6.84793 25.8319 8.40671L25.9569 8.80183L25.8256 9.19695C23.864 14.3033 18.9225 17.6412 13.4531 17.5545ZM13.4531 2.54991C9.19659 2.41653 5.28983 4.8945 3.59628 8.80183C5.28955 12.7094 9.1965 15.1875 13.4531 15.0538C17.7094 15.1868 21.616 12.7089 23.3098 8.80183C21.6185 4.8926 17.7103 2.41371 13.4531 2.54991ZM13.4531 12.553C11.6492 12.5649 10.0887 11.2993 9.72812 9.53177C9.36751 7.76424 10.3074 5.98849 11.9718 5.29283C13.6362 4.59716 15.5603 5.17588 16.5647 6.67431C17.5691 8.17273 17.3735 10.1723 16.0976 11.4476C15.3991 12.1544 14.4468 12.5524 13.4531 12.553Z"
                fill="#151517"
              />
            </svg>
            <sapn className="text-xs">Live Preview</sapn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

import React from "react";
import LatestCard from "../../Atoms/LatestCard";

import analytics from "../../../assets/analytics.png";
import lap from "../../../assets/laptop.png";
import mob from "../../../assets/mobile.png";

const LatestWK = () => {
  const images = [
    {
      img: analytics,
      title: "Software Development",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr",
    },
    {
      img: lap,
      title: "Mobile Application Development",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr",
    },
    {
      img: mob,
      title: "Data Analytics",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr",
    },
  ];
  return (
    <div
      className="w-full mt-14
                    flex flex-col"
    >
      <span className="text-xl font-semibold">Our latest work</span>
      <div
        className="flex flex-col flex-wrap gap-5 mt-2
                    sm:flex-row"
      >
        {images.map((item) => (
          <LatestCard
            key={item.title}
            src={item.img}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestWK;

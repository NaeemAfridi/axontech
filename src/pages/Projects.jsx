import React, { useEffect, useState } from "react";
import { Aims } from "../components/Molcules";
import { ProjectsCard } from "../components/Atoms";
import { details } from "../assets/data/projectsDetails";

const Projects = () => {
  const [category, setCategory] = useState("web");
  const [arrayList, setArrayList] = useState([]);
  const [aos, setAos] = useState({ aosDuration: "1000", aosData: "zoom-out" });

  const itemList = [
    { name: "Website Development", value: "web" },
    { name: "Mobile App Developement", value: "andrd" },
    { name: "UI/UX Design", value: "uiux" },
    { name: "Wordpress", value: "wbpress" },
  ];

  const handleBtn = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    const filteredData = details.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
    setArrayList(filteredData);
    setAos({ aosDuration: "1200", aosData: "zoom-out" });
  }, [category]);

  return (
    <div className="pb-5 mx-7 my-10 lg:px-16 flex flex-col gap-6">
      <Aims />
      <div
        className="my-5 w-full
        md:w-8/12
        lg:w-full"
      >
        <span
          className="block font-semibold
            text-xl md:text-2xl "
        >
          Our projects
        </span>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row items-center gap-6">
          {itemList.map((item, index) => (
            <li
              key={index}
              className={`hover:text-[rgba(0,169,225,0.68)] cursor-pointer ${
                category === item.value &&
                "text-[#00A7E1] decoration-2 underline underline-offset-[13px]"
              }`}
              onClick={() => handleBtn(item.value)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <hr className="w-full  h-1 bg-gray-400 mb-8 mt-8 md:mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
        {arrayList.map((item, index) => (
          <ProjectsCard
            key={index}
            title={item.title}
            image={item.img}
            aos={aos}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React, { useState } from "react";

const DropdownMenu = ({ list, title, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(true);
  };
  const mouseLeave = () => {
    setIsOpen(false);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const hanldeClick = (value) => {
    setSelectValue(value);
    setIsOpen(false);
  };

  return (
    <div className="w-full lg:mt-8 relative mb-8 ">
      <label className="block text-sm md:text-base">{`${title} :`}</label>
      <div className="flex rounded-md h-12 w-full">
        <input
          type="text"
          value={selectValue}
          onChange={(event) => setSelectValue(event.target.value)}
          placeholder={placeholder}
          className="w-11/12 h-full text-sm px-5 my-2 focus:outline-none shadow-2xl"
        />
        <div
          className="w-2/12 mt-2 bg-white h-full flex justify-center items-center"
          aria-expanded={isOpen}
          id="menu-button"
          aria-haspopup="true"
          onMouseEnter={toggleDropdown}
          onMouseLeave={mouseLeave}
        >
          <svg
            className={`bg-transparent -mr-1 h-8 w-7 text-gray-500 gap-x-1.5
             rounded-md 
             ${isOpen ? "rotate-180" : "rotate-0"}
  `}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
          {isOpen && (
            <div
              className="w-full absolute right-[0px] top-[70px] z-10 mt-2 
          origin-top-right rounded-md bg-gray-100 shadow-lg ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <ul className="py-1" role="none">
                {list.map((item) => (
                  <li
                    key={item.id}
                    className="text-gray-700 block px-4 py-2 text-sm md:text-base
                    hover:bg-gray-200 hover:text-[#29B5E6]"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={() => hanldeClick(item)} // Handle click and set value
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

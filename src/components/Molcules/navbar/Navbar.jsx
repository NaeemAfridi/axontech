import { useState } from "react";
import { Logo } from "../../Atoms/index.js";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";

import { itemList } from "./data.js";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(false);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="mx-auto lg:w-full rounded-xl  bg-[rgb(255,255,255)] z-[60] px-6 lg:px-0  text-gray-600 body-font sticky top-0">
      {/* <header className="w-full  z-[60] bg-[#fff] text-gray-600 body-font mx-5 lg:px-16 sticky top-0"> */}
      <div className="w-full lg:w-[85%] mx-auto flex  flex-row justify-between">
        <Link
          to="/"
          className="flex title-font font-medium items-center  mb-4 md:mb-0"
        >
          <Logo />
        </Link>
        {showMenu ? (
          <MdClose
            size={24}
            onClick={toggleMenu}
            className="z-50 lg:hidden mt-4  text-gray-900 focus:outline-none"
          />
        ) : (
          <MdMenu
            size={24}
            onClick={toggleMenu}
            className="lg:hidden mt-4  text-gray-900 focus:outline-none"
          />
        )}

        {/* For Large Screen  */}
        <nav
          className={`mr-0 md:ml-auto p-3 text-base 
          hidden lg:flex items-start lg:items-center justify-center"}`}
        >
          {Navlink(itemList)}
          <Link onClick={() => setShowMenu(false)} to="/contact">
            <button className="bg-custom-gradient inline-flex items-center border-0 py-1 px-3 rounded-lg focus:outline-none text-gray-200 text-base mt-4 md:mt-0">
              Contact
            </button>
          </Link>
        </nav>

        {/* For Mobile Screen  */}
        <div
          onClick={() => setShowMenu(false)}
          className={`${
            showMenu
              ? "z-50 w-full h-screen flex flex-col lg:hidden fixed right-0 top-[0px] rounded-lg bg-[rgba(0,0,0,0.4)] gap-3"
              : "hidden"
          }`}
        >
          <nav
            className={`mr-0 md:ml-auto p-3 text-base 
          ${
            showMenu
              ? "w-11/12 sm:w-4/12 flex flex-col lg:hidden border absolute right-0 top-[50px] rounded-lg bg-white gap-3"
              : "hidden"
          }`}
          >
            {Navlink(itemList, handleClick)}
            <Link onClick={() => setShowMenu(false)} to="/contact">
              <button className="bg-custom-gradient inline-flex items-center border-0 py-1 px-3 rounded-lg focus:outline-none text-gray-200 text-base mt-4 md:mt-0">
                Contact
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

const Navlink = (itemList, handleClick) => {
  const location = useLocation();

  return itemList.map((item, index) => (
    <Link
      key={index}
      to={item.to}
      onClick={handleClick}
      className={`w-auto mr-8 cursor-pointer hover:text-[rgba(0,169,225,0.68)] font-semibold font-sans text-[0.9rem]
      ${
        location.pathname === item.to &&
        "text-[#00A7E1] decoration-2 underline underline-offset-[8px]"
      }
    `}
    >
      {item.name}
    </Link>
  ));
};

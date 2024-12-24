import img from "../../../assets/ClueMan.png";
import { GoArrowUp } from "react-icons/go";
import { CustomerCard } from "../../Atoms";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <div
      className="min-h-[400px] w-full flex flex-col justify-between relative mt-20
                    lg:flex-row mx-auto px-4"
    >
      {/* 1st Section  */}
      <div className="w-full lg:w-[58%] min-h-[400px] flex items-end">
        <CustomerCard
          className="w-[222.639px] h-[100px] bg-white rounded-lg 
                    py-3 px-5 
                    absolute top-[20px] left-[-30px] 
                    md:left-[80px]
                    lg:top-[0px] lg:left-[410px]"
        />
        <div
          className="w-8/12 h-64 right-14 bg-[#FCF1E1] 
            absolute rounded-[17%] tranform clip
            sm:rotate-0 
            lg:w-[30%] lg:bottom-0 lg:left-32
            "
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img
            src={img}
            alt="loading.."
            className="h-[400px] object-contain absolute -scale-x-100 lg:scale-100 
            bottom-0 left-[75px]"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="z-40 w-[272.639px] h-[124px] p-4 text-black
                     bg-white rounded-xl 
                     absolute top-[250px] left-[-20px] md:left-28 lg:left-6 lg:bottom-10  "
        >
          <div className="flex items-center justify-between text-black">
            <span className="text-sm font-semibold text-black">Revenue</span>
            <div className="flex items-center">
              <GoArrowUp className="text-green-600" />
              <span className="text-sm font-semibold mr-2 text-green-600">
                83%
              </span>
            </div>
          </div>

          <ul className="list-none pl-1 mt-2">
            <li className="flex items-center text-pink-500 relative ">
              <span className="w-3 h-[13px] rounded-[50%] border-2 border-pink-500 mr-2"></span>
              <span className="mr-2">$20</span>
              <span className="text-sm ml-[85px] ">20 June 2023</span>
            </li>
            <li className="flex items-center text-purple-500 mt-2 relative ">
              <span className="w-3 h-[13px] rounded-full border-2 border-purple-500 mr-2"></span>
              <span className="mr-2">$30</span>
              <span className="text-sm ml-[85px]">20 June 2023</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 2nd Section  */}
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="w-full min-h-[200px]
                  flex flex-col items-center px-3 mt-7
                  lg:w-5/12 lg:justify-center lg:mt-4 lg:mr-4 lg:min-h-[400px]
                  "
      >
        <p className="text-[#293241 ] text-center flex gap-2 md:text-start text-2xl font-semibold my-3">
          Why should you choose
          <h1 className="text-[#01a7e1]">
            AXON<span className="text-green-500">TECH</span>
          </h1>
        </p>
        <span className="text-[#293241] text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </span>
        <Link to="/contact">
          <button
            className="w-32 bg-custom-gradient inline-flex items-center 
                          border-0 py-1 px-4 rounded-lg focus:outline-none 
                          text-gray-200 text-base mt-4 shadow-2xl"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhyChoose;

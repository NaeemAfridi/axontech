import React from "react";
import { CiMail } from "react-icons/ci";
import { Button } from "../components/Atoms";

const Contact = () => {
  return (
    <div className="pb-5 mx-8">
      <div
        className="my-10 mx-auto text-center flex flex-col items-center 
            w-full md:w-8/12 
            lg:w-full lg:px-16"
      >
        <span
          className="block font-semibold my-3
              text-xl md:text-2xl "
        >
          Tell us about your project
        </span>
        <span className="block text-neutral-800 ">
          Share details of your project and we will join hands to deliver
          impactful solutions together
        </span>
      </div>
      <div className="">
        <div className="flex justify-center">
          <div className="flex justify-center items-center max-w-7xl w-full px-4 md:p-4 ">
            <div className="flex flex-col items-center justify-between w-full md:flex-row ">
              {/* section 1 */}
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className=" md:-mt-16 flex flex-col items-center
                        md:items-start font-medium text-gray-700 ms-16 text-sm
                        space-y-3 
                        w-full md:w-4/12"
              >
                <div className="text-xl md:text-2xl font-semibold text-neutral-800 mb-2 md:mb-8 lg:pr-16">
                  Hello,there! we’ll be glad to here from you.
                </div>
                <div className="text-sm w-full">
                  <label className="font-bold block my-1">Phone:</label>
                  <span>642-084-3368</span>
                </div>
                <div className="text-sm w-full ">
                  <label className="font-bold block my-1">Address:</label>
                  <span>508 Bridle Avenue Newnan, GA 30263</span>
                </div>
              </div>

              {/* section 2 */}
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="text-gray-800 m-0 md:m-4 mt-8 md:mt-4 items-center md:items-center
                  flex flex-col
                   w-full md:w-8/12 space-y-3 "
              >
                <input
                  placeholder="Enter your Name"
                  className="border border-[#C9CCD4] rounded px-2 py-1 
                  bg-transparent focus:ring-0 focus:shadow-xl focus:outline-1 focus:outline-cyan-500
                  w-full md:w-96 placeholder:text-xs md:placeholder:text-base"
                />
                <input
                  placeholder="Enter a valid Email address"
                  className="border border-[#C9CCD4] rounded py-1 px-2 
                  bg-transparent focus:ring-0 focus:shadow-xl focus:outline-1 focus:outline-cyan-500
                  w-full md:w-96 placeholder:text-xs md:placeholder:text-base"
                />
                <textarea
                  placeholder="Enter your message"
                  type="text"
                  className="border border-[#C9CCD4] rounded py-1 px-2 
                  bg-transparent focus:ring-0 focus:shadow-xl focus:outline-1 focus:outline-cyan-500
                  w-full md:w-96 h-20 md:h-40 placeholder:text-xs md:placeholder:text-base"
                ></textarea>
                <div className="w-full md:w-96 h-20 flex justify-center md:justify-start">
                  <Button
                    title="Contact"
                    className="w-20 md:w-28 bg-custom-gradient font-medium
                   items-center border-0 py-1 md:py-2 px-3 md:px-6 rounded-lg focus:outline-none
                 text-gray-200 text-sm md:text-sm my-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

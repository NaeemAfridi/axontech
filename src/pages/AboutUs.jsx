import dentist1 from "../assets/dentist1.png";
import dentist2 from "../assets/dentalCheck-up1.png";
import dentist3 from "../assets/dentist3.png";
import { Button, TeamCard } from "../components/Atoms";

import blonde1 from "../assets/Blonde.png";
import blonde2 from "../assets/Blonde1.png";
import blueRef1 from "../assets/BlueRefl.png";
import blueRef2 from "../assets/BlueRefl1.png";
import young1 from "../assets/young-asian.png";
import CheckIcon from "../assets/icons/CheckIcon";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const details = [
    { img: blonde1, name: "umar", position: "project Manager" },
    { img: blonde2, name: "umar", position: "project Manager" },
    { img: blueRef1, name: "umar", position: "project Manager" },
    { img: blueRef2, name: "umar", position: "project Manager" },
  ];

  const list = [
    { content: "Top quality IT team" },
    { constent: "State of the art IT services" },
    { content: "Discount on all IT Services" },
  ];

  return (
    <div
      className="pb-5 mx-8 my-10 lg:px-16
    "
    >
      {/* section 1 */}
      <div
        className="h-auto flex flex-col justify-between gap-5
             md:flex-row md:gap-5 "
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col w-full justify-center
                md:w-5/12 "
        >
          <span className="text-xl font-[500] flex gap-2 leading-8 mb-5 text-center md:text-start">
            <h1 className="text-[#01a7e1] font-bold">
              AXON<span className="text-green-500">TECH</span>
            </h1>{" "}
            Pvt.Ltd.
          </span>
          <span className="text-center md:text-start text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-6/12 flex gap-5 ps-4
            sm:mx-auto sm:w-full sm:justify-center
            md:gap-6 md:w-7/12 md:justify-end sm:gap-10
            lg:w-7/12 lg:gap-7
            xl:justify-center xl:w-6/12 xl:mr-0 xl:gap-28"
        >
          <img
            src={dentist2}
            className="w-60 h-[180px] self-start rounded-[1rem]
                    sm:w-44 sm:h-[230px] sm:rounded-[2rem]
                    md:w-52 md:h-[250px] 
                    lg:h-[300px] lg:w-52
                    xl:h-[300px] xl:w-64
                    "
          />
          <img
            src={dentist1}
            className="w-60 h-[180px] self-end rounded-[1rem]
                    sm:w-44 sm:h-[230px] sm:rounded-[2rem]
                    md:w-52 md:h-[250px] md:mt-10
                    lg:h-[300px] lg:w-52
                    xl:h-[300px] xl:w-64
                    "
          />
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col md:flex-row justify-between mt-5 md:mt-0">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="py-10 w-full md:w-6/12 relative "
        >
          <div
            className="bg-[#DBEFFA] w-[190px] h-36 rounded-3xl ms-6
          sm:w-[90%] sm:h-48 sm:ms-0
          md:w-64 md:h-52 md:py-10
          lg:w-80 
          xl:w-96"
          ></div>
          <img
            src={dentist3}
            className="w-[215px] object-cover h-auto rounded-3xl absolute left-[50px] top-16 
            md:w-[80%] md:left-10 md:top-[75px] md:h-56
            lg:w-[70%]
            xl:w-[70%]"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className=" py-10 w-full flex flex-col text-center gap-3 
          md:gap-5 md:w-6/12 md: md:text-start md:py-10
          xl:ps-[75px]
        "
        >
          <p className="text-[#00A7E1] text-[13px] font-[500] mt-2">
            OUR PRIORITY
          </p>
          <h2 className="text-3xl font-[500] lg:max-w-[70%] leading-8  ">
            Our clients are our priority
          </h2>
          <p className="text-[#181945] text-base ">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <Link to="/contact">
            <Button
              title="Contact"
              className="w-20 md:w-28 bg-custom-gradient font-medium
                   items-center -0 py-1 md:py-2 px-3 md:px-6 rounded-lg focus:outline-none
                 text-gray-200 text-sm md:text-sm my-3"
            />
          </Link>
        </div>
      </div>

      {/* section 3 */}
      <div className=" flex flex-col mt-5 md:mt-0 xl:mt-7">
        <span className=" text-center text-2xl font-medium my-7 ">
          Meet Our Talented Team Members
        </span>
        <div className="flex flex-wrap justify-center sm:justify-start !imporatnt:justify-start gap-8 mx-auto px-10 pt-5">
          {details.map((items) => (
            <TeamCard
              image={items.img}
              name={items.name}
              position={items.position}
            />
          ))}
        </div>
      </div>

      {/* section 4 */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" flex flex-col justify-center sm:justify-between !imporatnt:justify-start gap-5 
        pt-10 sm:py-10 sm:pb-20
        "
      >
        <span className=" text-center mx-auto text-2xl font-medium mt-5 sm:my-7 ">
          Our Mission
        </span>
        <div className=" flex flex-wrap justify-center sm:justify-between !imporatnt:justify-start gap-5">
          <div className="flex flex-col md:flex-row justify-between mt-5 md:mt-0 ">
            {/* Section 4 part1 */}
            <div
              className=" w-full flex flex-col text-center sm:text-start gap-3 
              md:gap-5 md:w-6/12 md:text-start"
            >
              <p className="text-center md:text-start text-[#00A7E1] text-[13px] font-[500] mt-2">
                EXPERTS IN IT
              </p>
              <h2 className="text-center md:text-start text-3xl font-[500] lg:max-w-[70%] leading-8 my-2 ">
                Our Mission & Vision
              </h2>
              <p className="text-center md:text-start text-[#181945] text-base ">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts.
              </p>
              <ul className="mx-auto md:mx-0 text-base">
                {list.map((item) => {
                  return (
                    <div className="flex gap-3 text-[#181945] leading-8">
                      <CheckIcon className="w-[18px] flex" />
                      <li>Top quality IT team</li>
                    </div>
                  );
                })}
              </ul>
            </div>

            {/* Section 4 part2 */}
            <div className=" py-10 md:py-0 w-full md:w-6/12 ">
              <div
                className="bg-[#FADBE2] w-[210px] h-60 rounded-3xl mx-auto relative
                md:w-64 md:h-72 md:py-10 md:mr-0
                lg:w-[280px] lg:h-[330px]
                xl:w-72"
              >
                <img
                  src={young1}
                  className="w-[215px] h-auto rounded-3xl 
                absolute left-[0px] top-8 
                sm:left-[0px]
                md:w-[100%] md:-left-10 md:top-[35px] md:h-56
                lg:w-[300px] lg:left-[-60px] lg:top-[55px]
                "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

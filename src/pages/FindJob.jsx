import img from "../assets/job.png";
import { Button, DropdownMenu, FileUpload } from "../components/Atoms";
import CheckIcon from "../assets/icons/CheckIcon";
import { Form } from "../components/Molcules";

const FindJob = () => {
  const dropDownlist = [
    {
      title: "Experience",
      placeholder: "Enter Experiance",
      list: ["0-6 Months", "6-12 Months", "1-3 Years", "3-6 Years"],
    },
    {
      title: "Post Apply For",
      placeholder: "Post Apply For",
      list: [
        "MERN STACK Developement",
        "MEAN STACK Developement",
        "FLUTTER Developement",
        "WORDPRESS Developement",
        "UI/UX Design",
      ],
    },
    {
      title: "Qualifcation",
      placeholder: "Enter Your Qualification",
      list: ["DR", "MS", "BS", "F.SC", "OTHER"],
    },
  ];

  return (
    <div className="pb-5 mx-8">
      <div
        className="my-10 mx-auto text-center flex flex-col items-center 
          w-full md:w-8/12 
          lg:w-full lg:px-16"
      >
        <img
          data-aos-duration="1000"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          src={img}
          className="object-cover w-5/12"
        />
      </div>
      <div
        className="my-10 mx-auto text-center flex flex-col items-center 
          w-full md:w-8/12 
          lg:w-full lg:px-16"
      >
        <span
          className=" font-semibold my-3
            text-lg md:text-2xl flex gap-2"
        >
          Find Your Dream Job at{" "}
          <h1 className="text-[#01a7e1] font-bold">
            AXON<span className="text-green-500">TECH</span>
          </h1>
        </span>
      </div>
      {/* Form section */}
      <div
        className="w-full"
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <Form id="1" />
        <div
          className="mt-8 grid grid-cols-1 
            sm:grid-cols-2 gap-8
            md:grid-cols-3"
        >
          {dropDownlist.map((item) => (
            <DropdownMenu
              key={item.title}
              title={item.title}
              placeholder={item.placeholder}
              list={item.list}
            />
          ))}
        </div>
      </div>
      <FileUpload />
      <div className="mt-12">
        <label htmlFor="comment" className="block text-sm md:text-base my-2">
          Qualifcation :
        </label>
        <textarea
          id="comment"
          name="comment"
          placeholder="Write Something About yourself"
          rows="12"
          cols="33"
          className="p-3 w-full resize-none text-sm md:text-base rounded-md px-5 my-2 focus:outline-none focus:ring-1 focus:ring-indigo-400 shadow-2xl"
        />
        <ul className="my-3 text-sm md:text-base">
          <div className=" flex items-start gap-3 text-[#181945] leading-8 ">
            <CheckIcon className="w-[23px] md:w-[18px] flex mt-[6px] sm:mt-[5px]" />
            <li className="flex gap-2">
              I Accept terms and conditions of{" "}
              <h1 className="text-[#01a7e1] font-bold">
                AXON<span className="text-green-500">TECH</span>
              </h1>
            </li>
          </div>
          <div className=" flex items-start gap-3 text-[#181945] leading-8">
            <CheckIcon className="w-[23px] md:w-[18px] flex mt-[6px] sm:mt-[5px]" />
            <li>I Accept that above information's are correct</li>
          </div>
        </ul>
        <div className="w-full flex justify-center">
          <Button
            title="Submit"
            className="w-20 md:w-28 bg-custom-gradient font-medium
            items-center -0 py-1 md:py-2 px-3 md:px-6 rounded-lg focus:outline-none
          text-gray-200 text-sm md:text-base my-3"
          />
        </div>
      </div>
    </div>
  );
};

export default FindJob;

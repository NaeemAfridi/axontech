import img from "../assets/hiringoffer.png";
import { Button } from "../components/Atoms";

const HiringDetails = () => {
  return (
    <div className=" pb-5 mx-7 my-10 lg:px-16 flex flex-col gap-6">
      <div
        className=" mx-auto text-start flex flex-col items-start
          w-full"
      >
        <span
          className=" block font-bold text-center md:text-start
            text-xl md:text-2xl"
        >
          Hiring Offshore Developers – Mistakes And Key Steps to Avoid
        </span>
        <div className=" text-[9px] md:text-[12px] my-1 mx-auto md:mx-0">
          <span className="">Monday, January 07 2023</span>
          <span className=" mx-2 md:mx-5">|</span>
          <span className="">By Muhammad Suleman</span>
        </div>
        <span className=" my-3 text-sm md:text-base text-center sm:text-start">
          Lorem ipsum dolor sit amet consectetur. Nulla et bibendum lectus
          dictum sed lacus dignissim dolor. Feugiat nulla aliquet quisque quam
          arcu neque amet. Amet metus pellentesque eget scelerisque fringilla.
          Mattis ut sed eget dui suspendisse est gravida vitae quam. Proin sem
          nunc at sit ac sit lacus interdum. Velit in eu nunc nisi. Nunc
          adipiscing eget arcu egestas tellus gravida ac vitae. Et sit in
          habitant dolor in morbi. Cursus eu id egestas dis pulvinar vulputate
          pharetra enim. Nec faucibus imperdiet nisl penatibus at metus. Integer
          sit ac morbi cursus enim tristique. Morbi volutpat lacus suspendisse
          diam egestas sed tincidunt.
        </span>
      </div>
      <div>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={img}
          alt="loading..."
          className="object-cover"
        />
      </div>
      <div className=" mx-auto text-start flex flex-col items-start w-full ">
        <span
          className=" ww-full block font-bold text-center md:text-start
            text-lg md:text-lg"
        >
          10 Common Mistakes to Avoid While Hiring Offshore Developers
        </span>

        <span className=" my-3 text-sm md:text-base text-center sm:text-start">
          Lorem ipsum dolor sit amet consectetur. Nulla et bibendum lectus
          dictum sed lacus dignissim dolor. Feugiat nulla aliquet quisque quam
          arcu neque amet. Amet metus pellentesque eget scelerisque fringilla.
          Mattis ut sed eget dui suspendisse est gravida vitae quam. Proin sem
          nunc at sit ac sit lacus interdum. Velit in eu nunc nisi. Nunc
          adipiscing eget arcu egestas tellus gravida ac vitae. Et sit in
          habitant dolor in morbi. Cursus eu id egestas dis pulvinar vulputate
          pharetra enim. Nec faucibus imperdiet nisl penatibus at metus. Integer
          sit ac morbi cursus enim tristique. Morbi volutpat lacus suspendisse
          diam egestas sed tincidunt.
        </span>
      </div>
      <div
        className=" mx-auto text-start flex flex-col items-start
          w-full 
          "
      >
        <span
          className=" w-full block font-bold text-center md:text-start
            text-lg md:text-lg"
        >
          Focusing solely on cost:
        </span>
        <span className=" my-3 text-sm md:text-base text-center sm:text-start">
          Lorem ipsum dolor sit amet consectetur. Nulla et bibendum lectus
          dictum sed lacus dignissim dolor. Feugiat nulla aliquet quisque quam
          arcu neque amet. Amet metus pellentesque eget scelerisque fringilla
        </span>
      </div>
      <div
        className=" mx-auto text-start flex flex-col items-start
          w-full
          "
      >
        <span
          className=" w-full block font-bold text-center md:text-start
            text-lg md:text-lg"
        >
          Not Doing Thorough Research:
        </span>
        <span className=" my-3 text-sm md:text-base text-center sm:text-start">
          Lorem ipsum dolor sit amet consectetur. Nulla et bibendum lectus
          dictum sed lacus dignissim dolor. Feugiat nulla aliquet quisque quam
          arcu neque amet. Amet metus pellentesque eget scelerisque fringilla
        </span>
      </div>
      <hr
        width="70%"
        className="mx-auto h-[3px]  bg-[rgba(0,0,0,0.50)] my-10"
      />
      <div className=" flex flex-col md:flex-row">
        <div className="w-full md:w-6/12">
          <div className="mb-8">
            <label className="block text-sm">Name :</label>
            <input
              type="text"
              className="w-full md:w-7/12 h-12 text-sm  rounded-md px-5 my-2 focus:outline focus:outline-indigo-400 shadow-2xl "
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm">Email :</label>
            <input
              type="text"
              className="w-full md:w-7/12 h-12 text-sm  rounded-md px-5 my-2 focus:outline-none focus:ring-1 focus:ring-indigo-400 shadow-2xl"
            />
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <div>
            <label className="block text-sm">Write your coment :</label>
            <textarea
              className="w-full my-2 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-400 shadow-2xl"
              rows="8"
              placeholder="Enter your text here..."
            ></textarea>
            <Button
              title="Submit"
              className="w-20 md:w-24 bg-custom-gradient font-medium
                   items-center border-0 py-1 md:py-2 px-3 md:px-6 rounded-lg focus:outline-none
                 text-gray-200 text-sm md:text-base my-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringDetails;

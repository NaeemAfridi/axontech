import { Button, Logo } from "../Atoms";
import { Youtube, Facebook, LinkedIn, Instagram } from "../../assets/icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="w-full px-3  bg-[#e3fcef] flex justify-center 
                      text-center dark:bg-neutral-600 lg:text-left
                      lg:px-16"
    >
      <div className="w-full p-6">
        <div
          className="w-full grid 
              md:grid-cols-2 justify-items-center
              lg:grid-cols-5"
        >
          {/* <!--logo section--> */}
          <div
            className=" mb-6 col-span-2 
                  md:col-span-1 pe-6
                  lg:col-span-2 
                  flex flex-col items-center md:items-start"
          >
            <Logo />
            <p className="mb-4 mt-2 ms-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              gravida posuere molestie ultrices{" "}
            </p>
            <div className="flex ms-2 gap-2">
              <Facebook />
              <LinkedIn />
              <Youtube />
              <Instagram />
            </div>
          </div>

          <div className="w-full col-span-2 md:col-span-1 lg:col-span-2 xl:px-20 flex justify-center">
            {/* <!--First links section--> */}
            <div className="mb-6 text-sm mx-6 text-start">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                Company
              </h5>

              <ul className="mb-0 list-none">
                <li className="my-2 cursor-pointer">
                  <Link to="/" className="text-gray-500 dark:text-neutral-200">
                    Home
                  </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link
                    to="/projects"
                    className="text-gray-500 dark:text-neutral-200"
                  >
                    Prjects
                  </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link
                    to="/aboutus"
                    className="text-gray-500 dark:text-neutral-200"
                  >
                    About Us
                  </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link
                    to="/blogs"
                    className="text-gray-500 dark:text-neutral-200"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link
                    to="/testimonials"
                    className="text-gray-500 dark:text-neutral-200"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* <!--Second links section--> */}
            <div className="mb-6 text-sm text-gray-500 mx-6 text-start">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                Suppport
              </h5>

              <ul className="mb-0 list-none ">
                <li className="my-2 cursor-pointer">
                  <Link to="" className="text-gray-500 dark:text-neutral-200">
                    Support Carrer
                  </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link to="" className="text-gray-500 dark:text-neutral-200">
                    24h Service
                  </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link to="" className="text-gray-500 dark:text-neutral-200">
                    Quick Chat
                  </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link to="" className="text-gray-500 dark:text-neutral-200">
                    Setting & Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <!--last  section--> */}
          <div
            className=" w-full px-4 mb-6 text-sm text-gray-500 
                flex flex-col col-span-2
                md:col-span-2 md:mt-5
                lg:col-span-1 lg:justify-start lg:mt-0 "
          >
            <h2 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
              Contact Us
            </h2>
            <div
              className="flex flex-col flex-wrap justify-center items-center 
            md:flex-nowrap md:justify-start
            xl:flex-nowrap 
            lg:flex-wrap lg:items-start 
            "
            >
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Enter Your Number"
                  className="w-full bg-gray-100 bg-opacity-50 rounded 
                  border border-[#00A7E1] focus:bg-transparent 
                  focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base 
                  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
                  duration-200 ease-in-out
                  placeholder:text-xs md:placeholder:text-xs lg:placeholder:text-sm"
                />
              </div>
              <Button
                className="w-36 md:w-36 bg-custom-gradient font-medium inline-flex 
                          items-center border-0 py-2 px-3 md:px-3 rounded-lg focus:outline-none
                        text-gray-200 text-xs md:text-xs  my-3"
                title="Request a call back"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

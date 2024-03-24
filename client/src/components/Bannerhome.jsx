/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import banner from "../images/indian-museum1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Bannerhome = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="relative" data-aos="fade-up">
        <div
          className=" bg-cover bg-no-repeat bg-center h-[550px] flex flex-col justify-center items-center z-10 "
          style={{
            backgroundImage: `url(${banner})`,
            //   filter: `brightness(70%)`,
          }}
        >
          <div
            className="break-inside-avoid-column 
          md:bottom-[7rem] bottom-[11rem] text-center md:left-[276px]   left-[24px]
        "
          >
            <p className="md:text-7xl text-5xl font-bold  text-white mx-auto z-100 max-[530px]:text-3xl">
              Escape to Paradise with <br className="" />
              Ticketless
            </p>

            <div className="my-4 md:w-96 mx-auto">
              {/* <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[2.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
            </div> */}
              <div className="max-w-md mx-auto">
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                  />
                </div>
              </div>
            </div>
            <button className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 px-2 rounded text-2xl">
              Find Your Favourite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannerhome;

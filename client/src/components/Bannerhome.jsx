/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../images/indian-museum.jpg";
const Bannerhome = () => {
  return (
    <>
      <div className="relative">
        <div
          className=" bg-cover bg-no-repeat bg-center h-[550px] flex flex-col justify-center items-center z-10 brightness-50"
          style={{
            backgroundImage: `url(${banner})`,
            //   filter: `brightness(70%)`,
          }}
        ></div>
        <div
          className="break-inside-avoid-column absolute
          md:bottom-[7rem] bottom-[11rem] text-center md:left-[276px] left-[24px]
        "
        >
          <p className="md:text-7xl text-3xl font-bold  text-white mx-auto z-100 ">
            Escape to Paradise with <br className="" />
            Ticketless
          </p>

          <div className="my-4 md:w-96 mx-auto">
            <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[2.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
            </div>
          </div>
          <button className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 px-2 rounded text-2xl">
            Find Your Favourite
          </button>
        </div>
      </div>
    </>
  );
};

export default Bannerhome;

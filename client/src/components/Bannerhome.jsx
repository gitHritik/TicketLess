/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../images/indian-museum.jpg";
const Bannerhome = () => {
  return (
    <>
      <div
        className=" bg-cover bg-no-repeat bg-center h-[550px] flex flex-col justify-center items-center z-10 "
        style={{
          backgroundImage: `url(${banner})`,
          //   filter: `brightness(70%)`,
        }}
      >
        <p className="text-7xl font-bold  text-white text-center mx-auto max-sm:text-4xl max-md:text-6xl ] z-100 ">
          Escape to Paradise with <br className="" />
          Ticketless
        </p>
        <p className="text-3xl  font-bold text-white text-center mx-auto max-sm:text-1xl max-md:text-2xl z-100">
          Find your perfect getaway to tropical beaches and exotic landscapes
        </p>
        {/* <div className="my-4 md:w-96 mx-auto">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search" 
              aria-label="Search"
              aria-describedby="button-addon3"
            />


            <button
              className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-amber-700  focus:outline-none focus:ring-0 bg-amber-800"
              type="button"
              id="button-addon3"
            >
              Search
            </button>
          </div>
        </div> */}
        <button className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 px-7 rounded text-2xl mt-10  max-md:text-1xl max-md:py-2 max-md:px-4">
          DISCOVER MORE
        </button>
      </div>
    </>
  );
};

export default Bannerhome;

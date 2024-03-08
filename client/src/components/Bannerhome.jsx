/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../images/indian-museum.jpg";
const Bannerhome = () => {
  return (
    <>
      <div
        className=" bg-cover bg-no-repeat bg-center h-[550px] flex flex-col justify-center items-center "
        style={{
          backgroundImage: `url(${banner})`,
          filter: `brightness(50%)`,
        }}
      >
        <p className="text-7xl font-bold  !text-white text-center mx-auto max-sm:text-4xl max-md:text-6xl drop-shadow-[0_35px_35px_rgba(0,0,0,.7)] ">
          Escape to Paradise with <br className="" />
          Ticketless
        </p>
        <p className="text-3xl  font-bold text-white text-center mx-auto max-sm:text-1xl max-md:text-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,.7)]">
          Find your perfect getaway to tropical beaches and exotic landscapes
        </p>
        <button className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 px-7 rounded text-2xl mt-10  max-md:text-1xl max-md:py-2 max-md:px-4">
          CLICK HERE FOR BOOKING
        </button>
      </div>
    </>
  );
};

export default Bannerhome;

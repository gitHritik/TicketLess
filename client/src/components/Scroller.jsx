/* eslint-disable no-unused-vars */
import React from "react";
import { data } from "../pages/data.js";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Scroller = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1150;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1150;
  };
  return (
    <>
      <div className="mx-[5rem]">
        <div className="text-[44px] text-center text-[#88563b]  ">
          <h1 className="font-[900] mx-10 my-20">
            Discover the Unseen Corners of the World with Ticketless
          </h1>
        </div>
        <div className="relative flex items-center">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
          <div
            id="slider"
            className="w-full h-full align-middle m-18 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide no-scrollbar overflow-y-auto"
          >
            {data.map((item) => (
              <img
                className=" h-[550px] object-cover inline-block p-2 cursor-pointer ease-in-out duration-300"
                src={item.img}
                alt="/"
                key={item}
              />
            ))}
          </div>
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
    </>
  );
};
export default Scroller;

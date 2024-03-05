/* eslint-disable no-unused-vars */
<<<<<<< HEAD
import React from "react";
import { data } from "../pages/data.js";
=======
import React, { useState } from "react";
import { data } from "./data.js";
>>>>>>> 234c5105e9e0954a40d409ed5e84e0514f45caf2
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect } from "react";

const Scroller = () => {
  const [mobile, SetIsmobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth > "768") {
      SetIsmobile(false);
    }
  }, [mobile]);

  console.log(window.innerWidth);
  console.log(mobile);
  function slideLeft() {
    var slider = document.getElementById("slider");
    if (mobile) {
      slider.scrollLeft = slider.scrollLeft - 260;
    } else {
      slider.scrollLeft = slider.scrollLeft - 1115;
    }
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (mobile) {
      slider.scrollLeft = slider.scrollLeft + 260;
    } else {
      slider.scrollLeft = slider.scrollLeft + 1115;
    }
  };
  return (
    <>
<<<<<<< HEAD
      <div className="mx-[5rem]">
        <div className="text-[44px] text-center text-[#88563b]  ">
          <h1 className="font-[900] mx-10 my-20">
=======
      <div className="md:mx-[5rem] mx-[1rem] my-2">
        <div className="md:text-[64px] text-[16px] text-center text-[#88563b]  ">
          <h1 className="font-[900] md:mx-10 md:my-5">
>>>>>>> 234c5105e9e0954a40d409ed5e84e0514f45caf2
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
            className="w-full h-full align-middle overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide no-scrollbar overflow-y-auto"
          >
            {data.map((item) => (
              <img
                className="md:h-[550px] md:w-fit w-[220px] h-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
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

/* eslint-disable no-unused-vars */
import React from "react";
import { cardData } from "../pages/data.js";
const NewCard = () => {
  return (
<<<<<<< HEAD
    <div className="flex  items-center justify-center ">
=======
    <div className="flex min-h-screen items-center justify-center md:mx-[126px] md:my-[22px] ">
>>>>>>> d308915db19683520cb57d1dad60599d00a2d734
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((item) => (
          <div
            key={item}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="md:h-[30rem] md:w-[30rem] h-[20rem] w-[20rem]">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={item.img}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-white pb-5">
                {item.title}
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.description}
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCard;

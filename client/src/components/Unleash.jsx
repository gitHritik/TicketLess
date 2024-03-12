/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import banner from "../images/indian-museum.jpg";
import { unleashData } from "../pages/data";
const Unleash = () => {
  return (
    <>
      <div className=" w-[100%] bg-gray-100 mt-20 ">
        {/* <GrFormNextLink className=" z-10 text-white text-4xl absolute font-hairline mt-[25%] right-[160px] bg-gray-800 rounded-[50%]" /> */}
        <div className="md:text-[40px] text-[14px] text-center text-[#88563b]  ">
          <h1 className="font-[900] md:mx-10 md:my-3 py-4">
            Unleash Your Adventurous Spirit in Ticketless
          </h1>
        </div>
        {/* <GrFormPreviousLink className=" text-white text-4xl absolute font-hairline mt-[14%] left-[250px] bg-gray-800 rounded-[50%]" /> */}
        <div className="max-[550px]:w-[90%]  max-[550px]:flex max-[550px]:flex-col w-[65%] m-auto flex flex-no-wrap overflow-x-scroll items-start mb-2 scroll-smooth o-scrollbar scrollbar-hide">
          {unleashData.map((item) => (
            <div className=" mb-5 block bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex-none w-2/3 md:w-1/3 mr-2 md:pb-4 border rounded-lg">
              <div className="relative overflow-hidden bg-cover bg-no-repeat  ">
                <img
                  className="rounded-t-lg w-[310px] h-[200px]  "
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="">
                <div className="p-3">
                  <h5 className="mb-1 text-xs font-medium leading-tight text-gray-400 dark:text-neutral-50">
                    {item.location}
                  </h5>
                  <h5 className="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {item.title}
                  </h5>
                  <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                    {item.description}
                  </p>
                </div>
                <div className="ratingandprice flex justify-between w-[90%] m-auto mb-2">
                  <div className="ratin flex gap-1">
                    <p className="text-gray-900 text-xs font-medium">
                      <span className="fa fa-star checked text-orange-400"></span>{" "}
                      {item.rating}
                    </p>
                    <p className="text-gray-400 text-xs font-medium">
                      (23,456)
                    </p>
                  </div>
                  <div className="price text-gray-800 font-bold">
                    <h3>{item.price}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Unleash;

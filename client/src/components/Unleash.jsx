import React from "react";
import banner from "../images/indian-museum.jpg";
const Unleash = () => {
  return (
    <>
      <div className="w-[100%]  bg-gray-100 mt-20">
        <div className="md:text-[40px] text-[14px] text-center text-[#88563b]  ">
          <h1 className="font-[900] md:mx-10 md:my-3 pt-8">
            Unleash Your Adventurous Spirit in Ticketless
          </h1>
        </div>
        <div className="w-[60%] m-auto grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
           
            <div className="w-[95%] card flex items-center justify-center text-center flex-col mb-3">
                <p className="my-3 to-black  font-[450]  w-[95%] text-center">Trekking and Hiking in Ticketless's Wilderness</p>
                <img className=" w-[95%] h-43" src={banner} alt="" />
                <p className="my-3 text-gray-600 font-[450]">Location Name</p>
            </div>
            <div className="w-[95%] card flex items-center justify-center text-center flex-col mb-3">
                <p className="my-3 to-black  font-[450]  w-[95%] text-center">Trekking and Hiking in Ticketless's Wilderness</p>
                <img className=" w-[95%] h-43" src={banner} alt="" />
                <p className="my-3 text-gray-600 font-[450]">Location Name</p>
            </div>
            <div className="w-[95%] card flex items-center justify-center text-center flex-col mb-3">
                <p className="my-3 to-black  font-[450]  w-[95%] text-center">Trekking and Hiking in Ticketless's Wilderness</p>
                <img className=" w-[95%] h-43" src={banner} alt="" />
                <p className="my-3 text-gray-600 font-[450]">Location Name</p>
            </div>
            <div className="w-[95%] card flex items-center justify-center text-center flex-col mb-3">
                <p className="my-3 to-black  font-[450]  w-[95%] text-center">Trekking and Hiking in Ticketless's Wilderness</p>
                <img className=" w-[95%] h-43" src={banner} alt="" />
                <p className="my-3 text-gray-600 font-[450]">Location Name</p>
            </div>
            <div className="w-[95%] card flex items-center justify-center text-center flex-col mb-3">
                <p className="my-3 to-black  font-[450]  w-[95%] text-center">Trekking and Hiking in Ticketless's Wilderness</p>
                <img className=" w-[95%] h-43" src={banner} alt="" />
                <p className="my-3 text-gray-600 font-[450]">Location Name</p>
            </div>
            <div className="w-[95%] card flex items-center justify-center text-center flex-col mb-3">
                <p className="my-3 to-black  font-[450]  w-[95%] text-center">Trekking and Hiking in Ticketless's Wilderness</p>
                <img className=" w-[95%] h-43" src={banner} alt="" />
                <p className="my-3 text-gray-600 font-[450]">Location Name</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Unleash;

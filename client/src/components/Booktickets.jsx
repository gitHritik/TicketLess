/* eslint-disable no-unused-vars */
import React from "react";
import Modal from "./Modal";
import Payment from "./Payment";
import Costomer_image from "./Costomer_image";
import  Footer  from "../components/Footer";
const Booktickets = () => {
  return (
    <>
    
      <div className="">
        <Modal />
      </div>

      <div className="">
        <Payment />
      </div>

      <div className=" w-[80%] m-auto mb-10">
        <Costomer_image/>
      </div>
      <div className="suggestion">
       <Footer/>
      </div>
    </>
  );
};

export default Booktickets;

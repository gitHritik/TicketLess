/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const TicketOption = ({ label, price }) => {
  const [ticketCounts, setTicketCounts] = useState({
    adult: 0,
    reduced: 0,
  });

  const incrementCount = (type) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const decrementCount = (type) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] > 0 ? prevCounts[type] - 1 : 0,
    }));
  };
  const priceReducer = 10 * ticketCounts.reduced;
  const priceAdult = 20 * ticketCounts.adult;
  return (
    <div className="flex flex-col justify-between p-2 border-b ">
      <div className="flex justify-between mb-[22px]">
        <span className="text-lg flex flex-col">
          Adult (Age 13+) <span className="text-[10px]"></span>
        </span>
        <div className="flex items-center ">
          <button
            className="px-3 py-1 bg-gray-300"
            onClick={() => decrementCount("adult")}
          >
            -
          </button>
          <span className="px-4">{ticketCounts.adult}</span>{" "}
          <button
            className="px-3 py-1 bg-gray-300"
            onClick={() => incrementCount("adult")}
          >
            +
          </button>
          <span className="pl-4 text-lg">Rs {20 * ticketCounts.adult}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-lg flex flex-col">
          Reduced Ticket
          <span className="text-[10px]">Children aged 4-12 and students</span>
        </span>

        <div className="flex items-center">
          <button
            className="px-3 py-1 bg-gray-300"
            onClick={() => decrementCount("reduced")}
          >
            -
          </button>
          <span className="px-4">{ticketCounts.reduced}</span>{" "}
          <button
            className="px-3 py-1 bg-gray-300"
            onClick={() => incrementCount("reduced")}
          >
            +
          </button>
          <span className="pl-4 text-lg">Rs {10 * ticketCounts.reduced}</span>
        </div>
      </div>
      <div className="flex justify-between mt-[17px]">
        <div className="flex justify-between ">Total Price</div>
        <div>Rs {priceReducer + priceAdult}</div>
      </div>
    </div>
  );
};

export default TicketOption;

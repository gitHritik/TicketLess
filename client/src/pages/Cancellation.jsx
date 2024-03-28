/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import HoursPage from "./HoursPage";

const Cancellation = ({ visible, onClose }) => {
  const [showHours, setShowHours] = useState(false);
  const [current, setCurrent] = useState(true);

  const handleCloseHours = () => {
    setShowHours(false);
  };

  const handleClick = () => {
    setShowHours(true);
  };

  if (setCurrent) visible === null;

  if (!visible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
      visible == null;
    }
  };
  return (
    <div className="flex justify-center items-center align-middle h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
        <p className="mb-3 font-normal text-black">
          Do you Really Want to Cancel Tickets?
        </p>
        <div className="flex justify-between">
          <button
            id="container"
            type="button"
            onClick={handleOnClose}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            No
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Yes
          </button>
        </div>
      </div>
      <HoursPage onClose={handleCloseHours} visible={showHours} />
    </div>
  );
};

export default Cancellation;

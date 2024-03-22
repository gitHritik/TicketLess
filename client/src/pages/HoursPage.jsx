/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const HoursPage = ({ visible, onClose }) => {
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
          Your Money Will Be Refund IN 24 Hours Thank You For Your Patience
        </p>
        <div className="">
          <button
            type="button"
            id="container"
            onClick={handleOnClose}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoursPage;

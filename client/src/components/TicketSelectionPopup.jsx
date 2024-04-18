/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import TicketOption from "./TicketOption";

const TicketSelectionPopup = ({ visible, onClose }) => {
  if (!visible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
      visible == null;
    }
  };

  return (
    <>
      <div>
        <div
          id="container"
          onClick={handleOnClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center"
        >
          <div className="bg-white p-4 rounded-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Select your tickets</h2>

            <TicketOption />

            <div className="mt-4 flex justify-end">
              <button
                className="bg-purple-600 text-white px-6 py-2 rounded"
                id="container"
                onClick={handleOnClose}
              >
                Save and continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketSelectionPopup;

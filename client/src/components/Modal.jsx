/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  useEffect(() => {
    // Add event listener to close modal when clicking outside the images
    const handleOutsideClick = (event) => {
      if (event.target.id === "modal") {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [modalOpen]);

  const openModal = (src) => {
    setModalImageSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="p-10 grid grid-cols-3 gap-5 max-[700px]:grid-cols-1 ">
        <img
          className="w-full h-full object-cover cursor-pointer"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240215121528/javare15.png"
          alt="Img 1"
          onClick={() =>
            openModal(
              "https://media.geeksforgeeks.org/wp-content/uploads/20240215121528/javare15.png"
            )
          }
        />

        <img
          className="w-full h-full object-cover cursor-pointer"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240215121204/15re.webp"
          alt="Img 2"
          onClick={() =>
            openModal(
              "https://media.geeksforgeeks.org/wp-content/uploads/20240215121204/15re.webp"
            )
          }
        />

        <img
          className="w-full h-full object-cover cursor-pointer"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240215121356/jsre15.jpg"
          alt="Img 3"
          onClick={() =>
            openModal(
              "https://media.geeksforgeeks.org/wp-content/uploads/20240215121356/jsre15.jpg"
            )
          }
        />
      </div>

      {modalOpen && (
        <div
          id="modal"
          className="fixed top-0 left-0 z-80 
                w-screen h-screen bg-black/70 
                flex justify-center items-center z-40"
        >
          <span
            className="fixed z-90 top-6 right-8 
                  text-white text-5xl font-bold cursor-pointer"
            onClick={closeModal}
          >
            ×
          </span>

          <img
            src={modalImageSrc}
            className="max-w-[800px] max-h-[600px] object-cover"
            alt="Modal"
          />
        </div>
      )}
    </>
  );
};

export default Modal;

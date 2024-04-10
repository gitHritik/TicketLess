import React from "react";
import {Link} from 'react-router-dom'
const Modal = () => {
  
  // Get all the img elements in the grid
  var images = document.querySelectorAll('.grid img');
 
  // Loop through each img element
  images.forEach(function (img) {
       
    // Add Link click event listener to each img element
      img.addEventListener('click', function () {
          showModal(img.src);
      });
  });

  // Get the modal by id
  var modal = document.getElementById("modal");

  // Get the modal image tag
  var modalImg = document.getElementById("modal-img");

  // This function is called when Link small image is clicked
  function showModal(src) {
      modal.classList.remove('hidden');
      modalImg.src = src;
  }

  // This function is called when the close button is clicked
  function closeModal() {
      modal.classList.add('hidden');
  }
  return (
    <>
      <div className="p-10 grid grid-cols-3 gap-5 max-[700px]:grid-cols-1 ">
        <img
          className="w-full h-full object-cover cursor-pointer"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240215121528/javare15.png"
          alt="Img 1"
          id="img1"
        />

        <img
          className="w-full h-full object-cover cursor-pointer"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240215121204/15re.webp"
          alt="Img 2"
          id="img2"
        />

        <img
          className="w-full h-full object-cover cursor-pointer"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240215121356/jsre15.jpg"
          alt="Img 3"
          id="img3"
        />
      </div>

      <div
        id="modal"
        className="hidden fixed top-0 left-0 z-80 
                w-screen h-screen bg-black/70 flex 
                justify-center items-center"
      >
        <Link
          className="fixed z-90 top-6 right-8 
                  text-white text-5xl font-bold"
          href="javascript:void(0)"
          onClick={closeModal}
        >
          ×
        </Link>

        <img id="modal-img" className="max-w-[800px] max-h-[600px] object-cover" />
      </div>
    </>
  );
};

export default Modal;

// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [Mobile, setMobile] = useState(true);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (

       <nav className=" bg-black p-4 max-md:p-7 fixed w-full top-0 z-10"> 
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/" className=" text-white text-2xl font-bold max-md:hidden">
          Ticketless
        </Link>
        <ul
          className={
            Mobile ? " max-md:hidden" : "flex flex-col justify-start w-full"
          }
          onClick={() => setMobile(false)}
        >
          <Link
            to="/"
            className="text-white mr-4 max-md:border-b border-gray-700 my-1"
          >
            Home
          </Link>

          <Link
            to="/booking"
            className="text-white mr-4  max-md:border-b border-gray-700 my-1"
          >
            Booking
          </Link>

          <Link
            to="/cancellation"
            className="text-white mr-4  max-md:border-b border-gray-700 my-1"
          >
            Cancellation
          </Link>
          <Link
            to="/about"
            className="text-white mr-4  max-md:border-b border-gray-700 my-1"
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="text-white mr-4  max-md:border-b border-gray-700 my-1"
          >
            Contact us
          </Link>
          <Link to="/login" className="text-white mr-4">
            Login/Signup
          </Link>
        </ul>
        <button
          className="md:hidden bg-slate-50 fixed top-5 right-5"
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? <IoMdMenu /> : <RxCross2 />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

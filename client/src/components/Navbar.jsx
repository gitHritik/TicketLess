/* eslint-disable no-unused-vars */
// Navbar.js
import React, { useEffect, useState } from "react";
import { NavLink , Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [Mobile, setMobile] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  // ${isScrolled ? 'bg-gray-800 text-white' : 'bg-transparent text-black'}
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`bg-gray-800 p-4 max-md:p-7 fixed w-full top-0 z-10 transition duration-300  ${
        isScrolled ? "bg-gray-800 text-white hidden" : "bg-gray-800 text-white"
        // isScrolled ? "bg-gray-800 text-white" : "bg-transparent text-black"
      }`}
    >
      {/* <nav className=" bg-transparent p-4 max-md:p-7 fixed w-full top-0 z-10 transition duration-300 ease-in-out"> */}
      <div className="container mx-auto flex justify-between items-center ">
        <NavLink
          to="/"
          className=" text-white text-[2rem] font-bold max-md:hidden"
        >
          Ticketless
        </NavLink>
        <ul
          className={
            Mobile ? " max-md:hidden" : "flex flex-col justify-start w-full"
          }
        >
          <NavLink
            to="/"
            className="text-white mr-4 max-md:border-b border-gray-700 my-1 "
          >
            Home
          </NavLink>

          <NavLink
            to="/booking"
            className="text-white mr-4 max-md:border-b border-gray-700 my-1 "
          >
            Booking
          </NavLink>

          <NavLink
            to="/cancellation"
            className="text-white mr-4  max-md:border-b border-gray-700 my-1 "
          >
            Cancellation
          </NavLink>
          <NavLink
            to="/about"
            className="text-white mr-4  max-md:border-b border-gray-700 my-1 "
          >
            About us
          </NavLink>
          <NavLink
            to="/contact"
            text-2xl
            className="text-white mr-4  max-md:border-b border-gray-700 my-1 "
          >
            Contact us
          </NavLink>
          <NavLink to="/login" className="text-white mr-4 ">
            Login/Signup
          </NavLink>
        </ul>
        {/* <hr className="max-md:hidden  absolute top-20 border-gray-700 w-[90%] items-center" /> */}
        <button
          className="md:hidden bg-slate-50 fixed top-5 right-5 text-black"
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? <IoMdMenu /> : <RxCross2 />}
        </button>
      </div>
    </nav>
    
  );
};

export default Navbar;

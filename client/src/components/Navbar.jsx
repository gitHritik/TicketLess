/* eslint-disable no-unused-vars */
// Navbar.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

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

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  return (
    <>
      <nav
        className={`bg-gray-800 p-4 max-md:p-7 fixed w-full top-0 z-10 transition duration-300 brightness-100 ${
          isScrolled
            ? "bg-transparent text-white hidden"
            : "bg-transparent text-white"
          // isScrolled ? "bg-gray-800 text-white" : "bg-transparent text-black"
        }`}
      >
        {/* <nav className=" bg-transparent p-4 max-md:p-7 fixed w-full top-0 z-10 transition duration-300 ease-in-out"> */}
        <div className="container mx-auto flex justify-between items-center ">
          <Link
            to="/"
            className=" text-white text-[2rem] font-bold max-md:hidden"
          >
            Ticketless
          </Link>
          <ul
            className={
              Mobile ? " max-md:hidden" : "flex flex-col justify-start w-full"
            }
          >
            <Link
              to="/"
              className="text-white mr-4 max-md:border-b border-gray-700 my-1 "
            >
              Home
            </Link>

            <Link
              to="/booking"
              className="text-white mr-4 max-md:border-b border-gray-700 my-1 "
            >
              Booking
            </Link>

            <Link
              to="/cancellation"
              className="text-white mr-4  max-md:border-b border-gray-700 my-1 "
            >
              Cancellation
            </Link>
            <Link
              to="/about"
              className="text-white mr-4 max-md:border-b border-gray-700 my-1 "
            >
              About us
            </Link>
            <Link
              to="/contact"
              text-2xl
              className="text-white mr-4  max-md:border-b border-gray-700 my-1 "
            >
              Contact us
            </Link>
            <Link
              className="text-white mr-4 "
              onClick={() => setShowLogin(true)}
            >
              Login
            </Link>
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
      <Login onClose={handleCloseLogin} visible={showLogin} />
      <Register onClose={handleCloseRegister} visible={showRegister} />
    </>
  );
};

export default Navbar;

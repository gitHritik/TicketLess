/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Register = ({ visible, onClose, onFormSwitch }) => {
  if (!visible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };
  console.log(onclose);
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="flex justify-center items-center align-middle h-full fixed overflow-auto inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10"
    >
      <form className="max-w-[400px] w-full mx-auto mt-11 bg-white p-8">
        <h2 className="text-[33px] font-bold text-center">Register</h2>
        <div className="flex justify-between "></div>
        <div className="flex flex-col mb-2">
          <label>Username</label>
          <input className="border relative bg-gray-100 p-2" type="text" />
        </div>
        <div className="flex flex-col mb-2">
          <label>Email</label>
          <input className="border relative bg-gray-100 p-2" type="email" />
        </div>
        <div className="flex flex-col ">
          <label>Password</label>
          <input className="border relative bg-gray-100 p-2" type="password" />
        </div>
        <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
          Sign In
        </button>
        <p className="flex items-center mt-2">
          <input className="mr-2" type="checkbox" />
          Remember Me
        </p>
        <p className="text-center mt-8">
          Already a Memeber ?
          <span onClick={() => onFormSwitch("login")}> Login now</span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;

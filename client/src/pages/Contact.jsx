import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
   <Navbar />
      <div
        className=" bg-cover bg-no-repeat bg-center h-[200px] flex flex-col justify-center items-center z-10 "
        style={{
          backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/387/682/390/digital-art-dark-tile-cube-wallpaper-thumb.jpg)`,
          //   filter: `brightness(70%)`,
        }}
      >
        <h1 className=" text-white font-bold text-3xl text-center mt-20 w-[90%] max-[780px]:text-2xl">
         sit amet consectetur adipisicing elit. Totam, sequi.
        </h1>
      </div>
      <div className="main w-[90%] m-auto flex my-20 max-[1100px]:w-[98%] max-[800px]:flex-col">
        <div className="flex flex-col m-auto w-[45%]   max-[900px]:w-[35%] max-[800px]:w-[60%] max-[800px]:mb-20 ">
          <div className=" text-3xl font-bold max-[900px]:text-2xl">Contact US</div>
          <div className=" text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            dolorum temporibus vitae. Eum libero voluptatum, voluptas vitae modi
            omnis voluptates?
          </div>
        </div>
        <div className="from w-[45%] max-[900px]:w-[50%] max-[800px]:m-auto max-[800px]:w-[90%]">
          <form class="md:col-span-8 p-10 mr-10 shadow-inner max-[800px]:m-auto ">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email Address
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="********@*****.**"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="2"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div class="flex justify-between w-full px-3">
                <button
                  class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

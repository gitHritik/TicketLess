/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from "react";
import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import PopularPlaces from "../components/PopularPlaces";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DestInfromation = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <article className="">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <img
            src="https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg"
            className="w-full object-cover lg:rounded brightness-50"
            style={{ height: "28em" }}
            alt="Blog Cover"
          />
          <div className="px-4 lg:px-0 text-center">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              Location Name
            </h2>
            <a
              href="#"
              className="py-2  text-green-700 inline-flex items-center justify-center align-middle"
            >
              Museum
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12 justify-center">
          <div className="px-4 mt-3 lg:px-0  text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              blanditiis tempora perferendis optio eveniet a fuga cum ipsam,
              aperiam vitae quasi nisi corporis adipisci molestiae facere qui,
              culpa distinctio quisquam voluptatum illum veniam, voluptate fugit
              unde voluptas? Fugiat quidem maxime neque fugit ea! Rem soluta
              optio eos vel? Perferendis maxime, iure molestias totam, autem
              voluptatum nulla ad provident quam labore sint earum rem unde quis
              aspernatur possimus pariatur assumenda magnam eligendi quos,
              consectetur facere consequatur tempora aut. Architecto beatae unde
              repellat accusantium velit optio earum pariatur porro. Impedit
              molestiae officia ex nemo officiis aut, facilis, nesciunt
              recusandae repudiandae repellendus corrupti sequi mollitia. Eaque
              corporis nisi repudiandae voluptas eius soluta repellat
              consequatur praesentium vero, ad nulla, aliquid vel illum sint
              facere quibusdam necessitatibus laudantium voluptate architecto
              fuga omnis. Doloremque vero adipisci maiores, consequuntur,
              eveniet dignissimos reiciendis ad totam nemo iste tempora aliquam
              itaque quo beatae numquam doloribus recusandae iusto modi
              perferendis ipsum a fugiat quam harum dicta. Et atque pariatur,
              error quam fuga earum adipisci. Sequi quo voluptatem amet ullam
              optio? Quam, dignissimos quidem? Culpa necessitatibus, hic a
              cumque, molestias dicta nisi autem consequatur beatae tenetur
              laudantium eveniet quas consequuntur, repudiandae incidunt atque
              amet assumenda aut. Quae magnam tempore optio temporibus!
            </p>
          </div>
        </div>
        <div className="w-full text-center mt-7">
          <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Book Tickets
          </button>
        </div>

        <div className="flex text-center justify-around align-middle mt-8 md:w-full">
          <div className="flex items-center space-x-2">
            <BiCommentDetail className="text-gray-600" />
            <span className="text-gray-600">15 comments</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineHeart className="text-red-500" />
            <span className="text-gray-600">120 likes</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <a
              href="/"
              className="text-green-700 inline-flex items-center justify-center"
            >
              Back to Home
              <AiOutlineArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        <PopularPlaces tags="Museum" />
      </article>
      <Footer />
    </>
  );
};

export default DestInfromation;

/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import { IoStar } from "react-icons/io5";
import { Card } from "flowbite-react";
import { Mightlikedata } from "../pages/data";
import ReviewComment from "./ReviewComment";

function Costomer_image() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" mt-16">
        <p className=" font-bold text-4xl">Customer images</p>
      </div>
      <div className="slider-container mb-8 mt-5">
        <Slider {...settings}>
          <div className="h-[300px] w-[50px] bg-slate-500">
            <img
              className=" bg-cover h-[100%] w-[100%] "
              src="https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg"
              alt=""
            />
          </div>
          <div className="h-[300px] w-[50px] bg-slate-500">
            <img
              className=" bg-cover h-[100%] w-[100%] "
              src="https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg"
              alt=""
            />
          </div>
          <div className="h-[300px] w-[50px] bg-slate-500">
            <img
              className=" bg-cover h-[100%] w-[100%] "
              src="https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg"
              alt=""
            />
          </div>
          <div className="h-[300px] w-[50px] bg-slate-500">
            <img
              className=" bg-cover h-[100%] w-[100%] "
              src="https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg"
              alt=""
            />
          </div>
          <div className="h-[300px] w-[50px] bg-slate-500">
            <img
              className=" bg-cover h-[100%] w-[100%] "
              src="https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg"
              alt=""
            />
          </div>
          <div className="h-[300px] w-[50px] bg-slate-500">
            <img
              className=" bg-cover h-[100%] w-[100%] "
              src="https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg"
              alt=""
            />
          </div>
          <div className="h-[300px] w-[50px] bg-slate-500">
            <img
              className=" bg-cover h-[100%] w-[100%] "
              src="https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg"
              alt=""
            />
          </div>
          <div className="h-[300px] w-[50px] bg-slate-500">
            <img
              className=" bg-cover h-[100%] w-[100%] "
              src="https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <hr className=" mb-5" />
      <ReviewComment />

      <h1 className=" mt-14 mb-2 text-3xl font-bold text-center">
        You might like also
      </h1>
      <hr />
      <div className="you_might_like_section my-10   w-[100%]   grid grid-cols-3 max-[850px]:grid-cols-2 max-[550px]:grid-cols-1 max-[1350px]:w-[90%] max-[1050px]:w-[98%] ">
        {Mightlikedata.map((d) => (
          <div
            key={d.img}
            className=" max-w-[330px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 m-auto"
          >
            <img
              src={d.img}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-[250px] dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-2 space-y-2 h-[200px]">
              <div className="space-y-2">
                <h2 className="text-[20px] font-bold text-gray-400 tracking-wide">
                  {d.location}
                </h2>
                <h2 className="text-3xl font-semibold tracking-wide">
                  {d.title}
                </h2>
                <p className="dark:text-gray-800">{d.para}</p>
              </div>
              <div className="rating">
                <div className="ratingandprice flex justify-between m-auto mb-2 md:px-0 px-2">
                  <div className=" flex gap-1">
                    <p className="text-gray-900 md:text-xs font-medium text-[10px] leading-[1rem]">
                      <span className="fa fa-star checked text-orange-400"></span>{" "}
                      {d.rating}
                    </p>
                    <p className="text-gray-400 md:text-xs leading-[17px] text-[8px] font-medium">
                      (23,456)
                    </p>
                  </div>
                  <div className="price font-bold">INR {d.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Costomer_image;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { unleashData } from "../pages/data";

function Unlease() {
  const settings = {
    dots: 4,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-gray-100">
      <div className="md:w-3/4 m-auto  ">
        <div className="md:text-[40px] text-[14px] text-center text-[#88563b]  ">
          <h1 className="font-[900] md:mx-10 md:my-3 py-4">
            Unleash Your Adventurous Spirit in Ticketless
          </h1>
        </div>
        <div className="items-start mb-2 ">
          <Slider {...settings}>
            {unleashData.map((d) => (
              <div
                key={d.item}
                className="mb-5 md:block w-[22px] cursor-pointer  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex-none  md:w-1/3  md:pb-4 border rounded-lg"
              >
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={d.img}
                    alt=""
                    className="rounded-t-lg md:w-[347px] md:h-[270px] w-[22px] h-[22px]"
                  />
                </div>

                <div className="">
                  <div className="md:p-6">
                    <h5 className="mb-1 text-xs font-medium leading-tight text-gray-400 ">
                      {d.location}
                    </h5>
                    <h5 className="mb-1 text-xl font-medium leading-tight text-neutral-800 ">
                      {d.title}
                    </h5>
                    <p className="mb-2 text-base text-neutral-600 ">
                      {d.description}
                    </p>
                  </div>
                  <div className="ratingandprice flex justify-between md:w-[90%] m-auto mb-2">
                    <div className=" flex gap-1">
                      <p className="text-gray-900 text-xs font-medium">
                        <span className="fa fa-star checked text-orange-400"></span>{" "}
                        {d.rating}
                      </p>
                      <p className="text-gray-400 text-xs font-medium">
                        (23,456)
                      </p>
                    </div>
                    <button className="price text-gray-800 font-bold">
                      <h3>Know More</h3>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Unlease;

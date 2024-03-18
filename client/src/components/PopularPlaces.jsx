/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import RelatedPlaces from "./RelatedPlaces.jsx";

const PopularPlaces = ({ tags }) => {
  return (
    <section className="text-gray-600 mt-12 ml-[150px] mr-[150px] flex flex-col justify-center align-middle">
      <h2 className="text-3xl font-bold ml-[21px]">
        Popular Museum in Location Name
      </h2>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          <RelatedPlaces />
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;

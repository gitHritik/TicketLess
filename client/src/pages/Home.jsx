/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Scroller from "../components/Scroller.jsx";
import Bannerhome from "../components/Bannerhome.jsx";
import Cards from "../components/Cards.jsx";
import Footer from "../components/Footer.jsx";
import Unlease from "../components/Unlease.jsx";
import UnleaseMuseum from "../components/UnleaseMuseum.jsx";



const Home = () => {
  return (
    <>
      <Navbar />
      <Bannerhome />
      <div className="md:mx-[1rem] mx-[1rem] my-2">
        <Scroller />
      </div>
 
      <Unlease />
      <UnleaseMuseum />

      <Cards />
      <Footer />
    </>
  );
};

export default Home;

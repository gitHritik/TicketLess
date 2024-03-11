/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from '../components/Navbar.jsx';
import Scroller from "../components/Scroller.jsx";
import Bannerhome from "../components/Bannerhome.jsx";
import Unleash from "../components/Unleash.jsx";
import Cards from "../components/Cards.jsx";
import Footer from "../components/Footer.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <Bannerhome />
      <div className="md:mx-[1rem] mx-[1rem] my-2">
        <Scroller />
        <Unleash />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default Home;

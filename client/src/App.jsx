/* eslint-disable no-unused-vars */
// App.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cancellation from "./pages/Cancellation.jsx";
import Contact from "./pages/Contact.jsx";
import DestInfromation from "./pages/DestInformation.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import MostVisited from "./pages/MostVisited.jsx";
import MostPopular from "./pages/MostPopular.jsx";
import MostTrendy from "./pages/MostTrendy.jsx";
import PopularLocations from "./pages/PopularLocation.jsx";
import Register from "./pages/Register.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <div data-aos="fade-up"> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<MyBookings />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locationinfo/:id" element={<DestInfromation />} />
        <Route
          path="/Most Visited"
          element={<MostVisited title="Most Visisted" />}
        />
        <Route
          path="/Most Popular"
          element={<MostPopular title="Most Popular" />}
        />
        <Route
          path="/Most Trendy"
          element={<MostTrendy title="Most Trendy" />}
        />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
        <Route path="/popularLocation/:id" element={<PopularLocations />} />
      </Routes>
      {/* </div> */}
    </>
  );
};

export default App;

/* eslint-disable no-unused-vars */
// App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Booking from "./pages/Booking.jsx";
import About from "./pages/About.jsx";
import Cancellation from "./pages/Cancellation.jsx";
import Booktickets from './components/Booktickets.jsx'
import Contact from "./pages/Contact.jsx";
import DestInfromation from "./pages/DestInformation.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/id/info" element={<DestInfromation />} />
        <Route path="/id/booktickets" element={<Booktickets />} />
      </Routes>
    </>
  );
};

export default App;

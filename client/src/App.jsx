// App.js
import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

=======
import Scroller from "./components/Scroller.jsx";
>>>>>>> 3f92040a6a8bc62f8ade14b46083a39f45b6e042

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
        </Routes>
      </BrowserRouter>
      
=======
      <Scroller />
>>>>>>> 3f92040a6a8bc62f8ade14b46083a39f45b6e042
    </>
  );
};

export default App;

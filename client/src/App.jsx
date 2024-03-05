// App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
// import Scroller from "./components/Scroller.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Scroller /> */}
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

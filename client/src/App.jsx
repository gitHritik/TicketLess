// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import Scroller from "./components/Scroller.jsx";
import Bannerhome from "./components/Bannerhome.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Bannerhome/>
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
        </Routes>
      </BrowserRouter>
      
      <Scroller />
    </>
  );
};

export default App;

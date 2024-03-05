// App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
<<<<<<< HEAD
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import Scroller from "./components/Scroller.jsx";
import Bannerhome from "./components/Bannerhome.jsx";
=======
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Scroller from "./components/Scroller.jsx";
>>>>>>> 234c5105e9e0954a40d409ed5e84e0514f45caf2

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
<<<<<<< HEAD
        <Bannerhome/>
=======
        <Scroller />
>>>>>>> 234c5105e9e0954a40d409ed5e84e0514f45caf2
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
        </Routes>
      </BrowserRouter>
<<<<<<< HEAD
      
      <Scroller />
=======
>>>>>>> 234c5105e9e0954a40d409ed5e84e0514f45caf2
    </>
  );
};

export default App;

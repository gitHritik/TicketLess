// App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Scroller from "./components/Scroller.jsx";
import Bannerhome from "./components/Bannerhome.jsx";
import Home from "./pages/Home.jsx";
import Unleash from "./components/Unleash.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
     
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
        </Routes>
      </BrowserRouter>
      <Bannerhome />
        <Scroller />
        <Unleash/>
    </>
  );
};

export default App;

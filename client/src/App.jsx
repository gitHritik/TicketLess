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
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Bannerhome />
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
        </Routes>
        <div className="md:mx-[1rem] mx-[1rem] my-2">
          <Scroller />
<<<<<<< HEAD
          <Unleash />
          <Cards />
          <Footer/>
=======
>>>>>>> d308915db19683520cb57d1dad60599d00a2d734
        </div>
        <Unleash />
        <Cards />
      </BrowserRouter>
    </>
  );
};

export default App;

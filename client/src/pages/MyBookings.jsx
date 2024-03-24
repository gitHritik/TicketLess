/* eslint-disable no-unused-vars */

import banner from "../images/indian-museum1.jpg";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Upcoming from "../components/Upcoming";
import Expired from "../components/Expired";
import Cancel from "../components/Cancel";

const MyBookings = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Navbar />
      <div
        className=" bg-cover bg-no-repeat bg-center h-[250px] flex flex-col justify-center items-center z-10 "
        style={{
          backgroundImage: `url(${banner})`,
          //   filter: `brightness(70%)`,
        }}
      >
        <h1 className=" text-white font-bold text-5xl text-center m-auto">
          Your Bookings
        </h1>
      </div>
      <main className="py-12 max-w-7xl container mx-auto px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
            <div className="space-y-6 md:w-full">
              {/* <Bookings />
              
              <Bookings /> */}
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Upcomings" value="1" />
                    <Tab label="Expired" value="2" />
                    <Tab label="Cancelled" value="3" />
                  </TabList>
                </Box>
                <TabPanel disableGutters value="1">
                  <Upcoming />
                </TabPanel>
                <TabPanel value="2">
                  <Expired />
                </TabPanel>
                <TabPanel value="3">
                  {" "}
                  <Cancel />{" "}
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyBookings;

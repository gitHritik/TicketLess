/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { BACKEND_URL } from "../constant";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sessionId = new URLSearchParams(location.search).get("session_id");
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const saveBooking = async () => {
      if (sessionId) {
        try {
          const response = await axios.post(`${BACKEND_URL}/api/booking`, {
            sessionId,
          });
          console.log("Booking saved:", response.data);
        } catch (error) {
          console.error("Error saving booking:", error);
        }
      }
    };

    saveBooking();
  }, [sessionId]);

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Thank you for your booking!</p>
      <Link to="/booking">
        <div
          // data-aos="fade-up"
          className="fixed bottom-10 z-40  m-auto left-0 right-0 bg-black w-48 h-12 flex items-center justify-center rounded-md shadow-md cursor-pointer"
        >
          <p className="capitalize font-bold text-white">Go To Booking Page</p>
        </div>
      </Link>
    </div>
  );
};

export default Success;

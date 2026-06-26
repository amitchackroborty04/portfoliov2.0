// components/FloatingButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <a
         href="https://wa.me/8801614793657"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="relative flex items-center justify-center">
        
        {/* Ping Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Button */}
        <div className="relative p-4 bg-green-500 rounded-full shadow-xl text-white hover:bg-green-600 transition duration-300 animate-bounce">
          <FaWhatsapp size={28} />
        </div>

      </div>
    </a>
  );
};

export default FloatingButton;
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="sticky md:relative top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}

            <div className="flex gap-2 items-center justify-center flex-wrap">
              <img
                src="/update.png"
                className="w-17 md:w-30 object-contain"
                alt="Update Logo"
              />
              <img
                src="/MCA.png"
                className="w-4 md:w-6 object-contain"
                alt="Abhi Logo"
              />
              <img
                src="/MSME.png"
                className="w-13 md:w-20 object-contain "
                alt="ISO Logo"
              />
              <img
                src="/DPIIT.png"
                className="w-14 md:w-22 object-contain"
                alt="DPIIT Logo"
              />
              <img
                src="/ISO.png"
                className="w-10 md:w-12 object-contain"
                alt="DPIIT Logo"
              />
            </div>

            {/* Desktop Button */}
            <button
              onClick={() => navigate("/signup")}
              className="hidden md:inline-block bg-red-500 hover:bg-red-600 
                         transition duration-300 
                         text-white text-sm md:text-lg 
                         px-4 md:px-6 py-2 
                         rounded-lg font-semibold shadow-md"
            >
              APPLY NOW
            </button>
          </nav>
        </div>
      </header>

      {/* 📱 Mobile Bottom Fixed Button */}
      <div className="fixed rounded-t-2xl bottom-0 left-0 w-full md:hidden bg-white border-t border-gray-200 shadow-lg p-3 z-50">
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-red-500 hover:bg-red-600 
                     text-white py-3 rounded-xl 
                     font-semibold shadow-md transition duration-300"
        >
          APPLY NOW 
        </button>
      </div>
    </>
  );
}

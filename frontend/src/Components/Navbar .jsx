import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const logos = [
    { src: "/update.png", className: "w-16 md:w-28" },
    { src: "/MCA.png", className: "w-5 md:w-8" },
    { src: "/MSME.png", className: "w-14 md:w-24" },
    { src: "/DPIIT.png", className: "w-14 md:w-24" },
    { src: "/ISO.png", className: "w-10 md:w-14" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* LOGOS */}
            <div className="flex gap-2 items-center flex-wrap">
              {logos.map((logo, i) => (
                <motion.img
                  key={i}
                  src={logo.src}
                  alt="logo"
                  whileHover={{ scale: 1.1 }}
                  className={`${logo.className} object-contain`}
                />
              ))}
            </div>

            {/* DESKTOP CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={() => navigate("/signup")}
              className="hidden md:inline-block bg-red-500 hover:bg-red-600 
                         text-white text-sm md:text-lg 
                         px-4 md:px-6 py-2 
                         rounded-lg font-semibold shadow-md"
            >
              APPLY NOW
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* 📱 MOBILE CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-0 left-0 w-full md:hidden bg-white border-t border-gray-200 shadow-lg p-3 z-50"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() => navigate("/signup")}
          className="w-full bg-red-500 hover:bg-red-600 
                     text-white py-3 rounded-xl 
                     font-semibold shadow-md"
        >
          APPLY NOW
        </motion.button>
      </motion.div>
    </>
  );
}

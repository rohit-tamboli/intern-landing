import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const logos = [
    { src: "/update.png", className: "w-12 sm:w-14 md:w-24" },
    { src: "/MCA.png", className: "w-4 sm:w-5 md:w-7" },
    { src: "/MSME.png", className: "w-10 sm:w-12 md:w-20" },
    { src: "/DPIIT.png", className: "w-10 sm:w-12 md:w-20" },
    { src: "/ISO.png", className: "w-8 sm:w-10 md:w-12" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-md border-b border-gray-200/50"
            : "bg-white border-b border-gray-200"
        }`}
      >
        {/* Gradient Line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-red-500 via-red-400 to-red-500"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between h-14 sm:h-16 md:h-20">

            {/* LOGOS → SCROLLABLE (FIX 🔥) */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
              {logos.map((logo, i) => (
                <motion.img
                  key={i}
                  src={logo.src}
                  alt="logo"
                  whileHover={{ scale: 1.05 }}
                  className={`${logo.className} object-contain shrink-0 opacity-90 hover:opacity-100 transition`}
                />
              ))}
            </div>

            {/* DESKTOP BUTTON */}
            <div className="hidden md:flex">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/signup")}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-500 
                           text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Apply Now
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* 📱 PREMIUM FLOATING CTA */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] z-50">

        {/* Glass Background */}
        <div className="absolute inset-0 rounded-2xl 
                        bg-white/20 backdrop-blur-xl 
                        border border-white/30 
                        shadow-[0_8px_30px_rgba(0,0,0,0.1)]"></div>

        {/* Glow Layer */}
        <div className="absolute inset-0 rounded-2xl 
                        bg-gradient-to-r from-red-400/20 to-red-400/20 blur-xl"></div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => navigate("/signup")}
          className="relative w-full py-3.5 rounded-2xl 
                     bg-gradient-to-r from-red-500 to-red-500 
                     text-white font-semibold text-base 
                     shadow-[0_12px_40px_rgba(255,0,0,0.35)]"
        >
          Apply Now
        </motion.button>
      </div>
    </>
  );
}
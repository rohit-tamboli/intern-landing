import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();
  return (
    <section className="relative py-28 bg-gradient-to-r from-red-500 to-red-600 text-white overflow-hidden">
      {/* background glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Start Your Corporate Journey Today
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-red-100">
          Apply now and gain real industry experience with certifications,
          mentorship and live projects.
        </p>

        {/* CTA Button */}
        <button className="mt-10 bg-white text-red-600 hover:bg-gray-300 transition px-8 py-4 rounded-xl text-lg text-base font-semibold shadow-xl hover:shadow-2xl transition md:flex mx-auto hidden">
         APPLY NOW
        </button>

        

        {/* Trust text */}
        <p className="mt-6 text-sm text-red-100">
          Trusted by students from 100+ colleges across India
        </p>
      </div>
    </section>
  );
}

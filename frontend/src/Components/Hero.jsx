import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Briefcase, Home, Award } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Briefcase size={28} />,
      title: "45 Days Corporate Program",
      desc: "Hands-on real world corporate training and live projects.",
    },
    {
      icon: <Home size={28} />,
      title: "Work From Home",
      desc: "100% remote internship with flexible schedule.",
    },
    {
      icon: <Award size={28} />,
      title: "₹10,000 Bonus",
      desc: "Performance-based reward and verified certification.",
    },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-br from-red-50 via-white to-orange-50 overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-300 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="px-3 py-1 text-[12px] font-semibold bg-red-100 text-red-600 rounded-full shadow-sm">
            Limited Seats • 2026 Internship Batch
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Corporate Internship Program 2026
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Get real corporate exposure with{" "}
          <span className="font-semibold text-red-500">
            5+ industry certifications
          </span>{" "}
          and hands-on internship experience designed for students and fresh
          graduates.
        </motion.p>

        {/* Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex justify-center text-red-500 mb-4">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-lg">{feature.title}</h3>

              <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex flex-col md:flex-row justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <button
            onClick={() => navigate("/phonepe")}
            className="px-10 py-4 text-lg font-semibold text-white rounded-full 
            bg-gradient-to-r from-red-500 to-orange-500 
            shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            Apply Now
          </button>

         
        </motion.div>

        {/* Trust indicator */}
        <p className="mt-10 text-sm text-gray-500">
          Trusted by students from 100+ colleges across India
        </p>

      </div>
    </section>
  );
}
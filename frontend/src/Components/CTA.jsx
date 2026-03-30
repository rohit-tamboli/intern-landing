import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-28 bg-gradient-to-r from-red-500 to-red-600 text-white overflow-hidden">

      {/* ✅ Lightweight Glow (no infinite animation) */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white rounded-full blur-xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-xl opacity-20"></div>

      {/* ✅ Parent stagger */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.15 }}
        className="max-w-4xl mx-auto px-6 text-center relative"
      >

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6"
        >
          🚨 Limited Seats Available
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Start Your Corporate Journey Today
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="mt-6 text-lg text-red-100"
        >
          Apply now and gain real industry experience with certifications,
          mentorship and live projects.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={fadeUp}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl mx-auto hidden md:flex cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          APPLY NOW
        </motion.button>

        {/* Text */}
        <motion.p
          variants={fadeUp}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="mt-4 text-sm text-red-100"
        >
          ⏳ Only 50 Seats Left • Last Date: 30 March
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="mt-2 text-sm text-red-100"
        >
          Trusted by students from 100+ colleges across India
        </motion.p>

      </motion.div>
    </section>
  );
}
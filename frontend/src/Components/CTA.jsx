import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 bg-gradient-to-r from-red-500 to-red-600 text-white overflow-hidden">

      {/* Animated Background Glow */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-white rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative">

        {/* Urgency Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6"
        >
          🚨 Limited Seats Available
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Start Your Corporate Journey Today
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-red-100"
        >
          Apply now and gain real industry experience with certifications,
          mentorship and live projects.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.05, 1] }}
          className="mt-10 bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl mx-auto hidden md:flex cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          APPLY NOW
        </motion.button>

        {/* Scarcity + Trust */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-sm text-red-100"
        >
          ⏳ Only 50 Seats Left • Last Date: 30 March
        </motion.p>

        <p className="mt-2 text-sm text-red-100">
          Trusted by students from 100+ colleges across India
        </p>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 via-red-400 to-red-500 overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Welcome to{" "}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white bg-white/10 px-2 py-1 rounded-lg"
          >
            upDate
          </motion.span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 text-white max-w-2xl mx-auto text-lg leading-relaxed"
        >
          upDate is an industry-focused EdTech initiative led by IIT Alumni
          committed to transforming learners into corporate-ready professionals
          through practical learning and real-world experience.
        </motion.p>

      </div>

      {/* Optional Glow Effect */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      />

    </section>
  );
}
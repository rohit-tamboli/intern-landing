import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 via-red-400 to-red-500 overflow-hidden relative">

      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white leading-tight"
        >
          Welcome to{" "}
          <span className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
            upDate
          </span>
        </motion.h2>

        {/* Sub Heading (NEW 🔥) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-white/90 text-lg md:text-xl font-medium"
        >
          Transforming learners into corporate-ready professionals
        </motion.p>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-white max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          upDate is an industry-focused EdTech initiative led by IIT Alumni,
          committed to bridging the gap between academic learning and real-world
          industry demands through practical, job-oriented certification programs.
        </motion.p>

        {/* Highlight Line (🔥 Powerful) */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-white font-semibold text-lg"
        >
          We don’t just teach —{" "}
          <span className="bg-white text-red-500 px-2 py-1 rounded">
            we prepare you for the corporate world.
          </span>
        </motion.p>

      </div>

      {/* Glow Effect */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      />

    </section>
  );
}
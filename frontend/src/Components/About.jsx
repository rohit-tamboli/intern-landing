import { motion } from "framer-motion";

export default function About() {
  // reusable animation
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-red-500 via-red-400 to-red-500 overflow-hidden relative section-smooth"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white leading-tight"
        >
          Welcome to{" "}
          <span className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm animate-pulse">
            upDate
          </span>
        </motion.h2>

        {/* Sub Heading */}
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-4 text-white/90 text-lg md:text-xl font-medium"
        >
          Transforming learners into corporate-ready professionals
        </motion.p>

        {/* Paragraph */}
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.4 }}
          className="mt-6 text-white max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          upDate is an industry-focused EdTech initiative led by IIT Alumni,
          committed to bridging the gap between academic learning and real-world
          industry demands through practical, job-oriented certification programs.
        </motion.p>

        {/* Highlight Line */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-white font-semibold text-lg"
        >
          We don’t just teach —{" "}
          <span className="bg-white text-red-500 px-2 py-1 rounded">
            we prepare you for the corporate world.
          </span>
        </motion.p>
      </div>

      {/* Glow Effects (Optimized) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl opacity-40 animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl opacity-30 animate-pulse"></div>
    </section>
  );
}
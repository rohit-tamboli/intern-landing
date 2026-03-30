import { motion } from "framer-motion";

export default function About() {

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-red-500 via-red-400 to-red-500 overflow-hidden relative section-smooth"
    >
      {/* ✅ Parent controls all animations */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.12 }}
        className="max-w-4xl mx-auto px-4 text-center"
      >

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-bold text-white leading-tight"
        >
          Welcome to{" "}
          <span className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
            upDate
          </span>
        </motion.h2>

        {/* Sub Heading */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-white/90 text-lg md:text-xl font-medium"
        >
          Transforming learners into corporate-ready professionals
        </motion.p>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-white max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          upDate is an industry-focused EdTech initiative led by IIT Alumni,
          committed to bridging the gap between academic learning and real-world
          industry demands through practical, job-oriented certification programs.
        </motion.p>

        {/* Highlight Line */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-white font-semibold text-lg"
        >
          We don’t just teach —{" "}
          <span className="bg-white text-red-500 px-2 py-1 rounded">
            we prepare you for the corporate world.
          </span>
        </motion.p>

      </motion.div>

      {/* Glow Effects (lighter) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-xl opacity-20"></div>
    </section>
  );
}
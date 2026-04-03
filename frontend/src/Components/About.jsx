import { motion } from "framer-motion";

export default function About() {

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative font-mono py-14 sm:py-20 md:py-24 bg-gradient-to-br from-red-600 via-red-500 to-red-600 overflow-hidden text-white"
    >

      {/* Premium Glow */}
      <div className="absolute -top-20 left-5 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-white/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-5 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-orange-300/20 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.15 }}
        className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >

        {/* Badge */}
        <motion.span
          variants={fadeUp}
          className="inline-block px-3 sm:px-4 py-1 text-xs sm:text-sm bg-white/10 border border-white/20 rounded-full backdrop-blur-md"
        >
          About Our Platform
        </motion.span>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-snug "
        >
          Welcome to{" "}
          <span className="bg-white font-heading text-red-500 px-0 sm:px-0 py-0 ">
            upDate
          </span>
        </motion.h2>

        {/* Sub Heading */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-4 sm:mt-5 text-white/90 text-sm sm:text-lg md:text-xl font-medium font-mono"
        >
          Transforming learners into corporate-ready professionals
        </motion.p>

        {/* Content Card */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-10 bg-white/10 border border-white/20 rounded-2xl p-5 sm:p-8 backdrop-blur-md shadow-xl"
        >
          <p className=" font-mono text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
            upDate is an industry-focused EdTech initiative led by IIT Alumni,
            committed to bridging the gap between academic learning and real-world
            industry demands through practical, job-oriented certification programs.
          </p>

          <p className=" font-mono mt-4 sm:mt-6 text-base sm:text-lg font-semibold">
            We don’t just teach —{" "}
            <span className="bg-white text-red-500 px-2 sm:px-3 py-1 rounded-lg">
              we prepare you for the corporate world.
            </span>
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
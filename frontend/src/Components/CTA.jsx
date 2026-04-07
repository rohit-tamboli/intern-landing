import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative font-alt py-16 sm:py-20 md:py-28 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white overflow-hidden">

      {/* Glow Layers */}
      <div className="pointer-events-none absolute -top-20 -left-16 sm:-top-24 sm:-left-24 w-56 sm:w-80 h-56 sm:h-80 bg-white/30 rounded-full blur-3xl opacity-30"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-200/30 rounded-full blur-3xl opacity-30"></div>

      {/* Responsive Pattern */}
      <div className="
        pointer-events-none absolute inset-0 
        opacity-[0.04] sm:opacity-[0.06]
        [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
        [background-size:14px_14px] sm:[background-size:20px_20px]
      "></div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.15 }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center"
      >

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 shadow"
        >
          <span>🚨</span> Limited Seats Available
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight font-mono"
        >
          Start Your{" "}
          <span className="bg-white text-red-600 px-2 sm:px-3 py-1 rounded-lg">
            Corporate Journey
          </span>{" "}
          Today
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          Apply now and gain real industry experience with certifications,
          mentorship and live projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={() => navigate("/signup")}
            className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 rounded-xl bg-white text-red-600 font-semibold text-base sm:text-lg shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:scale-105 transition-all"
          >
            Apply Now
          </button>

          <button
            onClick={() => window.open("/Broshure.pdf", "_blank")}
            className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 rounded-xl border border-white/40 text-white font-medium text-base sm:text-lg hover:bg-white/10 transition"
          >
            View Brochure
          </button>
        </motion.div>

        {/* Trust / Urgency */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-5 sm:mt-6 space-y-1 sm:space-y-2"
        >
          <p className="text-xs sm:text-sm md:text-base text-white/90">
            ⏳ Only <span className="font-semibold text-white">50 Seats</span> Left • Last Date: 30 March
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white/80">
            Trusted by students from <span className="font-semibold text-white">100+ colleges</span> across India
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
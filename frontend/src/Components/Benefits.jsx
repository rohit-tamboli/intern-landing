import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    "Internship Offer Letter",
    "Internship Completion Certificate",
    "Letter of Recommendation",
    "Advanced Domain Certification",
    "NISM Certification",
    "Corporate Welcome Kit",
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative font-alt py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" id="benefits">

      {/* Glow Background */}
      <div className="absolute -top-20 left-5 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-5 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>

      {/* HEADING */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  text-center mb-10 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 font-mono"
        >
          Internship{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
            Benefits
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 sm:mt-5 text-gray-600 max-w-2xl mx-auto text-sm sm:text-lg"
        >
          Gain <span className="font-semibold text-gray-900">industry-recognized certifications</span>, corporate exposure and valuable career support to become <span className="font-semibold text-gray-900">job-ready professionals</span>.
        </motion.p>
      </div>

      {/* CONTENT */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.15 }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
      >

        {/* LEFT */}
        <motion.div className="grid gap-3 sm:gap-5 order-2 md:order-1">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 sm:gap-4 bg-white border border-gray-200 px-4 sm:px-5 py-3 sm:py-4 rounded-xl shadow-sm hover:shadow-xl transition-all"
            >
              <div className="bg-red-100 p-1.5 sm:p-2 rounded-lg">
                <CheckCircle className="text-red-500" size={16} />
              </div>

              <span className="text-gray-800 text-xs sm:text-sm md:text-base font-medium">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative w-full max-w-md sm:max-w-xl">

            {/* Image */}
            <img
              src="/Corporate.png"
              alt="Internship Certificates"
              className="rounded-2xl w-full shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />

            {/* Floating Badges (Responsive FIX) */}
            <div className="absolute top-2 left-2 sm:-top-5 sm:-left-6 bg-white border border-gray-200 shadow-lg px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-sm font-semibold">
              🎓 Certifications
            </div>

            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-6 bg-white border border-gray-200 shadow-lg px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-sm font-semibold">
              🎁 Welcome Kit
            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
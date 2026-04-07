import { motion } from "framer-motion";

export default function PanIndia() {

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative font-alt py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 left-5 sm:left-10 w-56 sm:w-80 h-56 sm:h-80 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-5 sm:right-10 w-56 sm:w-80 h-56 sm:h-80 bg-red-200 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.18 }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
      >

        {/* RIGHT (Image First on Mobile) */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative order-1 md:order-2"
        >
          {/* Glow */}
          <div className="absolute w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-r from-red-200 to-red-200 rounded-full blur-3xl opacity-40"></div>

          <img
            src="/india-map.png"
            alt="PAN India Presence"
            className="relative w-full max-w-[260px] sm:max-w-md object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          />
        </motion.div>

        {/* LEFT */}
        <motion.div className="space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1">

          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="inline-block px-3 sm:px-4 py-1 text-xs sm:text-sm bg-white border border-gray-200 rounded-full text-gray-600 shadow-sm"
          >
            Nationwide Reach
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight font-mono"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
              PAN-India Presence
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            We are building a strong presence across India to create wider career
            opportunities for our learners. With connections in metropolitan
            cities, industrial hubs, and emerging markets, we ensure localized
            hiring expertise with national-level placement support.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Through our growing network, learners gain access to internship and
            job opportunities across India, making their career prospects stronger
            and more scalable.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-3 sm:gap-6 mt-4 sm:mt-6"
          >
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl sm:text-3xl font-bold text-red-500">15+</h3>
              <p className="text-xs sm:text-sm text-gray-500">States Covered</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl sm:text-3xl font-bold text-red-500">50+</h3>
              <p className="text-xs sm:text-sm text-gray-500">Cities Network</p>
            </div>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}
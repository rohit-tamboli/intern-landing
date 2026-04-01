import { motion } from "framer-motion";

export default function CEOSection() {

  const fadeLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-20 left-5 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-5 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.2 }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
      >

        {/* IMAGE */}
        <motion.div
          variants={fadeLeft}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative order-1 md:order-none"
        >
          {/* Glow Ring */}
          <div className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-red-200 to-orange-200 rounded-full blur-3xl opacity-40"></div>

          <img
            src="/ceo.png"
            alt="Kirtan Sahu"
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-[4px] sm:border-[6px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          variants={fadeRight}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left order-2 md:order-none"
        >

          {/* Badge */}
          <span className="inline-block px-3 sm:px-4 py-1 text-xs sm:text-sm bg-gray-100 border border-gray-200 rounded-full text-gray-600 shadow-sm">
            Leadership
          </span>

          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-snug">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              CEO
            </span>
          </h2>

          <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-gray-900">
            Kirtan Sahu
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            IIT Patna • IIM Ahmedabad • IIM Amritsar
          </p>

          {/* Quote Card */}
          <div className="mt-5 sm:mt-6 bg-white border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-md">
            <p className="text-red-500 font-semibold italic text-base sm:text-lg">
              “We don’t just teach—we transform.”
            </p>
          </div>

          <p className="mt-5 sm:mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
            With experience across finance and HR sectors and working with top
            companies like Upstox, Bajaj Finserv, and Motilal Oswal, our mission
            is to bridge the gap between academic learning and real corporate
            experience through practical internships.
          </p>

          {/* Divider */}
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mt-5 sm:mt-6 rounded-full mx-auto md:mx-0"></div>

          <div className="mt-4 sm:mt-5">
            <p className="text-gray-900 font-semibold">Kirtan Sahu</p>
            <p className="text-xs sm:text-sm text-gray-500">CEO – upDate</p>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}
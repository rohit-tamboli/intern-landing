import { motion } from "framer-motion";

export default function CEOSection() {

  const fadeLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 bg-white section-smooth">

      {/* ✅ Parent controls animation */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.15 }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
      >

        {/* IMAGE */}
        <motion.div
          variants={fadeLeft}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center relative"
        >
          {/* Glow Ring (lighter) */}
          <div className="absolute w-72 h-72 bg-red-100 rounded-full blur-xl opacity-30"></div>

          <img
            src="/ceo.png"
            alt="Kirtan Sahu"
            className="relative w-60 h-60 object-cover rounded-full 
                       border-4 border-red-500 shadow-xl 
                       hover:scale-105 transition duration-200"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          variants={fadeRight}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our <span className="text-red-500">CEO</span>
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-gray-900">
            Kirtan Sahu
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            IIT Patna • IIM Ahmedabad • IIM Amritsar
          </p>

          <p className="mt-4 text-red-500 font-semibold italic text-lg">
            “We don’t just teach—we transform.”
          </p>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            With experience across finance and HR sectors and working with top
            companies like Upstox, Bajaj Finserv, and Motilal Oswal, our mission
            is to bridge the gap between academic learning and real corporate
            experience through practical internships.
          </p>

          <div className="w-16 h-1 bg-red-500 mt-5 rounded-full"></div>

          <div className="mt-4">
            <p className="text-gray-900 font-semibold">Kirtan Sahu</p>
            <p className="text-sm text-gray-600">CEO – upDate</p>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}
import { motion } from "framer-motion";

export default function CEOSection() {
  // reusable animation
  const fadeLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  };

  return (
    <section className="py-20 bg-white section-smooth">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE */}
        <motion.div
          {...fadeLeft}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative"
        >
          {/* Glow Ring */}
          <div className="absolute w-72 h-72 bg-red-100 rounded-full blur-2xl opacity-40"></div>

          <img
            src="/ceo.png"
            alt="Kirtan Sahu"
            className="relative w-60 h-60 object-cover rounded-full 
                       border-4 border-red-500 shadow-xl 
                       hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div {...fadeRight} transition={{ duration: 0.6 }}>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our <span className="text-red-500">CEO</span>
          </h2>

          {/* Name */}
          <h3 className="mt-3 text-xl font-semibold text-gray-900">
            Kirtan Sahu
          </h3>

          {/* Credentials */}
          <p className="text-sm text-gray-600 mt-1">
            IIT Patna • IIM Ahmedabad • IIM Amritsar
          </p>

          {/* Quote */}
          <p className="mt-4 text-red-500 font-semibold italic text-lg">
            “We don’t just teach—we transform.”
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            With experience across finance and HR sectors and working with top
            companies like Upstox, Bajaj Finserv, and Motilal Oswal, our mission
            is to bridge the gap between academic learning and real corporate
            experience through practical internships.
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-red-500 mt-5 rounded-full"></div>

          {/* Signature */}
          <div className="mt-4">
            <p className="text-gray-900 font-semibold">Kirtan Sahu</p>
            <p className="text-sm text-gray-600">CEO – upDate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
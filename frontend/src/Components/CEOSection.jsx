import { motion } from "framer-motion";

export default function CEOSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/ceo.png"
            alt="Kirtan Sahu"
            className="w-60 h-60 object-cover rounded-full border-4 border-red-500 shadow-lg"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our <span className="text-red-500">CEO</span>
          </h2>

          {/* Name */}
          <h3 className="mt-3 text-xl font-semibold text-gray-900">
            Kirtan Sahu
          </h3>

          {/* Short Credentials */}
          <p className="text-sm text-gray-600 mt-1">
            IIT Patna • IIM Ahmedabad • IIM Amritsar
          </p>

          {/* Quote */}
          <p className="mt-4 text-red-500 font-semibold italic">
            “We don’t just teach—we transform.”
          </p>

          {/* Short Description */}
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            With experience across finance and HR sectors and working with top
            companies like Upstox, Bajaj Finserv, and Motilal Oswal, our mission
            is to bridge the gap between academic learning and real corporate
            experience through practical internships.
          </p>

          {/* Signature */}
          <div className="mt-5">
            <p className="text-gray-900 font-semibold">Kirtan Sahu</p>
            <p className="text-sm text-gray-600">CEO – upDate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

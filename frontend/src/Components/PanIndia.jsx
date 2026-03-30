import { motion } from "framer-motion";

export default function PanIndia() {

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">

      {/* ✅ Parent stagger */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.15 }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
      >

        {/* LEFT */}
        <motion.div className="space-y-4">

          <motion.h2
            variants={fadeUp}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              PAN-India Presence
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="mt-4 text-gray-600 leading-relaxed"
          >
            We are building a strong presence across India to create wider career
            opportunities for our learners. With connections in major metropolitan
            cities, industrial hubs, and emerging markets, we ensure localized
            hiring expertise with national-level placement support.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="text-gray-600 leading-relaxed"
          >
            Through our growing network, learners gain access to internship and
            job opportunities across India, making their career prospects stronger
            and more scalable.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="mt-6 flex gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-red-500">15+ States</h3>
              <p className="text-sm text-gray-600">Active Presence</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-500">50+ Cities</h3>
              <p className="text-sm text-gray-600">Hiring Network</p>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="flex justify-center"
        >
          <img
            src="/india-map.png"
            alt="PAN India Presence"
            className="w-full max-w-md object-contain"
          />
        </motion.div>

      </motion.div>

    </section>
  );
}
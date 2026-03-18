import { motion } from "framer-motion";

export default function PanIndia() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - TEXT */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              PAN-India Presence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-600 leading-relaxed"
          >
            We are building a strong presence across India to create wider career
            opportunities for our learners. With connections in major metropolitan
            cities, industrial hubs, and emerging markets, we ensure localized
            hiring expertise with national-level placement support.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 leading-relaxed"
          >
            Through our growing network, learners gain access to internship and
            job opportunities across India, making their career prospects stronger
            and more scalable.
          </motion.p>

          {/* Stats (optional but powerful) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex gap-8"
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

        </div>

        {/* RIGHT - MAP IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/india-map.png"  // 👈 replace with your image path
            alt="PAN India Presence"
            className="w-full max-w-md object-contain"
          />
        </motion.div>

      </div>

    </section>
  );
}
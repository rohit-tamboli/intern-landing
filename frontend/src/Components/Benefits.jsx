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

  return (
    <section className="py-16 bg-white overflow-hidden">
      
      {/* HEADING */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Internship <span className="text-red-500">Benefits</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Gain{" "}
          <span className="font-semibold text-gray-900">
            industry-recognized certifications
          </span>
          , corporate exposure and valuable career support designed to help
          students become{" "}
          <span className="font-semibold text-gray-900">
            job-ready professionals
          </span>
          .
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <div className="mt-6 grid gap-5 cursor-pointer">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <CheckCircle
                  className="text-red-500 flex-shrink-0"
                  size={20}
                />

                <span className="text-gray-700 text-sm font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            
            {/* Floating Image */}
            <motion.img
              src="/Corporate.png"
              alt="Internship Certificates and Welcome Kit"
              className="rounded-2xl w-full max-w-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Badge 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-5 bg-white shadow-lg px-4 py-2 rounded-lg text-sm font-semibold"
            >
              🎓 Certifications
            </motion.div>

            {/* Badge 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-2 right-5 bg-white shadow-lg px-4 py-2 rounded-lg text-sm font-semibold"
            >
              🎁 Welcome Kit
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
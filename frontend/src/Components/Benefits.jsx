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

  // ✅ smooth animation
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-white overflow-hidden section-smooth" id="benefits">
      
      {/* HEADING */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            ease: [0.25, 1, 0.5, 1]
          }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Internship <span className="text-red-500">Benefits</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20
          }}
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

      {/* CONTENT */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.12 }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        style={{ willChange: "transform, opacity" }}
      >

        {/* LEFT */}
        <motion.div className="grid gap-4">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20
              }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg 
                         border border-gray-100 shadow-sm hover:shadow-md 
                         transition"
            >
              <CheckCircle className="text-red-500 flex-shrink-0" size={20} />

              <span className="text-gray-700 text-sm md:text-base font-medium">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20
          }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Image */}
            <img
              src="/Corporate.png"
              alt="Internship Certificates and Welcome Kit"
              className="rounded-2xl w-full max-w-xl"
            />

            {/* Badge 1 */}
            <div className="absolute -top-4 -left-5 bg-white shadow-md px-4 py-2 rounded-lg text-sm font-semibold">
              🎓 Certifications
            </div>

            {/* Badge 2 */}
            <div className="absolute bottom-2 right-5 bg-white shadow-md px-4 py-2 rounded-lg text-sm font-semibold">
              🎁 Welcome Kit
            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
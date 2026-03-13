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
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Internship Benefits
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg">
            Gain <span className="font-semibold text-gray-900">industry-recognized certifications</span>,
            corporate exposure and valuable career support designed to help
            students become <span className="font-semibold text-gray-900">job-ready professionals</span>.
          </p>

          {/* Benefits List */}
          <div className="mt-10 grid sm:grid-cols-2 gap-5">

            {benefits.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100"
              >

                <CheckCircle className="text-red-500 flex-shrink-0" size={20} />

                <span className="text-gray-700 text-sm font-medium">
                  {item}
                </span>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >

          <div className="relative">

            <img
              src="/Corporate.png"
              alt="Internship Certificates and Welcome Kit"
              className="rounded-2xl w-full max-w-xl "
            />

            {/* floating badge */}
            <div className="absolute -top-5 -left-5 bg-white shadow-lg px-4 py-2 rounded-lg text-sm font-semibold">
              🎓 Certifications
            </div>

            <div className="absolute -bottom-5 -right-5 bg-white shadow-lg px-4 py-2 rounded-lg text-sm font-semibold">
              🎁 Welcome Kit
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
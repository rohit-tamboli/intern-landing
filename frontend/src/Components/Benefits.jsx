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

  // reusable animation
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <section className="py-16 bg-white overflow-hidden section-smooth" id="benefits">
      
      {/* HEADING */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Internship <span className="text-red-500">Benefits</span>
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2 }}
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

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div className="grid gap-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg 
                         border border-gray-100 shadow-sm hover:shadow-md 
                         transition duration-300 hover:scale-[1.02]"
            >
              <CheckCircle className="text-red-500 flex-shrink-0" size={20} />

              <span className="text-gray-700 text-sm md:text-base font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            
            {/* Floating Image (CSS instead of motion) */}
            <img
              src="/Corporate.png"
              alt="Internship Certificates and Welcome Kit"
              className="rounded-2xl w-full max-w-xl float-smooth"
            />

            {/* Badge 1 */}
            <div className="absolute -top-4 -left-5 bg-white shadow-lg px-4 py-2 rounded-lg text-sm font-semibold animate-fadeIn">
              🎓 Certifications
            </div>

            {/* Badge 2 */}
            <div className="absolute bottom-2 right-5 bg-white shadow-lg px-4 py-2 rounded-lg text-sm font-semibold animate-fadeIn delay-200">
              🎁 Welcome Kit
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
import { FileText, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Steps() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <FileText size={28} />,
      title: "Submit Application",
      desc: "Fill the application form and pay the ₹99 registration fee.",
    },
    {
      icon: <Users size={28} />,
      title: "Interview & Orientation",
      desc: "Attend a short interview and orientation session.",
    },
    {
      icon: <Rocket size={28} />,
      title: "Onboarding & Start Internship",
      desc: "Complete onboarding and begin your internship journey.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900"
        >
          How To <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Apply
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Follow these simple steps to start your corporate internship journey.
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200 origin-left"
          />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition group cursor-pointer"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-red-100 opacity-0 group-hover:opacity-20 blur-xl transition"></div>

                {/* Step circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.3, type: "spring" }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                >
                  {step.icon}
                </motion.div>

                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/signup")}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition text-lg mx-auto hidden md:flex cursor-pointer"
          >
            APPLY NOW
          </motion.button>
        </motion.div>

      </div>

      

    </section>
  );
}
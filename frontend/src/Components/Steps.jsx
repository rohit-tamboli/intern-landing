import { FileText, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Steps() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <FileText size={26} />,
      title: "Submit Application",
      desc: "Fill the application form and pay the ₹99 registration fee.",
    },
    {
      icon: <Users size={26} />,
      title: "Interview & Orientation",
      desc: "Attend a short interview and orientation session.",
    },
    {
      icon: <Rocket size={26} />,
      title: "Onboarding & Start Internship",
      desc: "Complete onboarding and begin your internship journey.",
    },
  ];

  // ✅ smooth animation
  const fadeUp = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden" id="steps">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="text-4xl font-bold text-gray-900"
        >
          How To{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Apply
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Follow these simple steps to start your corporate internship journey.
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* ✅ lighter line animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200 origin-left"
          />

          {/* ✅ Parent stagger */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.15 }}
            className="grid md:grid-cols-3 gap-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 18
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition group cursor-pointer"
                style={{ willChange: "transform" }}
              >
                {/* Glow (lighter) */}
                <div className="absolute inset-0 rounded-2xl bg-red-100 opacity-0 group-hover:opacity-10 blur-xl transition"></div>

                {/* Step circle (no separate animation ❌) */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
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
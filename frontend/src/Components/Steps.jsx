import { FileText, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Steps() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <FileText size={20} />,
      title: "Submit Application",
      desc: "Fill the application form and pay the ₹99 registration fee.",
    },
    {
      icon: <Users size={20} />,
      title: "Interview & Orientation",
      desc: "Attend a short interview and orientation session.",
    },
    {
      icon: <Rocket size={20} />,
      title: "Onboarding & Start Internship",
      desc: "Complete onboarding and begin your internship journey.",
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative font-mono py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" id="steps">

      {/* Glow */}
      <div className="absolute -top-20 left-5 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-5 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
        >
          How To{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
            Apply
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 sm:mt-5 text-gray-600 max-w-2xl mx-auto text-sm sm:text-lg"
        >
          Follow these simple steps to start your corporate internship journey.
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-10 sm:mt-16">

          {/* Desktop Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:block absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-red-200 via-gray-200 to-red-200 origin-left"
          />

          {/* Steps */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="relative bg-white p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all group"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                {/* Icon Circle */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-red-500 to-red-500 text-white flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>

                <div className="mt-8 sm:mt-10">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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
          transition={{ duration: 0.4 }}
          className="mt-10 sm:mt-14 md:mt-16"
        >
          <button
            onClick={() => navigate("/signup")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-500 text-white font-semibold shadow-[0_10px_30px_rgba(255,0,0,0.3)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(255,0,0,0.4)] transition-all"
          >
            Apply Now
          </button>
        </motion.div>

      </div>
    </section>
  );
}
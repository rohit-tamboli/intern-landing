import { Code, Megaphone, Briefcase, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {

  const skills = [
    {
      icon: <Code size={32} />,
      title: "IT & Technology",
      desc: "Web Development, AI, Data Analytics",
    },
    {
      icon: <Megaphone size={32} />,
      title: "Digital Marketing",
      desc: "SEO, Social Media, Content Creation",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Management",
      desc: "HR, Sales, Business Development",
    },
    {
      icon: <UserCheck size={32} />,
      title: "Career Skills",
      desc: "Resume Building, Interview Preparation",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          What You Will <span className="text-red-500">Learn</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Gain practical knowledge across multiple domains and build the
          skills required to succeed in real corporate environments.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-red-100 opacity-0 group-hover:opacity-20 blur-xl transition"></div>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="flex justify-center text-red-500 mb-5"
              >
                {skill.icon}
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900">
                {skill.title}
              </h3>

              <p className="text-gray-600 text-sm mt-3">
                {skill.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* Background Glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 right-0 w-72 h-72 bg-red-200 rounded-full blur-3xl"
      />

    </section>
  );
}
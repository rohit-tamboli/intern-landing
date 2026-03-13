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
    <section className="py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What You Will <span className="text-red-500">Learn</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Gain practical knowledge across multiple domains and build the
          skills required to succeed in real corporate environments.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-center text-red-500 mb-5">
                {skill.icon}
              </div>

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

    </section>
  );
}
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      img: "/Skill1.jpg",
      title: "IT & Technology",
      desc: "Web Development, AI & Data Analytics",
    },
    {
      img: "/Skill2.jpg",
      title: "Digital Marketing",
      desc: "SEO, Social Media, Content Creation",
    },
    {
      img: "/Skill3.jpg",
      title: "Management",
      desc: "HR, Sales, Business Development",
    },
    {
      img: "/Skill4.jpg",
      title: "Career Skills",
      desc: "Resume Building, Interview Preparation",
    },
  ];

  // same animation as Benefits
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <section className="py-20 bg-gray-50 section-smooth">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          What You Will{" "}
          <span className="text-red-500">Learn</span>
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Gain practical knowledge across multiple domains and build the skills
          required to succeed in real corporate environments.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ delay: index * 0.15 }}   // 👈 stagger effect
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                         transition group will-change-transform"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-full h-40 object-cover 
                             group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {skill.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
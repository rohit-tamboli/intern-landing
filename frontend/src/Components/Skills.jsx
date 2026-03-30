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

  // ✅ Smooth animation
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gray-50 section-smooth">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18
          }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          What You Will{" "}
          <span className="text-red-500">Learn</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18
          }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Gain practical knowledge across multiple domains and build the skills
          required to succeed in real corporate environments.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 18
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition group"
              style={{ willChange: "transform" }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-full h-40 object-cover 
                             group-hover:scale-105 transition duration-300"
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
        </motion.div>

      </div>
    </section>
  );
}
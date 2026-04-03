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

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative font-mono py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Background Glow */}
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
          What You Will{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
            Learn
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 sm:mt-5 text-gray-600 max-w-2xl mx-auto text-sm sm:text-lg"
        >
          Gain practical knowledge across multiple domains and build the skills
          required to succeed in real corporate environments.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 mt-10 sm:mt-14 md:mt-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all overflow-hidden"
            >

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-full h-36 sm:h-44 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {skill.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mt-2">
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
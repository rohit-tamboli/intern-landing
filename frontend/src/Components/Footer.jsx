import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "About Program", path: "#about" },
    { name: "Internship Benefits", path: "#benefits" },
    { name: "How to Apply", path: "#steps" },
    { name: "Apply Now", path: "/signup" },
  ];

  // ✅ smooth animation
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-6 overflow-hidden">

      {/* ✅ Parent stagger */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.15 }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >

        {/* ABOUT */}
        <motion.div
          variants={fadeUp}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <h3 className="text-xl font-semibold text-gray-900">
            upDate Internship Program
          </h3>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Industry-focused internship program designed to help students gain
            real corporate exposure and practical skills.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.linkedin.com/company/updateedu/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Linkedin className="text-gray-600 hover:text-red-500" />
            </a>

            <a
              href="https://www.instagram.com/update.hr?igsh=MW1ta3IzMnl5ZGMxZg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Instagram className="text-gray-600 hover:text-red-500" />
            </a>

            <a
              href="https://wa.me/8109718211"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaWhatsapp className="text-gray-600 hover:text-green-500 text-[25px]" />
            </a>
          </div>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          variants={fadeUp}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="md:pl-20"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Contact
          </h4>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2 hover:text-red-500 transition">
              <Phone size={16} /> +91 8109718211
            </p>

            <p className="flex items-center gap-2 hover:text-red-500 transition">
              <Mail size={16} /> internship@updats.in
            </p>

            <p className="flex items-center gap-2 hover:text-red-500 transition">
              <MapPin size={16} /> Raipur, Chhattisgarh
            </p>
          </div>
        </motion.div>

        {/* LINKS */}
        <motion.div
          variants={fadeUp}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="md:pl-20"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            {links.map((item, index) => (
              <li
                key={index}
                className="hover:text-red-500 hover:translate-x-1 transition cursor-pointer"
              >
                <a href={item.path} className="block">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

      </motion.div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className="border-t border-gray-200 mt-12 pt-6 md:mb-1 mb-17 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} upDate is a part of upDt Education Technology Private Limited All rights reserved.
      </motion.div>

    </footer>
  );
}
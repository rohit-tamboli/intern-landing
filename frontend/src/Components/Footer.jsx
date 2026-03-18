import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  MessageCircle,
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
  return (
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
            <motion.a
              href="https://www.linkedin.com/company/updateedu/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="cursor-pointer text-gray-600 hover:text-red-500" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/update.hr?igsh=MW1ta3IzMnl5ZGMxZg=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <Instagram className="cursor-pointer text-gray-600 hover:text-red-500" />
            </motion.a>

            <motion.a
              href="https://wa.me/8109718211" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaWhatsapp className="cursor-pointer text-gray-600 hover:text-green-500 text-2xl" />
            </motion.a>
          </div>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="md:pl-20"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>

          <div className="space-y-3 text-sm">
            <motion.p whileHover={{ x: 5 }} className="flex items-center gap-2 hover:text-red-500 transition">
              <Phone size={16} /> +91 8109718211
            </motion.p>

            <motion.p whileHover={{ x: 5 }} className="flex items-center gap-2 hover:text-red-500 transition">
              <Mail size={16} /> internship@updats.in
            </motion.p>

            <motion.p whileHover={{ x: 5 }} className="flex items-center gap-2 hover:text-red-500 transition">
              <MapPin size={16} /> Raipur, Chhattisgarh
            </motion.p>
          </div>
        </motion.div>

        {/* LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="md:pl-20"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            {links.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="hover:text-red-500 transition"
              >
                <a href={item.path} className="cursor-pointer block">
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-200 mt-12 pt-6 mb-17 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} upDate is a part of upDt Education Technology Private Limited All rights reserved.
      </motion.div>
    </footer>
  );
}

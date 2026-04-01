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

  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50 to-white text-gray-700 pt-16 sm:pt-20 pb-8 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-24 left-5 sm:left-10 w-60 sm:w-80 h-60 sm:h-80 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-5 sm:right-10 w-60 sm:w-80 h-60 sm:h-80 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              up<span className="text-red-500">Date</span>
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Building future-ready professionals with real corporate exposure.
            </p>

            {/* Social */}
            <div className="flex justify-center md:justify-start gap-3 mt-5">
              {[{
                icon: <Linkedin size={16} />,
                link: "#",
              },{
                icon: <Instagram size={16} />,
                link: "#",
              },{
                icon: <FaWhatsapp size={16} />,
                link: "#",
              }].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border shadow hover:scale-110 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {links.map((item, i) => (
                <li key={i}>
                  <a href={item.path} className="hover:text-red-500 transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>

            <div className="space-y-3 text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={14} className="text-red-500" />
                +91 8109718211
              </p>

              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={14} className="text-red-500" />
                internship@updats.in
              </p>

              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={14} className="text-red-500" />
                Raipur, India
              </p>
            </div>
          </div>

          {/* NEWSLETTER 🔥 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Stay Updated
            </h4>

            <p className="text-sm text-gray-600 mb-3">
              Get internship updates & offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg text-sm font-medium hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="font-medium text-gray-700">upDate</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
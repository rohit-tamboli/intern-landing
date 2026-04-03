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
      <div className="absolute -top-24 left-10 w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h2 className="font-display text-3xl font-bold text-white bg-red-500 px-1 py-0 inline-block tracking-tight shadow-sm">
              upDate
            </h2>

            <p className="mt-4 text-sm font-premium text-gray-600">
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
            <h4 className="font-mono text-xs tracking-widest text-gray-500 mb-4">
              QUICK LINKS
            </h4>

            <ul className="space-y-2 text-sm font-premium">
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
            <h4 className="font-mono text-xs tracking-widest text-gray-500 mb-4">
              CONTACT
            </h4>

            <div className="space-y-3 text-sm font-premium">
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

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-gray-500 mb-4">
              STAY UPDATED
            </h4>

            <p className="text-sm font-premium text-gray-600 mb-3">
              Get internship updates & offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-sm font-premium focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs sm:text-sm text-gray-500 font-premium">
          © {new Date().getFullYear()}{" "}
          <span className="font-display text-gray-800">upDate</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
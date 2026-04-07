import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, GraduationCap, Video } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative font-alt bg-white py-8 sm:py-14 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-60 sm:w-72 h-60 sm:h-72 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 -right-20 w-60 sm:w-72 h-60 sm:h-72 bg-red-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-block px-3 sm:px-4 py-1 text-xs bg-gray-100 border border-gray-200 rounded-full text-gray-600 shadow-sm">
            Registered Under DPIIT, Govt. of India
          </span>

          {/* Heading */}
      

          <div className="flex mt-6 bg-white">
            <div className="relative inline-block">
              <h1 className="md:text-5xl text-4xl sm:text-4xl font-bold text-red-500 pb-2 md:pb-3">
                Summer Internship
              </h1>

              {/* WAVE UNDERLINE */}
              <svg
                className="absolute left-0 -bottom-2 w-[310px] md:w-[410px] h-[20px]"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 10 Q40 0 80 10 T190 10 T240 10 T300 10"
                  fill="none"
                  stroke="red"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <h1 className="md:text-5xl text-4xl sm:text-4xl font-bold text-red-500 pt-1 md:pt-2">
            Training Program
          </h1>

          {/* Description */}
          <p className="font-alt mt-4 sm:mt-6 text-gray-900 text-base sm:text-lg max-w-lg">
            Work on real industry projects with expert mentorship,
            certifications, and job-ready skills.
          </p>

          {/* Price Card */}
          <div className="mt-5 sm:mt-6 bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition font-alt">
            <p className="font-mono text-sm text-gray-500">
              START TODAY FOR JUST
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mt-2">
              <span className=" font-mono text-3xl sm:text-4xl font-bold text-red-500">
                ₹99
              </span>
              <span className="line-through text-gray-400 text-sm sm:text-base">
                ₹299
              </span>
            </div>
            <p className="font-alt text-green-600 text-xs sm:text-sm mt-2 font-medium">
              100% Refundable • No Hidden Charges
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 font-alt">
            <button
              onClick={() => navigate("/signup")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-lg hover:shadow-red-300/40 hover:scale-[1.05] transition-all"
            >
              Book Your Slot Now
            </button>

            <button
              onClick={() => window.open("/Broshure.pdf", "_blank")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Download Brochure
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-5 font-alt"
        >
          {[
            {
              icon: <ShieldCheck size={18} className="text-red-500 " />,
              title: "Simple & Transparent Pricing",
              desc: "Only ₹99 booking fee. Fully refundable. No hidden charges.",
            },
            {
              icon: <GraduationCap size={18} className="text-red-500" />,
              title: "Certificate & Offer Letter",
              desc: "Get official certificate and internship offer letter.",
            },
            {
              icon: <Video size={18} className="text-red-500" />,
              title: "Live Interactive Classes",
              desc: "Learn via live sessions with real-time doubt solving.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all font-alt"
            >
              <h3 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                {item.icon} {item.title}
              </h3>
              <p className="font-alt text-xs sm:text-sm mt-2 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 text-center shadow-md hover:shadow-lg transition">
              <p className="font-mono text-xl sm:text-2xl font-bold">1,000+</p>
              <p className="font-mono text-xs sm:text-sm text-gray-500">
                Learners
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 text-center shadow-md hover:shadow-lg transition">
              <p className="font-mono text-xl sm:text-2xl font-bold">1000+</p>
              <p className="font-mono text-xs sm:text-sm text-gray-500">
                Students
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

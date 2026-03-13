import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Briefcase, Home, Award, Users } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Briefcase size={20} />,
      text: "45 Days Corporate Internship",
    },
    {
      icon: <Home size={20} />,
      text: "100% Work From Home",
    },
    {
      icon: <Award size={20} />,
      text: "₹10,000 Performance Bonus",
    },
  ];

  return (
    <section className="relative pb-15 pt-15 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-2 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <span className="inline-block px-4 py-1 text-sm font-semibold bg-white border border-red-200 text-red-600 rounded-full">
            Limited Seats • 2026 Batch
          </span>

          {/* Heading */}
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-black leading-tight">
            Start Your Career With a Real Corporate Internship
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-lg text-gray-600">
            Join our structured internship program designed for students and
            fresh graduates. Gain corporate exposure, certifications and real
            project experience.
          </p>

          {/* Features */}
          <div className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-700"
              >
                <span className="text-red-500">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("/phonepe")}
              className="px-5 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition text-lg"
            >
              APPLY NOW
            </button>

            <button className="px-5 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition">
              VIEW DETAILS
            </button>
          </div>

         
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex justify-center"
        >
          <img
            src="/internship.png"
            alt="Internship"
            className="w-full max-w-lg"
          />

          {/* Floating card 1 */}
          <div className="absolute top-30 left-0 bg-white shadow-lg rounded-xl px-4 py-3 text-sm">
            🎓 5+ Certifications
          </div>

          {/* Floating card 2 */}
          <div className="absolute bottom-12 right-20 bg-white shadow-lg rounded-xl px-4 py-3 text-sm">
            💰 ₹10,000 Bonus
          </div>

          {/* Floating card 3 */}
          <div className="absolute top-1/2 -right-8 bg-white shadow-lg rounded-xl px-4 py-3 text-sm flex items-center gap-2">
            <Users size={16} />
            5000+ Students
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
    <section className="bg-gray-50 py-10 md:py-12  overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT */}
        <div>

          <span className="inline-block px-4 py-1 text-sm font-semibold bg-white border border-red-200 text-red-600 rounded-full">
            Limited Seats • 2026 Batch
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Start Your Career With a Real Corporate Internship
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Join our structured internship program designed for students and
            fresh graduates. Gain corporate exposure, certifications and real
            project experience.
          </p>

          <div className="mt-5 space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <span className="text-red-500">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/phonepe")}
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition md:flex hidden"
            >
              APPLY NOW
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition">
              VIEW DETAILS
            </button>
          </div>

        </div>

        {/* RIGHT */}
        <div
          
          className="relative flex justify-center"
        >
          <img
            src="/internship.png"
            alt="Internship"
            className="w-full max-w-lg"
          />

          <div className="hidden md:block absolute top-24 left-0 bg-white shadow-lg rounded-xl px-4 py-3 text-sm">
            🎓 5+ Certifications
          </div>

          <div className="hidden md:block absolute bottom-12 right-10 bg-white shadow-lg rounded-xl px-4 py-3 text-sm">
            💰 ₹10,000 Bonus
          </div>

          <div className="hidden md:flex absolute top-1/2 -right-6 bg-white shadow-lg rounded-xl px-4 py-3 text-sm items-center gap-2">
            <Users size={16} />
            5000+ Students
          </div>
        </div>

      </div>
    </section>
  );
}
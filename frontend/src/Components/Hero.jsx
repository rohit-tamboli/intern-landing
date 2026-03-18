import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Briefcase, Home, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const navigate = useNavigate();

  const texts = [
    "Start Your Career With a Real Corporate Internship",
    "Gain Real Industry Experience",
    "Become a Job-Ready Professional",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    let speed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentText.length) {
          setIsDeleting(true);
          setTimeout(() => {}, 1000); // pause
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

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
    <section className="bg-gray-50 py-10 md:py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 text-sm font-semibold bg-white border border-red-200 text-red-600 rounded-full"
          >
            Limited Seats • 2026 Batch
          </motion.span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {displayText}
            <span className="text-red-500 animate-pulse">|</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-gray-600 text-lg"
          >
            Join our structured internship program designed for students and
            fresh graduates. Gain corporate exposure, certifications and real
            project experience.
          </motion.p>

          {/* Features */}
          <div className="mt-5 space-y-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="flex items-center gap-3 text-gray-700"
              >
                <span className="text-red-500">{feature.icon}</span>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/signup")}
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition md:flex hidden cursor-pointer"
            >
              APPLY NOW
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                // 1. Open in new tab
                window.open("/Broshure.pdf", "_blank");

                // 2. Trigger download
                const link = document.createElement("a");
                link.href = "/Broshure.pdf";
                link.download = "Internship_Details.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              VIEW DETAILS
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Floating Image */}
          <motion.img
            src="/internship.png"
            alt="Internship"
            className="w-full max-w-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="hidden md:block absolute top-24 left-0 bg-white shadow-lg rounded-xl px-4 py-3 text-sm"
          >
            🎓 5+ Certifications
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="hidden md:block absolute bottom-12 right-10 bg-white shadow-lg rounded-xl px-4 py-3 text-sm"
          >
            💰 ₹10,000 Bonus
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="hidden md:flex absolute top-1/2 -right-6 bg-white shadow-lg rounded-xl px-4 py-3 text-sm items-center gap-2"
          >
            <Users size={16} />
            5000+ Students
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

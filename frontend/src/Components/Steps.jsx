import { FileText, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Steps() {
    const navigate = useNavigate();
  const steps = [
    {
      icon: <FileText size={28} />,
      title: "Submit Application",
      desc: "Fill the application form and pay the ₹99 registration fee.",
    },
    {
      icon: <Users size={28} />,
      title: "Interview & Orientation",
      desc: "Attend a short interview and orientation session.",
    },
    {
      icon: <Rocket size={28} />,
      title: "Onboarding & Start Internship",
      desc: "Complete onboarding and begin your internship journey.",
    },
  ];

  return (
    <section className="py-15 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">How To Apply</h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Follow these simple steps to start your corporate internship journey.
        </p>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Line */}
          <div className="hidden md:block absolute top-25 left-0 right-0 h-1 bg-gray-200"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition"
              >
                {/* Step circle */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition text-lg md:flex mx-auto hidden"
          >
            APPLY NOW
          </button>
        </div>
      </div>
    </section>
  );
}

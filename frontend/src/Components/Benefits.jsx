import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    "Internship Offer Letter",
    "Internship Completion Certificate",
    "Letter of Recommendation",
    "Advanced Domain Certification",
    "NISM Certification",
    "Corporate Welcome Kit",
  ];

  return (
    <section className="py-15 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Internship <span className="text-red-500">Benefits</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Gain{" "}
          <span className="font-semibold text-gray-900">
            industry-recognized certifications
          </span>
          , corporate exposure and valuable career support designed to help
          students become{" "}
          <span className="font-semibold text-gray-900">
            job-ready professionals
          </span>
          .
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Benefits List */}
          <div className="mt-10 grid sm:grid-cols-1 gap-5">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100"
              >
                <CheckCircle className="text-red-500 flex-shrink-0" size={20} />

                <span className="text-gray-700 text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/Corporate.png"
              alt="Internship Certificates and Welcome Kit"
              className="rounded-2xl w-full max-w-xl "
            />

            {/* floating badge */}
            <div className="absolute -top-4 -left-5 bg-white shadow-lg px-4 py-2 rounded-lg text-sm font-semibold">
              🎓 Certifications
            </div>

            <div className="absolute bottom-2 right-5 bg-white shadow-lg px-4 py-2 rounded-lg text-sm font-semibold">
              🎁 Welcome Kit
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

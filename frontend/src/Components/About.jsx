import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Welcome to <span className="text-red-500">upDate</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          upDate is an industry-focused EdTech initiative led by IIT Alumni
          committed to transforming learners into corporate-ready professionals
          through practical learning and real-world experience.
        </p>
      </div>
    </section>
  );
}

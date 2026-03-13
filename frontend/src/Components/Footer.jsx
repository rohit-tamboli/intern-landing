import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] text-gray-700 pt-16 pb-6">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            upDate Internship Program
          </h3>

          <p className="mt-4 text-sm text-gray-600">
            Industry-focused internship program designed to help students
            gain real corporate exposure and practical skills.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Contact
          </h4>

          <div className="space-y-3 text-sm">

            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 8109718211
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} /> internship@updats.in
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={16} /> Raipur, Chhattisgarh
            </p>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-red-500 cursor-pointer transition">
              About Program
            </li>

            <li className="hover:text-red-500 cursor-pointer transition">
              Internship Benefits
            </li>

            <li className="hover:text-red-500 cursor-pointer transition">
              How to Apply
            </li>

            <li className="hover:text-red-500 cursor-pointer transition">
              Apply Now
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} upDate Internship Program. All rights reserved.
      </div>

    </footer>
  );
}
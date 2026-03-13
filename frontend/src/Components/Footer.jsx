import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-6">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            upDate Internship Program
          </h3>

          <p className="mt-4 text-sm text-gray-600">
            Industry-focused internship program designed to help students
            gain real corporate exposure and practical skills.
          </p>
        </div>

        <div className="md:pl-30 "> 
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

        <div className="md:pl-30">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-red-500 cursor-pointer">
              About Program
            </li>

            <li className="hover:text-red-500 cursor-pointer">
              Internship Benefits
            </li>

            <li className="hover:text-red-500 cursor-pointer">
              How to Apply
            </li>

            <li className="hover:text-red-500 cursor-pointer">
              Apply Now
            </li>

          </ul>
        </div>

      </div>

      <div className="border-t pb-20 border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} upDate Internship Program. All rights reserved.
      </div>

    </footer>
  );
}
import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AUTH_AP = import.meta.env.VITE_AUTH_API || "http://localhost:5000";

const Form = () => {
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [whatsappChannel, setWhatsappChannel] = useState("");
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");
  const [study, setStudy] = useState("");

  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (
      !role ||
      !fullName ||
      !email ||
      !phone ||
      !address ||
      !department ||
      !college ||
      !study
    ) {
      setStatus("error");
      setMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(`${AUTH_AP}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          role,
          address,
          whatsappChannel,
          department,
          college,
          study,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Account created successfully!");

        setTimeout(() => {
          navigate("/phonepe", {
            state: {
              fullName,
              email,
              phone,
              address,
              whatsappChannel,
              department,
              college,
              study,
              role,
            },
          });
        }, 1200);
      } else {
        setStatus("error");
        setMessage(data.error || "Registration failed");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Server error. Try again.");
    }
  };

  return (
    <>
      {/* Header */}
      <div className="bg-[#F1F1F1] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 flex items-center justify-center gap-4">
          {/* Left Side Logo */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex-shrink-0"
          >
            <h1 className="text-lg sm:text-xl md:text-3xl bg-red-600 text-white font-bold px-1 tracking-tight">
              upDate
            </h1>
          </div>

          {/* Right Side Content */}
          <div className="text-left max-w-[75%] sm:max-w-full">
            <p className="text-base sm:text-sm md:text-xl font-semibold text-gray-900 leading-tight">
              Artificial Intelligence and Machine Learning Certification Program
            </p>
            <p className="text-[15px] sm:text-xs md:text-xl text-gray-600 mt-1">
              From <span className="font-semibold text-red-500">upDate</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50 px-4 py-12">
        <div className="w-full max-w-xl bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-red-500 text-center mb-0">
            Application Form  
          </h2>
          <p className="text-sm md:text-base  text-gray-500 text-center mb-8">
            Corporate Internship Program
            
          </p>

          <form onSubmit={handleRegistration} className="space-y-5">
            {/* Status Messages */}
            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-xl flex gap-2 text-sm">
                <CheckCircle2 size={18} />
                {message}
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl flex gap-2 text-sm">
                <AlertCircle size={18} />
                {message}
              </div>
            )}

            {/* Inputs */}
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none transition"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Mobile Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none transition"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Full Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full address"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Official WhatsApp Channel <a
              href="https://whatsapp.com/channel/YOUR_CHANNEL_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-700  underline mb-3 block"
            >
              Link (Click Now)
            </a>
            </label>

            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
  focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none"
              value={whatsappChannel}
              onChange={(e) => setWhatsappChannel(e.target.value)}
            >
              <option value="">Select Option</option>
              <option value="yes">Yes Joined</option>
              <option value="no">No Joined</option>
            </select>

      

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Which Department are you interested in Internship? (1st
              Preference)
              <span className="text-red-600"> *</span>
            </label>

            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              <option value="AI ML">AI / ML</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              College / University Name <span className="text-red-600">*</span>
            </label>

            <input
              type="text"
              placeholder="College / University Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Study In <span className="text-red-600">*</span>
            </label>

            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none"
              value={study}
              onChange={(e) => setStudy(e.target.value)}
            >
              <option value="">Select Course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BSc">BSc</option>
              <option value="Other">Other</option>
            </select>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                What describes you best <span className="text-red-600">*</span>
              </label>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "student", label: "Student" },
                  { value: "working", label: "Working Professional" },
                ].map((item) => (
                  <label
                    key={item.value}
                    className={`flex items-center justify-center md:p-3 p-2  border rounded-xl cursor-pointer transition-all text-center ${
                      role === item.value
                        ? "border-red-500 bg-red-50 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={item.value}
                      checked={role === item.value}
                      onChange={(e) => setRole(e.target.value)}
                      className="hidden"
                    />

                    <span
                      className={`text-sm font-medium ${
                        role === item.value ? "text-red-700" : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full py-3 rounded-xl text-white transition-all flex justify-center font-bold items-center gap-2 ${
                status === "loading"
                  ? "bg-red-400 cursor-not-allowed"
                  : "bg-red-300 hover:bg-red-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Processing...
                </>
              ) : (
                "SUBMIT"
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-xs text-center text-gray-400 mt-6">
            By submitting this form, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;

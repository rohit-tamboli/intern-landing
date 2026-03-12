import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/update.png" alt="MCA Logo" className="h-8" />
          <img src="/MCA.png" alt="MCA Logo" className="h-9" />
          <img src="/MSME.png" alt="MSME Logo" className="h-9" />
          <img src="/DPIIT.png" alt="DPIIT Logo" className="h-9" />
          <img src="/ISO.png" alt="ISO Logo" className="h-9" />
        </div>
        <button
          onClick={() => navigate("/phonepe")}
          className="bg-red-500 font-bold text-white px-5 py-2 rounded-lg shadow hover:bg-red-600"
        >
            APPLY NOW
        </button>
      </div>
    </nav>
  );
}

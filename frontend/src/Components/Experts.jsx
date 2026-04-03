import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ExpertsSlider() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const experts = [
    { name: "B K Unhelkar", role: "Ex-CEO at LIC", img: "/Ex1.png" },
    { name: "Shraddha Palekar", role: "Ex-J.P. Morgan", img: "/Ex2.png" },
    { name: "Albin Benny", role: "Ex-McKinsey & Company", img: "/Ex3.png" },
    { name: "Neal Vryan C. Versales", role: "Global IT Professional", img: "/Ex5.png" },
    { name: "Tapas Sarkar", role: "Ex-NITTTR", img: "/Ex4.png" },
    { name: "Biplab Maity", role: "Ex-Vodafone Idea", img: "/Ex6.png" },
    { name: "Arun Sahu", role: "Ex-HMEL | HPCL | Adani Group", img: "/Ex7.png" },
    { name: "Stuti Nayak Panda", role: "Women Entrepreneur", img: "/Ex8.png" },
    { name: "Dr. Namburi L A Amarababu", role: "Ex-Cipla | Dr. Reddy's", img: "/Ex9.png" },
    { name: "Dr. Reetha Dinesh", role: "Ex-Corporate Trainer", img: "/Ex10.png" },
  ];

  const loopExperts = [...experts, ...experts];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    let lastTime = 0;
    const speed = 0.12; // slower for mobile smoothness

    const scroll = (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        slider.scrollLeft += speed * delta;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft -= slider.scrollWidth / 2;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="relative font-mono py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 left-5 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-5 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
            Experts
          </span>
        </h2>

        <p className="mt-3 sm:mt-5 text-gray-600 max-w-xl mx-auto text-sm sm:text-lg">
          Our experts bring real-world experience and industry knowledge to guide your success.
        </p>

        {/* Slider */}
        <div
          className="relative mt-10 sm:mt-14 md:mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Buttons (hidden on mobile) */}
          <button
            onClick={slideLeft}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 shadow-lg p-2 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={slideRight}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 shadow-lg p-2 rounded-full hover:scale-110 transition"
          >
            <ChevronRight />
          </button>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 w-10 sm:w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-10 sm:w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar py-4"
          >
            {loopExperts.map((expert, index) => (
              <div
                key={index}
                className="group min-w-[160px] sm:min-w-[200px] md:min-w-[220px] bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                {/* Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-red-200 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition"></div>

                  <img
                    src={expert.img}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-full border-[3px] sm:border-[4px] border-white shadow-lg object-cover"
                    alt=""
                  />
                </div>

                {/* Content */}
                <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-gray-900">
                  {expert.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {expert.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
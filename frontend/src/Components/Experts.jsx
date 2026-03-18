import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ExpertsSlider() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const experts = [
    { name: "B K Unhelkar", role: "Finance Expert", img: "/Ex1.png" },
    { name: "Arun Sahu", role: "Ex-Adani", img: "/Ex2.png" },
    { name: "Shraddha", role: "HR Leader", img: "/Ex3.png" },
    { name: "Dr. Amar", role: "Cipla", img: "/Ex4.png" },
    { name: "Albin", role: "BCG", img: "/Ex5.png" },
  ];

  const loopExperts = [...experts, ...experts];

  // AUTO SCROLL (smooth)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;

    const scroll = () => {
      if (!isPaused) {
        slider.scrollLeft += 0.5;

        // infinite loop reset
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  // BUTTONS
  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="pb-16 pt-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Experts
          </span>
        </h2>

        {/* Slider Container */}
        <div
          className="relative mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Buttons */}
          <button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full"
          >
            <ChevronRight />
          </button>

          {/* Fade */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {loopExperts.map((expert, index) => (
              <div
                key={index}
                className="min-w-[220px] h-[240px] bg-white rounded-2xl p-6 text-center cursor-pointer"
              >
                <img
                  src={expert.img}
                  className="w-32 h-32 mx-auto rounded-full border-4 border-red-500 mb-4"
                  alt=""
                />

                <h3 className="font-semibold">{expert.name}</h3>
                <p className="text-sm text-gray-600">{expert.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

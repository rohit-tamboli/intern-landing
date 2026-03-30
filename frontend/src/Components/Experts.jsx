import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ExpertsSlider() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const experts = [
    { name: "B K Unhelkar", role: "Ex-CEO at LIC", img: "/Ex1.png" },
    { name: "Shraddha Palekar", role: "Ex-J.P. Morgan", img: "/Ex2.png" },
    { name: "Albin Benny", role: "Ex-McKinsey & Company", img: "/Ex3.png" },
    {
      name: "Neal Vryan C. Versales",
      role: "Global IT Professional",
      img: "/Ex5.png",
    },
    { name: "Tapas Sarkar", role: "Ex-NITTTR", img: "/Ex4.png" },

    { name: "Biplab Maity", role: "Ex-Vodafone Idea", img: "/Ex6.png" },
    { name: "Arun Sahu", role: "Ex-HMEL | HPCL | Adani Group", img: "/Ex7.png" },
    { name: "Stuti Nayak Panda", role: "Women Entrepreneur", img: "/Ex8.png" },
    { name: "Dr. Namburi L A Amarababu", role: "Ex-Cipla | Dr. Reddy's", img: "/Ex9.png" },
    { name: "Dr. Reetha Dinesh", role: "Ex-Corporate Trainer", img: "/Ex10.png" },
  ];

  const loopExperts = [...experts, ...experts];

  // AUTO SCROLL (smooth)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    let lastTime = 0;

    const speed = 0.15; // control speed (smooth)

    const scroll = (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        slider.scrollLeft += speed * delta;

        // smooth reset (no jump)
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft -= slider.scrollWidth / 2;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

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
    <section className="pb-16 pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Experts
          </span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Our experts bring real-world experience and industry knowledge to guide success.
        </p>

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
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
 
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto no-scrollbar slider-smooth"
          >
            {loopExperts.map((expert, index) => (
              <div
                key={index}
                className="min-w-[220px] h-[260px] bg-white rounded-2xl p-6 text-center cursor-pointer"
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

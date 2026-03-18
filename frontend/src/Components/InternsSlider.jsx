import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InSlider() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const In = [
    {
      name: "Rahul Sharma",
      role: "Placed at TCS",
      desc: "₹4.5 LPA",
      img: "/In1.png",
    },
    {
      name: "Priya Verma",
      role: "Intern at Wipro",
      desc: "Web Development",
      img: "/In2.png",
    },
    {
      name: "Amit Patel",
      role: "Placed at Infosys",
      desc: "₹6 LPA",
      img: "/In3.png",
    },
    {
      name: "Sneha Singh",
      role: "Intern at Deloitte",
      desc: "Digital Marketing",
      img: "/In4.png",
    },
    {
      name: "Rohit Gupta",
      role: "Placed at HCL",
      desc: "₹5 LPA",
      img: "/In5.png",
    },
  ];

  const loopIn = [...In, ...In];

  // AUTO SCROLL
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let frame;

    const scroll = () => {
      if (!isPaused) {
        slider.scrollLeft += 0.5;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  // BUTTONS
  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Interns
          </span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Our students are successfully placed in top companies and gaining real
          corporate experience.
        </p>

        {/* Slider */}
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

          {/* Track */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {loopIn.map((intern, index) => (
              <div
                key={index}
                className="min-w-[220px] h-[240px] bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition flex flex-col justify-between text-center"
              >
                {/* Image */}
                <img
                  src={intern.img}
                  alt={intern.name}
                  className="w-32 h-32 mx-auto rounded-full border-4 border-red-500 object-cover"
                />

                {/* Content */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {intern.name}
                  </h3>

                  <p className="text-xs text-red-500 font-medium">
                    {intern.role}
                  </p>

                  <p className="text-xs text-gray-600 mt-1">{intern.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

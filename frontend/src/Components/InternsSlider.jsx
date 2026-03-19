import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InSlider() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const In = [
    {
      name: "Suraj Tiwari",
      role: "Placed at Wipro",
      desc: "₹4.5 LPA",
      img: "/In1.png",
    },
    {
      name: "Manya M",
      role: "Placed at Cognizant",
      desc: "Web Development",
      img: "/In2.png",
    },
    {
      name: "Ananya Sindhe",
      role: "Placed at Flipkart",
      desc: "₹6 LPA",
      img: "/In3.png",
    },
    {
      name: "Praveen Tomar",
      role: "Placed at  Maruti Suzuti",
      desc: "Digital Marketing",
      img: "/In4.png",
    },
    {
      name: "Rahul Lodhi",
      role: "Placed at ITC Limited",
      desc: "₹5 LPA",
      img: "/In5.png",
    },
  ];

  const loopIn = [...In, ...In];

  // AUTO SCROLL
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
            className="flex gap-8 overflow-x-auto no-scrollbar slider-smooth"
          >
            {loopIn.map((intern, index) => (
              <div
                key={index}
                className="min-w-[220px] h-[240px] bg-white rounded-2xl p-5 shadow-sm hover:shadow transition flex flex-col gap-5 text-center cursor-pointer "
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

                  {/* <p className="text-xs text-gray-600 mt-1">{intern.desc}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InSlider() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const In = [
    { name: "Suraj Tiwari", role: "Placed at Wipro", desc: "₹4.5 LPA", img: "/In1.png" },
    { name: "Manya M", role: "Placed at Cognizant", desc: "Web Development", img: "/In2.png" },
    { name: "Ananya Sindhe", role: "Placed at Flipkart", desc: "₹6 LPA", img: "/In3.png" },
    { name: "Praveen Tomar", role: "Placed at Maruti Suzuki", desc: "Digital Marketing", img: "/In4.png" },
    { name: "Rahul Lodhi", role: "Placed at ITC Limited", desc: "₹5 LPA", img: "/In5.png" },
    { name: "Praveen Parashar", role: "Placed at HYUNDAI", desc: "₹5 LPA", img: "/In6.png" },
    { name: "Sinana K", role: "Placed at Infosys", desc: "₹5 LPA", img: "/In7.png" },
    { name: "Sameer Khan", role: "Placed at PARLE", desc: "₹5 LPA", img: "/In8.png" },
    { name: "Amit Kumar Mahato", role: "Placed at upDate", desc: "₹5 LPA", img: "/In9.png" },
    { name: "Mayur Digambar", role: "Placed at AlignerAi", desc: "₹5 LPA", img: "/In10.png" },
    { name: "Sandhya Pal", role: "Placed at UCO BANK", desc: "₹5 LPA", img: "/In11.png" },
    { name: "Sanjana Bhanajdeo", role: "Placed at UCO BANK", desc: "₹5 LPA", img: "/In12.png" },
  ];

  const loopIn = [...In, ...In];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    let lastTime = 0;
    const speed = 0.12; // smoother mobile speed

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
    sliderRef.current.scrollBy({ left: -220, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <section className="relative font-alt py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 left-5 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-5 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 font-mono">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
            Interns
          </span>
        </h2>

        <p className="mt-3 sm:mt-5 text-gray-600 max-w-xl mx-auto text-sm sm:text-lg">
          Our students are successfully placed in top companies and gaining real
          corporate experience.
        </p>

        {/* Slider */}
        <div
          className="relative mt-10 sm:mt-14 md:mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Buttons (hide on mobile) */}
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

          {/* Fade */}
          <div className="absolute left-0 top-0 w-10 sm:w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-10 sm:w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Track */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar py-4"
          >
            {loopIn.map((intern, index) => (
              <div
                key={index}
                className="group min-w-[150px] sm:min-w-[190px] md:min-w-[220px] bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                {/* Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-orange-200 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition"></div>

                  <img
                    src={intern.img}
                    alt={intern.name}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-full border-[3px] sm:border-[4px] border-white shadow-lg object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-gray-900">
                  {intern.name}
                </h3>

                <p className="text-xs sm:text-sm text-red-500 font-medium mt-1">
                  {intern.role}
                </p>

                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  {intern.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
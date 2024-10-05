"use client";
import { useState, useEffect } from "react";
import { Spinner4 } from "./spinnerButton";

const Carousel = ({ slides, loading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoSlideInterval = 4000; // Auto slide interval in milliseconds

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentSlide]); // Adding currentSlide as a dependency to rerun the effect on state change

  return (
    <div
      id="default-carousel"
      className="relative w-full max-w-[100%] lg:max-w-[80%] mx-auto aspect-[5/2] rounded-lg"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg min-h-full h-full">
        {loading ? <Spinner4 /> : slides?.map((slide, index) => (
          
          <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex rounded-lg bg-black/50 border border-white p-1 -translate-x-1/2 bottom-1 md:bottom-5 left-1/2 space-x-2 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`rounded-lg ${
              currentSlide === index
                ? "bg-white w-5 h-2"
                : "bg-gray-300 w-2 h-2"
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-2 lg:left-5 z-30 flex items-center justify-center h-full px-2 lg:px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center border-2 border-black/40 w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-black/30 group-hover:bg-black/75 lg:group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-3 h-3 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-2 lg:right-5 z-30 flex items-center justify-center h-full px-2 lg:px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center border-2 border-black/40 w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-black/30 group-hover:bg-black/75 lg:group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-3 h-3 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;

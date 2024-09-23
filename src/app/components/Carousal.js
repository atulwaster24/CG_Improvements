"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = ({slides}) => {
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
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative border-2 border-green-200 size-full rounded-lg"
      data-carousel="slide"
    >
      <div className="relative mx-auto size-full border border-red-200 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute border-2 border-blue-800 lg:mx-auto w-full p-4 h-min inset-0 duration-700 ease-in-out transform ${
              currentSlide === index ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <Image
              src={slide.path}
              height={0}
              width={1440}
              className="absolute w-3/6 h-auto inset-0 rounded-lg"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex rounded-lg bg-black/50 border border-white p-1 -translate-x-1/2 bottom-5 left-1/2 space-x-2 rtl:space-x-reverse">
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
        className="absolute top-0 left-0 lg:left-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center border-2 border-black/40 w-7 h-7 rounded-full bg-black/30  group-hover:bg-black/75 lg:group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-3 h-3  text-white rtl:rotate-180"
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
        className="absolute top-0 right-0 lg:right-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center border-2 border-black/40  w-7 h-7 rounded-full bg-black/30  group-hover:bg-black/75 text-white lg:group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-3 h-3  text-white rtl:rotate-180"
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

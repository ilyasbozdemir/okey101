"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { getDeviceTypeCookie, setDeviceTypeCookie } from "../../../utils/cookieUtils";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [deviceType, setDeviceType] = useState('desktop');
  const sliderRef = useRef(null);
  const startX = useRef(null);
  const endX = useRef(null);
  const intervalRef = useRef(null);

  const sizes = {
    mobile: {
      width: 400,
      height: 250,
    },
    tablet: {
      width: 1024,
      height: 300,
    },
    desktop: {
      width: 1920,
      height: 490,
    },
  };

  const slideData = [
    { color: "eb7610", text: "Rich Soul Collection 1" },
    { color: "eba910", text: "Rich Soul Collection 2" },
    { color: "eb6010", text: "Rich Soul Collection 3" },
    { color: "3fbd39", text: "Rich Soul Collection 4" },
    { color: "397fbd", text: "Rich Soul Collection 5" },
  ];

  const slides = slideData.map((slide) => {
    const size = sizes[deviceType];
    return `https://placehold.co/${size.width}x${size.height}/${slide.color}/ddd/png?text=${slide.text}&font=roboto`;
  });

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 2500);
  }, []);

  const clearAndRestartInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    startInterval();
  }, [startInterval]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    clearAndRestartInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    clearAndRestartInterval();
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current && endX.current) {
      if (startX.current - endX.current > 50) {
        nextSlide();
      } else if (endX.current - startX.current > 50) {
        prevSlide();
      }
    }
    startX.current = null;
    endX.current = null;
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setDeviceTypeCookie(width);
      setDeviceType(getDeviceTypeCookie());
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  return (
    <article
      className="relative w-full"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "" : "hidden"
            } duration-200 ease-linear`}
          >
            <Image
              src={slide}
              width={sizes[deviceType].width}
              height={sizes[deviceType].height}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
              placeholder="blur"
              blurDataURL={slide}
              quality={85}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {/* Previous button */}
      {deviceType !== 'mobile' && (
        <button
          type="button"
          className="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
      )}
      {/* Next button */}
      {deviceType !== 'mobile' && (
        <button
          type="button"
          className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
      )}
    </article>
  );
};

export default Slider;

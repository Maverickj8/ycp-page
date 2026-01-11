"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - replace with actual images
  const slides = [
    {
      image: "/images/hero/hero2.jpeg",
      alt: "YCP Community",
      overlay: true,
    },
    {
      image: "/images/hero/hero1.jpeg",
      alt: "St. Augustine",
      overlay: true,
    },
    {
      image: "/images/hero/hero3.jpeg",
      alt: "YCP Activities",
      overlay: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Placeholder background - Replace with actual images */}
            <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 flex items-center justify-center before:absolute before:inset-0 before:bg-black/50 before:z-10">
              <Image
                src={slide.image}
                fill
                style={{ objectFit: "cover" }}
                alt={slide.alt}
              />
            </div>

            {/* Overlay */}
            {slide.overlay && (
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            )}
          </div>
        ))}
      </div>

      {/* Logo and Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          {/* YCP Logo Placeholder */}
          <div className="mb-6">
            <div className="inline-block bg-white bg-opacity-90 rounded-full p-2 shadow-lg">
              <Image
                src={"/images/logo/logo.png"}
                width={70}
                height={70}
                className="rounded-full"
                alt={"logo"}
              />
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Young Catholic Professionals
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto drop-shadow-md">
            Building a strong community of faith, excellence, and service
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Premium Tile Collection",
    desc: "Discover modern flooring solutions for your home",
    image: "/1.jpg",
  },
  {
    title: "Luxury Interior Design",
    desc: "Elegant styles for modern living spaces",
    image: "/2.jpg",
  },
  {
    title: "Quality & Durability",
    desc: "Built to last with premium materials",
    image: "/3.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-gray-200">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
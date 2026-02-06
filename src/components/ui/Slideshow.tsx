"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt?: string;
  href?: string;
};

export default function Slideshow({ slides, interval = 5000 }: { slides: Slide[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (slides.length <= 1) return;
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [slides.length, interval]);

  function go(i: number) {
    setIndex((prev) => {
      if (i < 0) return slides.length - 1;
      if (i >= slides.length) return 0;
      return i;
    });
  }

  return (
    <section ref={containerRef} className="relative overflow-hidden" aria-label="Homepage slideshow">
      <div className="relative h-[420px] md:h-[520px]">
        {slides.map((s, i) => (
          <a
            key={i}
            href={s.href ?? "#"}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
            aria-hidden={i === index ? "false" : "true"}
          >
            <Image
              src={s.src}
              alt={s.alt ?? "slide"}
              fill
              sizes="100vw"
              className="object-cover w-full h-full"
              priority={i === 0}
            />
          </a>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 top-4 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={() => go(index - 1)}
          className="pointer-events-auto bg-white/90 hover:bg-white text-primaryBrand rounded-full p-2 shadow"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => go(index + 1)}
          className="pointer-events-auto bg-white/90 hover:bg-white text-primaryBrand rounded-full p-2 shadow"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-primaryBrand" : "bg-white/80"}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  );
}

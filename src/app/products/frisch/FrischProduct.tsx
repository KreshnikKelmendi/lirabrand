"use client";

import Image from "next/image";

export default function FrischProduct() {
  const images = [
    "/assets/frisch/1.png       ",
    "/assets/frisch/2.png",
    "/assets/frisch/3.png",
    "/assets/frisch/4.png",
    "/assets/frisch/5.png",
    "/assets/frisch/6.png",
    "/assets/frisch/7.png",
    "/assets/frisch/8.png",
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-8">
      <span className="text-2xl font-lemonmilk-regular text-black pt-10">
        Produktet
        <div className="flex justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-red-700 animate-bounce w-10 h-10"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </span>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden transition-shadow duration-300 h-56 sm:h-64 lg:h-72"
          >
            <Image
              src={src}
              alt={`Frisch product image ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


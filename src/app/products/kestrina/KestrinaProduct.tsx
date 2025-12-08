"use client";

import Image from "next/image";

export default function KestrinaProduct() {
  const images = [
    "/assets/kestrina-1.png",
    "/assets/kestrina 2.png",
    "/assets/kestrina 3.png",
    "/assets/kestrina 4.png",
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-8">
        <span className="text-2xl font-lemonmilk-regular text-black pt-10">Produktet
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
       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl w-full px-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden  transition-shadow duration-300 h-56 sm:h-64 lg:h-72"
          >
            <Image
              src={src}
              alt={`Product image ${index + 1}`}
              fill
              // The user asked for object-contain, not cover
              style={{ objectFit: "contain" }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Brendet() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imagesRef, imagesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const brands = [
    {
      id: 1,
      image: "/assets/lira logo.png",
      alt: "Brand 1",
      link: "/products/lira-brand",
    },
    {
      id: 2,
      image: "/assets/kestrina logo.png",
      alt: "Brand 2",
      link: "/products/kestrina",
    },
    {
      id: 3,
      image: "/assets/natural logo.png",
      alt: "Brand 3",
      link: "/products/natural",
    },
    {
      id: 4,
      image: "/assets/frisch logo.png",
      alt: "Brand 4",
      link: "/products/frisch",
    },
  ];

  const title = "Brendet";

  const titleVariants = {
    hidden: {
      clipPath: "inset(0 100% 0 0)",
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 1.5,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full py-12 lg:py-20">
      <div className="mx-auto px-5 lg:px-16">
        {/* Title - Centered */}
        <div className="text-center mb-2 lg:mb-12" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lemonmilk text-black inline-block relative overflow-hidden">
            <motion.span
              variants={titleVariants}
              initial="hidden"
              animate={titleInView ? "visible" : "hidden"}
              className="inline-block"
            >
              {title}
            </motion.span>
          </h2>
          <div className="flex justify-center mt-4">
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
        </div>

        {/* Brands Grid */}
        <motion.div
          ref={imagesRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={imagesInView ? "visible" : "hidden"}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              className="relative w-full aspect-square overflow-hidden rounded-4xl group cursor-pointer"
              variants={itemVariants}
            >
              <Link href={brand.link} className="block w-full h-full">
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  fill
                  className="object-cover bg-[#f8e4d1]/50 transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs lg:text-sm font-lemonmilk tracking-wide px-4 py-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Shiko produktet tona
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
      },
    },
  };

  return (
    <section className="relative w-full  overflow-visible py-16 sm:py-24 lg:py-32 px-4 lg:px-16">
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-16" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative w-full mx-auto"
        >
          {/* Top-left circular image */}
          <motion.div
            variants={imageVariants}
            className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 -translate-x-1/4 -translate-y-1/4 z-10"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/main-5.png"
                alt="Lira Brand Çaj"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, (max-width: 1024px) 256px, 384px"
              />
            </div>
          </motion.div>

          {/* Bottom-right circular image */}
          <motion.div
            variants={imageVariants}
            className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 translate-x-1/4 translate-y-1/4 sm:translate-x-1/4 sm:translate-y-1/4 z-10"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/470691922_18365246707184030_5640793309400524623_n.jpg"
                alt="Lira Brand Çaj"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, (max-width: 1024px) 256px, 384px"
              />
            </div>
          </motion.div>

          {/* Central white circle with content */}
          <motion.div
            variants={circleVariants}
            className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl aspect-square rounded-full bg-white shadow-2xl flex items-center justify-center p-4 sm:p-5 md:p-6 lg:p-10 xl:p-12 z-20"
            style={{
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* Subtle gradient glow effect */}
            <div className="absolute inset-0 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle at center, rgba(139, 69, 19, 0.1) 0%, transparent 70%)",
              }}
            ></div>

            <div className="relative z-10 text-center w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
              <motion.h2
                variants={textVariants}
                className="text-4xl lg:text-5xl xl:text-6xl font-foregen mb-2 sm:mb-3 lg:mb-4"
                style={{ color: "#8B4513" }}
              >
                LIRA BRAND
              </motion.h2>
              
              <motion.p
                variants={textVariants}
                className="text-sm md:text-base lg:text-lg xl:text-xl font-armin leading-tight px-2 sm:px-3 lg:px-4"
                style={{ color: "#1e3a5f" }}
              >
                Lira Brand është një markë që përfaqëson traditën e çajit shqiptar dhe cilësinë e lartë. Çdo përzierje përgatitet me përkushtim për të sjellë shijen autentike që flet vetë për historinë dhe pasionin pas secilit produkt.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


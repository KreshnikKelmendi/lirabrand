"use client";

import { useEffect } from "react";
import PureSection from "@/app/components/about/PureSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SecondQuality from "../components/quality/SecondQuality";
import RevealBento from "@/app/components/about/RevealBento";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <PureSection />
      
      {/* Centered text section below */}
      <section className="w-full px-5 lg:px-16">
        <div className="max-w-4xl mx-auto" ref={textRef}>
          <motion.div
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center"
          >
            <motion.p
              variants={textVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-armin text-gray-700 leading-relaxed mb-6"
            >
              Lira Brand është një markë që përfaqëson traditën e çajit shqiptar dhe cilësinë e lartë. 
              Çdo përzierje përgatitet me përkushtim për të sjellë shijen autentike që flet vetë për 
              historinë dhe pasionin pas secilit produkt.
            </motion.p>
            <motion.p
              variants={textVariants}
              className="text-base sm:text-lg md:text-xl font-armin text-gray-600 leading-relaxed"
            >
              Ne ofrojmë produkte që kombinojnë recetat tradicionale me teknologjinë moderne, duke mbajtur 
              gjallë artin e çajit shqiptar me cilësi të përsosur. Me bazë në <b className="text-[#8B4513]">Ferizaj, Kosovë</b>, 
              Lira Brand vazhdon të mbajë gjallë traditën e çajit shqiptar dhe të sjellë shijen autentike 
              në çdo produkt.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* RevealBento Section */}
      <div className="w-full py-16">
        <RevealBento />
      </div>
      
      <div className="w-full pt-4">
      <SecondQuality />
      </div>
    </div>
  );
}


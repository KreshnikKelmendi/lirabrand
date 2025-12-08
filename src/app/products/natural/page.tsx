"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function NaturalPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [sloganRef, sloganInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fillVariants = {
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

  return (
    <>
    <div className="pt-6 px-5 lg:px-16 relative" style={{ backgroundColor: "#eecd28" }}>
      {/* Background pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
      />
     
      
      <div className="mx-auto relative z-10">
        {/* Product Section */}
        <div
          ref={ref}
          className="mt-6 pb-12 md:pb-16 lg:pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/assets/NATURAL.png"
                alt="Natural"
                width={500}
                height={600}
                className="w-[330px] lg:w-[100vh] object-contain -rotate-1"
              />
            </div>
            

            {/* Right - Text Content */}
            <div className="text-white">
              <motion.h1
                className="text-3xl lg:text-4xl font-lemonmilk text-[#d88a0e] mb-4 relative overflow-hidden inline-block"
                variants={fillVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                VAJ LULEDIELLI <br /> <span className="text-2xl lg:text-5xl font-bellarina">Premium Quality</span>
              </motion.h1>
              
              
              <motion.div
                className="text-base lg:text-lg text-white leading-relaxed space-y-4 font-armin"
                variants={fillVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                <p>
                  Vaji ynë i lulediellit prodhohet nga fara cilësore të lulediellit dhe ofron një shije të lehtë e neutrale, ideale për gatim të përditshëm.
                  I pasur me vlera ushqyese dhe i qëndrueshëm në temperatura të larta, ai garanton cilësi dhe freski në çdo përdorim.
                </p>
              </motion.div>
              
            </div>
          
          </div>
        </div>
       
      </div>
    </div>
    </>
  );
}



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FrischProduct from "./FrischProduct";

export default function FrischPage() {
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
      <div className="pt-6 px-5 lg:px-16 relative" style={{ backgroundColor: "#167ea1" }}>
        {/* Background pattern overlay */}
        <div className="absolute inset-0 pointer-events-none" />
        
        {/* Background text overlay */}
        <div className="absolute opacity-55 inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1 
            className="text-2xl lg:text-9xl font-lemonmilk text-white uppercase"
            style={{ opacity: 0.15 }}
          >
            FRISCH
          </h1>
        </div>
        
        <div className="mx-auto relative z-10">
          {/* Product Section */}
          <div
            ref={ref}
            className="mt-12 md:mt-16 lg:mt-24 pb-12 md:pb-16 lg:pb-24 "
          >
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 items-center">
              {/* Left - Product Image */}
              <svg className="absolute top-[-50px] right-16 lg:right-0 lg:left-96 rotate-180 w-[16px] h-[57px] lg:w-[32px] lg:h-[105px]" viewBox="0 0 32 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='st1' d="M20.4468 104.344C10.6022 92.2323 3.02094 78.2152 1.16844 62.6453C-0.170748 51.2857 2.04464 39.9038 6.7145 29.6352C10.0717 22.2674 14.7325 15.5028 20.1192 9.50776C21.3802 8.10964 22.6919 6.70191 24.065 5.37611C18.9749 6.74289 13.8748 8.11973 8.71181 9.19118C6.84543 9.57722 6.05581 6.68416 7.94251 6.29834C15.124 4.81202 22.2103 2.7051 29.2985 0.902914C30.4342 0.610524 31.3243 1.66632 31.138 2.75107C29.7722 10.2421 28.4166 17.7433 27.0508 25.2343C26.707 27.1299 23.8177 26.3267 24.1616 24.4514C25.2519 18.3997 26.3624 12.3482 27.4527 6.29645C18.6332 13.9504 11.589 24.5792 7.56205 35.3525C4.04473 44.7601 2.87844 54.9752 4.45317 64.9966C6.6302 78.8332 13.7358 91.4639 22.5263 102.274C23.7339 103.77 21.6445 105.87 20.4266 104.364L20.4468 104.344Z" fill="#FFFFFF"/>
              </svg>
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/assets/frisch logo.png"
                  alt="Frisch Product"
                  width={500}
                  height={600}
                  className="w-[330px] lg:w-[500px] object-contain -rotate-12"
                />
              </div>
              
              {/* Right - Text Content */}
              <div className="text-white">
                <motion.h1
                  className="text-3xl lg:text-4xl font-lemonmilk text-white mb-4 relative overflow-hidden inline-block"
                  variants={fillVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  FRISCH
                </motion.h1>
                
                
                <motion.div
                  className="text-base lg:text-lg text-white/90 leading-relaxed space-y-4 font-armin"
                  variants={fillVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 0.3 }}
                >
                  <p>
                    Frisch Palloma ofron produkte të besueshme për kuzhinë dhe higjienë, të dizajnuara për përdorim të përditshëm.
                    Me cilësi të lartë dhe qëndrueshmëri të garantuar, ky brend përfshin edhe gamën e qeseve të mbeturinave, të forta dhe praktike, ideale për mbajtje të sigurt dhe menaxhim të pastër të mbetjeve në çdo ambient.
                    Produkte që kombinojnë funksionalitetin dhe komoditetin për një shtëpi më higjienike.
                  </p>
                </motion.div>
              </div>
              
              <div 
                ref={sloganRef}
                className="lg:mt-[-50px] max-w-md mx-auto"
              >
                <motion.h2
                  className="text-3xl text-center font-lemonmilk text-white font-bold uppercase leading-tight relative overflow-hidden inline-block"
                  variants={fillVariants}
                  initial="hidden"
                  animate={sloganInView ? "visible" : "hidden"}
                  transition={{ delay: 0.5 }}
                >
                  Pastërti dhe butësi
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrischProduct />
    </>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function RevealBento() {
  return (
    <div className="px-5 lg:px-16  text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="w-full grid grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
      </motion.div>
    </div>
  );
}

interface BlockProps {
  className?: string;
  children: React.ReactNode;
  whileHover?: {
    rotate?: string;
    scale?: number;
  };
}

const Block = React.forwardRef<HTMLDivElement, BlockProps>(({ className = "", children, whileHover, ...rest }, ref) => {
  const baseClasses = "col-span-4 border border-zinc-700 bg-zinc-800 p-6";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <motion.div
      ref={ref}
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      whileHover={whileHover}
      className={combinedClasses}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

Block.displayName = "Block";

const HeaderBlock = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Block className="col-span-12 row-span-2 md:col-span-6 flex items-center relative overflow-hidden" ref={ref}>
      {/* Background Image with Blur and Opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/487786048_1265413888917456_4464519389769385379_n.png"
          alt="Background"
          fill
          className="object-cover  opacity-10"
        />
      </div>
      
      <div className="w-full relative z-10">
        {/* Text Content */}
        <motion.h1
          className="text-lg md:text-2xl lg:text-2xl font-armin leading-tight"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {
              clipPath: "inset(0 100% 0 0)",
            },
            visible: {
              clipPath: "inset(0 0% 0 0)",
              transition: {
                duration: 1.2,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        >
          Lira Brand përfaqëson traditën e çajit shqiptar me cilësi të lartë. 
          Ne kombinojmë recetat tradicionale me teknologjinë moderne për të sjellë 
          shijen autentike që flet vetë për historinë dhe pasionin pas secilit produkt.
        </motion.h1>
      
      </div>
    </Block>
  );
};

const ImageBlock = ({ src, alt, className = "", whileHover }: { src: string; alt: string; className?: string; whileHover?: { rotate?: string; scale?: number } }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={`col-span-6 md:col-span-3 relative overflow-hidden ${className}`}
    >
      <motion.div
        className="relative w-full min-h-[200px] h-[30vh] md:h-[40vh] lg:h-[50vh]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {
            clipPath: "inset(0 100% 0 0)",
          },
          visible: {
            clipPath: "inset(0 0% 0 0)",
            transition: {
              duration: 1.2,
              delay: 0.3,
              ease: "easeInOut",
            },
          },
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

const SocialsBlock = () => (
  <>
    <ImageBlock
      src="/assets/main-5.png"
      alt="Lira Brand Product"
    />
    <ImageBlock
      src="/assets/470691922_18365246707184030_5640793309400524623_n.png"
      alt="Lira Brand Product"
    />
    <ImageBlock
      src="/assets/482091979_18374565301184030_6899814858407836004_n.png"
      alt="Lira Brand Tea"
    />
    <ImageBlock
      src="/assets/486809174_1261131792678999_3569231263362330969_n.png"
      alt="Lira Brand Product"
    />
  </>
);

const AboutBlock = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Block className="col-span-12 text-base md:text-xl lg:text-xl leading-tight bg-[#8B4513]" ref={ref}>
      <div className="relative overflow-hidden">
        <motion.p
          className="text-white"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {
              clipPath: "inset(0 100% 0 0)",
            },
            visible: {
              clipPath: "inset(0 0% 0 0)",
              transition: {
                duration: 1.2,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        >
          Pasioni ynë është prodhimi i çajit shqiptar me cilësi të lartë.{" "}
          <span className="text-[#c37742]">
            Ne kombinojmë recetat tradicionale me teknologjinë moderne për të sjellë
            shijen autentike që flet vetë për historinë dhe pasionin pas secilit produkt.
            Me bazë në Ferizaj, Kosovë, Lira Brand vazhdon të mbajë gjallë traditën e çajit shqiptar.
          </span>
        </motion.p>
      </div>
    </Block>
  );
};



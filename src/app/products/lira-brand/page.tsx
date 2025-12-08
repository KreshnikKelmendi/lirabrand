"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Lira5TitleSection() {
  const [ref, inView] = useInView({
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
    <div ref={ref} className="text-center border-t border-gray-300 pt-12 lg:pt-16">
      <motion.p
        className="text-2xl font-lemonmilk text-red-700 relative overflow-hidden inline-block"
        variants={fillVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        CEYLON TEA
      </motion.p>
      <motion.p
        className="text-4xl font-bellarina text-black block mt-2"
        variants={fillVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Black Tea
      </motion.p>
    </div>
  );
}

function TitleSection() {
  const [ref, inView] = useInView({
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
    <div ref={ref} className="text-center">
      <motion.h2
        className="text-4xl lg:text-5xl font-lemonmilk text-red-700 relative overflow-hidden inline-block"
        variants={fillVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
      <span className="text-gray-300">NETT WEIGHT 10 KG</span>
      </motion.h2>
    </div>
  );
}

export default function LiraBrandPage() {
  const liraProducts = [
    {
      id: 1,
      image: "/assets/lira-1.png",
      title: "PREMIUM",
      subtitle: "Black Tea",
      weights: [
        { size: "400 GR", pack: "1X20 PC" },
        { size: "800 GR", pack: "1X10 PC" },
      ],
    },
    {
      id: 2,
      image: "/assets/lira 2.png",
      title: "GOLD",
      subtitle: "Black Tea",
      weights: [
        { size: "200 GR", pack: "1X40 PC" },
        { size: "400 GR", pack: "1X20 PC" },
        { size: "800 GR", pack: "1X10 PC" },
      ],
    },
    {
      id: 3,
      image: "/assets/lira 3.png",
      title: "444A",
      subtitle: "Black Tea",
      weights: [
        { size: "300 GR", pack: "1X22 PC" },
        { size: "600 GR", pack: "1X12 PC" },
      ],
    },
    {
      id: 4,
      image: "/assets/lira 4.png",
      title: "TRADITIONAL",
      subtitle: "Black Tea",
      weights: [
        { size: "200 GR", pack: "1X80 PC" },
        { size: "400 GR", pack: "1X40 PC" },
        { size: "800 GR", pack: "1X20 PC" },
      ],
    },
  ];

  const lira5Images = [
    "/assets/lira 5.png",
    "/assets/lira 6.png",
  ];

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
    <div className=" pt-6 px-5 lg:px-16">
      <div className="mx-auto">
      
        {/* Product Sections */}
        {liraProducts.map((product, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <div
              key={product.id}
              ref={ref}
              className={`mt-12 md:mt-16 lg:mt-24 pb-12 md:pb-16 lg:pb-24 ${
                index < liraProducts.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left - Product Image */}
                <div className="flex justify-center">
                  <Image
                    src={product.image}
                    alt={`Lira Brand ${product.title} ${product.subtitle}`}
                    width={420}
                    height={420}
                    className="w-[330px] lg:w-full object-contain"
                  />
                </div>

                {/* Right - Text and Weights */}
                <div>
                  <motion.p
                    className="text-2xl font-lemonmilk text-red-700 relative"
                    variants={fillVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    {product.title}
                  </motion.p>
                  <motion.p
                    className="text-4xl font-bellarina text-black block mt-2"
                    variants={fillVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    {product.subtitle}
                  </motion.p>

                  <div className="mt-8 md:mt-10 space-y-4 md:space-y-5 text-gray-400 font-lemonmilk">
                    {product.weights.map((weight, idx) => (
                      <motion.div
                        key={idx}
                        className="relative overflow-hidden"
                        variants={fillVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        <p className="text-2xl md:text-3xl font-light">
                          {weight.size}
                        </p>
                        <p className="text-xl md:text-2xl font-light">
                          {weight.pack}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* lira-5 Images - Two images in grid-cols-2 */}
        <div className="">
        <Lira5TitleSection />
          <div className="grid grid-cols-2 gap-6 ">
          
            {lira5Images.map((image, idx) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <div
                  key={idx}
                  ref={ref}
                  className="flex justify-center"
                >
                  
                  <motion.div
                    variants={fillVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: idx * 0.2 }}
                    className="relative overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`Lira Product 5 - ${idx + 1}`}
                      width={900}
                      height={400}
                      className="w-full object-cover"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
          {/* Title at the bottom center */}
          <TitleSection />
        </div>
      </div>
    </div>
  );
}

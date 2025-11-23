"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Quality() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      title: "ulë sheqerin në gjak",
      description: "Zvogëlon rrezikun e diabetit të tipit 2 për 42%.",
    },
    {
      title: "përmirson fokusin dhe koncentrimin",
      description: "L-teanina dhe kafeina përmirësojnë fokusin dhe zgjuarsinë.",
    },
    {
      title: "parandalon plakjen e lëkurës",
      description: "Vitamina B2, C, E dhe minerale që reduktojnë rrudhat.",
    },
    {
      title: "ndihmon në memorje",
      description: "Antioksidantët zvogëlojnë rrezikun e humbjes së memorjes.",
    },
    {
      title: "ulë kolesterolin",
      description: "Zvogëlon kolesterolin LDL dhe ndihmon në humbjen e peshës.",
    },
    {
      title: "forcon sistemin imunitar",
      description: "Mbrojnë trupin nga infeksionet dhe sëmundjet.",
    },
  ];

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    },
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-5 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-foregen text-[#8B4513] mb-2">
            Përfitimet e Çajit të Zi
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-armin lg:w-1/2 mx-auto">
            Çaji i zi Lira Brand ofron përfitime të shumta shëndetësore që përmirësojnë cilësinë e jetës.
          </p>
        </div>

        {/* Benefits - Simple List */}
        <motion.div 
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex gap-4"
              variants={itemVariants}
            >
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#8B4513] flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-foregen text-[#8B4513] mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-armin">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Product {
  id: number;
  images: string[];
  title: string;
  description: string;
  features: string[];
  accentColor: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  cardVariants: any;
}

function BentoImage({ src, alt, className, delay = 0 }: { src: string; alt: string; className: string; delay?: number }) {
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div ref={imageRef} className={className}>
      <motion.div
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={{
          hidden: {
            clipPath: "inset(100% 0 0 0)",
          },
          visible: {
            clipPath: "inset(0% 0 0 0)",
            transition: {
              duration: 1.2,
              delay: delay,
              ease: [0.4, 0, 0.2, 1] as const,
            },
          },
        }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transform transition-transform duration-700 hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}

function ProductCard({ product, index, cardVariants }: ProductCardProps) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={cardInView ? "visible" : "hidden"}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16 lg:mb-16 ${
        !isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content - Left Side */}
      <div className="flex-1 w-full lg:w-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: isEven ? -50 : 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
            },
          }}
          className="space-y-6"
        >
          <div>
            <div className={`w-20 h-1 ${product.accentColor} mb-6`}></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-foregen text-gray-900 mb-6 leading-tight">
              {product.title}
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl font-armin text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>
          
          {/* Features */}
          <div className="space-y-4">
            {product.features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, delay: 0.3 + idx * 0.1 },
                  },
                }}
                className="flex items-center gap-4"
              >
                <div className={`w-2 h-2 rounded-full ${product.accentColor} shrink-0`}></div>
                <span className="text-base sm:text-lg font-armin text-gray-700 leading-relaxed">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bento Grid Images - Right Side */}
      <div className="flex-1 w-full lg:w-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: isEven ? 50 : -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] },
            },
          }}
          className="grid grid-cols-2 gap-4 h-[500px] lg:h-screen"
        >
          {/* Large image - top left */}
          <BentoImage
            src={product.images[0]}
            alt={`${product.title} - Image 1`}
            className="relative col-span-2 row-span-2 overflow-hidden shadow-2xl"
            delay={0.1}
          />
          
          {/* Small image - bottom left */}
          <BentoImage
            src={product.images[1]}
            alt={`${product.title} - Image 2`}
            className="relative col-span-1 row-span-1 overflow-hidden shadow-2xl"
            delay={0.3}
          />
          
          {/* Small image - bottom right */}
          <BentoImage
            src={product.images[2]}
            alt={`${product.title} - Image 3`}
            className="relative col-span-1 row-span-1 overflow-hidden shadow-2xl"
            delay={0.5}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const products = [
    {
      id: 1,
      images: [
        "/assets/487786048_1265413888917456_4464519389769385379_n.PNG",
        "/assets/491432225_18380106025184030_4272445670178327441_n.PNG",
        "/assets/486351909_1262096785915833_2892762982646124264_n.PNG",
      ],
      title: "Çaj i Zi",
      description: "Çaj i zi me cilësi të lartë, i përzgjedhur me kujdes nga lulezat më të mira. Shije e pasur dhe e thellë që sjell momente të këndshme çdo ditë.",
      features: ["Antioksidantë të lartë", "Energji e qëndrueshme", "Shije autentike"],
      accentColor: "bg-amber-600",
    },
    {
      id: 2,
      images: [
        "/assets/470691922_18365246707184030_5640793309400524623_n.PNG",
        "/assets/481003953_8951385704973185_7027403104271619631_n.PNG",
        "/assets/480902628_8959762224135533_7414829899089866025_n.PNG",
      ],
      title: "Çaji Gold Premium",
      description: "Çaj premium me shije të rafinuar dhe aromë të veçantë. Kombinon traditën me inovacionin për një përvojë të përsosur.",
      features: ["Cilësi premium", "Aromë e veçantë", "Përvojë unike"],
      accentColor: "bg-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Fixed background image */}
      <div className="fixed inset-0 h-screen w-full z-0 pointer-events-none">
        <Image
          src="/assets/480439334_8924090261036063_2163819683973204547_n.PNG"
          alt="Background"
          fill
          className="object-cover opacity-30 w-full"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 lg:px-16">
          <div className="mx-auto pt-16" ref={heroRef}>
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-center font-foregen">Produktet Tona</h1>
              <motion.p
                variants={textVariants}
                className="text-lg sm:text-xl md:text-2xl font-armin text-gray-600 leading-tight"
              >
                Eksploroni koleksionin tonë të çajrave të zgjedhur me kujdes
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="w-full px-4 sm:px-6 lg:px-16 py-8">
          <div className="mx-auto max-w-7xl" ref={productsRef}>
            <div className="space-y-0">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  cardVariants={cardVariants}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Mission() {
  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };

  const rightVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 2xl:py-32">
      <div className="mx-auto flex flex-col items-center gap-10 px-5 lg:px-16 lg:flex-row lg:items-start lg:gap-16">
        <motion.div
          ref={leftRef}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
          variants={leftVariants}
          className="w-full lg:w-1/3 lg:pt-52 text-left lg:text-right"
        >
          <p className="text-sm font-bold font-armin uppercase text-yellow-500">
            Misioni dhe vizioni ynë
          </p>
          <h2 className="mt-2 text-4xl font-foregen leading-tight text-[#0f1f3d]">
            Arritja e suksesit me ritmin e çajit
          </h2>
          <p className="mt-6 text-base leading-tight font-armin">
            Lira Brand ndërthur traditën me teknologjinë për të sjellë
            shije të qëndrueshme dhe aromë të përsosur. Me një qasje të
            përkushtuar ndaj cilësisë, ne përzgjedhim me kujdes çdo përbërës
            dhe përgatitim çdo përzierje me dashuri dhe respekt për traditën
            e çajit shqiptar.
          </p>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="mission-ribbon"
        >
          <div className="mission-ribbon__segment mission-ribbon__segment--top">
            <Image
              src="/assets/470691922_18365246707184030_5640793309400524623_n.png"
              alt="River in lush forest"
              fill
              className="mission-ribbon__image"
              sizes="(max-width: 768px) 240px, 320px"
              priority
            />
          </div>
          <div className="mission-ribbon__segment mission-ribbon__segment--bottom">
            <Image
              src="/assets/main-3.png"
              alt="City lights at night"
              fill
              className="mission-ribbon__image"
              sizes="(max-width: 768px) 240px, 320px"
            />
          </div>
        </motion.div>

        <motion.div
          ref={rightRef}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
          variants={rightVariants}
          className="w-full lg:w-1/3 text-left"
        >
          <h2 className="text-4xl font-foregen leading-tight text-[#8B4513]">
            Qëllimi ynë është të përcjellim sukses në çdo filxhan.
          </h2>
          <p className="mt-6 text-base leading-tight font-armin text-[#1c1c49]">
            Vizioni dhe qëllimi ynë është të jemi marka kryesore e çajit shqiptar që
            kombinojnë traditën e lashtë me inovacionin modern. Prej më shumë se 20
            vitesh, ne kemi ndërtuar një legjendë që përfaqëson cilësinë më të lartë
            dhe shijen autentike. <br/><br />Me pasion dhe dedikim, ne vazhdojmë të mbajmë
            gjallë artin e çajit shqiptar, duke krijuar produkte që çmojnë traditën
            dhe shijojnë çdo moment të veçantë, duke u bërë simbol i traditës dhe
            ekselencës në çdo filxhan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
// import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutLiraBrand() {
  // const router = useRouter();
  
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imagesRef, imagesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // const [imageRef, imageInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2,
  // });

  // const handleReadMore = () => {
  //   window.scrollTo({ top: 0, behavior: 'instant' });
  //   router.push('/about');
  // };

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.08,
  //       delayChildren: 0.2,
  //     },
  //   },
  // };

  // const wordVariants = {
  //   hidden: { 
  //     opacity: 0, 
  //     y: 30,
  //     filter: "blur(10px)",
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     filter: "blur(0px)",
  //     transition: {
  //       duration: 0.6,
  //     },
  //   },
  // };

  // const getImageVariants = (index: number) => ({
  //   hidden: { 
  //     opacity: 0, 
  //     y: 100,
  //     scale: 0.95,
  //     filter: "blur(20px)",
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //     filter: "blur(0px)",
  //     transition: {
  //       duration: 0.8,
  //       delay: 0.6 + (index * 0.2),
  //     },
  //   },
  // });

  // const revealImageVariants = {
  //   hidden: {
  //     clipPath: "inset(0 100% 0 0)",
  //   },
  //   visible: {
  //     clipPath: "inset(0 0% 0 0)",
  //     transition: {
  //       duration: 1.5,
  //     },
  //   },
  // };

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

  const textVariants = {
    hidden: {
      opacity: 0.6,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
    },
  };

  const fillVariants = {
    hidden: {
      clipPath: "inset(0 100% 0 0)",
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
    },
  };

  const imageItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
    },
  };

  const instagramImages = [
    {
      id: 1,
      image: "/assets/instagram-lira.png",
      alt: "Instagram Post 1",
      instagramUrl: "https://www.instagram.com/lirabrandtea/",
    },
    {
      id: 2,
      image: "/assets/kestrina-insta.png",
      alt: "Instagram Post 2",
      instagramUrl: "https://www.instagram.com/kestrinakosova/",
    },
    {
      id: 3,
      image: "/assets/instagram-frisch.png",
      alt: "Instagram Post 3",
      instagramUrl: "https://www.instagram.com/liramark.ks/",
    },
    {
      id: 4,
      image: "/assets/lira-02.png",
      alt: "Instagram Post 4",
      instagramUrl: "https://www.instagram.com/lirabrandtea/",
    },
  ];

  // const textVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 30,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       delay: 0.5,
  //     },
  //   },
  // };

  // const text = "Shije që flet vetë";
  // const words = text.split(" ");
  // const brandText = "LIRA BRAND";

  // const imageTextImageItems = [
  //   {
  //     type: "image",
  //     src: "/assets/main-5.png",
  //     alt: "LiraBrand Product",
  //   },
  //   {
  //     type: "text",
  //     content: "Lira Brand përfaqëson traditën e çajit shqiptar me cilësi të lartë dhe shijen autentike.",
  //     bgGradient: "bg-gradient-to-br from-amber-800 via-amber-900 to-amber-950",
  //     bgImage: "/assets/main-6.png",
  //   },
  //   {
  //     type: "image",
  //     src: "/assets/main-7.png",
  //     alt: "LiraBrand Product",
  //   },
  // ];

  // const textImageTextItems = [
  //   {
  //     type: "text",
  //     content: "Traditë e pasur dhe përvojë e gjatë në prodhimin e çajit shqiptar.",
  //     bgGradient: "bg-gradient-to-br from-yellow-500 to-amber-800",
  //   },
  //   {
  //     type: "image",
  //     src: "/assets/main-6.png",
  //     alt: "Lira Brand Tea",
  //   },
  //   {
  //     type: "text",
  //     content: "Cilësi e lartë dhe shije autentike që flet vetë për historinë e markës.",
  //     bgGradient: "bg-gradient-to-br from-stone-700 via-stone-800 to-black/80",
  //   },
  // ];

  return (
    <section className="w-full relative overflow-hidden pt-12 lg:pt-20">
      <div className="mx-auto px-5 lg:px-16">
        <div className="flex flex-col items-center">
          {/* Title: RRETH NESH - Centered, Large, Bold, Black */}
          <div className="text-center mb-4" ref={titleRef}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lemonmilk text-black inline-block relative overflow-hidden">
              <motion.span
                variants={titleVariants}
                initial="hidden"
                animate={titleInView ? "visible" : "hidden"}
                className="inline-block"
              >
                RRETH NESH
              </motion.span>
            </h2>
          </div>

          <div className="flex justify-center mt-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-700 w-10 h-10"
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

          {/* Main Text Block - Light Gray Font */}
          <div className="w-full mb-12" ref={textRef}>
            <motion.p
              className="text-base lg:text-lg text-gray-600 leading-relaxed font-armin"
              variants={textVariants}
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
            >
              LIRA MARK është një kompani lidere në fushën e distribuimit të produkteve ushqimore dhe brendeve të ndryshme, me një traditë mbi 30-vjeçare 
              në tregun e Kosovës. E themeluar në vitin 1992, kompania fillimisht nisi aktivitetin duke importuar dhe shpërndarë çajin “Lira”, një produkt 
              që shumë shpejt fitoi besimin dhe simpatinë e konsumatorëve anembanë vendit. Ky sukses i hershëm vendosi themelet për zgjerimin tonë të mëtejmë 
              dhe për ndërtimin e një reputacioni të fortë si partner i besueshëm dhe afatgjatë. <br/><br/>
              Gjatë dekadave, LIRA MARK ka zgjeruar në mënyrë të vazhdueshme portofolin e saj, duke krijuar marka vendore të zhvilluara nga vetë kompania, 
              si dhe duke marrë përfaqësi ekskluzive nga brende të njohura ndërkombëtare. Falë rrjetit të gjerë të distribuimit, zinxhirit të besueshëm të 
              furnizimit dhe fokusit në cilësi e profesionalizëm, produktet tona janë të pranishme në mijëra pika shitjeje në të gjithë Kosovën. <br/><br/>
              Sot, LIRA MARK vazhdon të mbetet një prej kompanive më të qëndrueshme dhe inovative në sektor, duke kombinuar traditën, përvojën dhe 
              partneritetet globale me angazhimin për t'i sjellë tregut të Kosovës produkte cilësore dhe të standardeve më të larta.
            </motion.p>
          </div>

          {/* Mission Section with Red Vertical Line */}
          <div className="w-full mb-8" ref={missionRef}>
            <div className="flex items-start">
              {/* Red Vertical Line */}
              <div className="w-1 self-stretch bg-red-600 mr-2 shrink-0"></div>
              <div className="flex-1">
                <motion.p
                  className="text-base lg:text-lg text-black font-semibold leading-relaxed font-armin inline-block relative overflow-hidden"
                  variants={fillVariants}
                  initial="hidden"
                  animate={missionInView ? "visible" : "hidden"}
                >
                  <span className="inline-block">
                    <b className="font-lemonmilk">Misioni ynë</b> është të ofrojmë vazhdimisht vlerë, cilësi dhe besueshmëri.
                  </span>
                </motion.p>
                <motion.p
                  className="text-base lg:text-lg text-black font-semibold leading-relaxed font-armin pt-3 lg:pt-1 inline-block relative overflow-hidden"
                  variants={fillVariants}
                  initial="hidden"
                  animate={missionInView ? "visible" : "hidden"}
                >
                  <span className="inline-block">
                    <b className="font-lemonmilk">Vizion ynë</b> është të mbetemi zgjedhja e parë e konsumatorëve dhe partnerëve në fushën e distribuimit.
                  </span>
                </motion.p>
              </div>
            </div>
          </div>

          {/* Instagram Images Grid */}
          <div className="w-full mt-10 mb-8" ref={imagesRef}>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-1.5"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate={imagesInView ? "visible" : "hidden"}
            >
              {instagramImages.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative w-full aspect-square overflow-hidden group cursor-pointer"
                  variants={imageItemVariants}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-left transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Dark Background Overlay - appears on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  {/* Instagram Icon and Text Overlay */}
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex flex-col items-center justify-center z-20"
                  >
                    <svg
                      className="w-12 h-12 text-white opacity-40 group-hover:opacity-100 transition-opacity duration-300 mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <p className="text-white text-sm font-armin opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Na ndiqni në Instagram
                    </p>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* OLD DESIGN - COMMENTED OUT */}
      {/* <div className="mx-auto px-5 lg:px-16" ref={ref}>
        <div className="flex flex-col">
          <motion.div
            className="w-full text-left mb-12 lg:mb-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3
              className="text-base font-armin text-gray-700 "
              variants={textVariants}
            >
              Rreth Nesh
            </motion.h3>
            <motion.h2 
              className="text-4xl lg:text-6xl xl:text-7xl font-foregen text-gray-900 leading-[1.2] tracking-tight"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="mt-1 lg:mt-2 text-base sm:text-lg lg:text-xl text-black max-w-3xl font-armin leading-relaxed"
              variants={textVariants}
            >
              Lira Brand është një markë që përfaqëson traditën e çajit shqiptar dhe
              cilësinë e lartë. Çdo përzierje përgatitet me përkushtim për të sjellë
              shijen autentike që flet vetë për historinë dhe pasionin pas secilit produkt.
              Ne ofrojmë produkte që kombinojnë recetat tradicionale me teknologjinë moderne.<br/><br/>
              Ne jemi të vendosur në <b className="text-[#8B4513]">Ferizaj, Kosovë</b> dhe me krenari përfaqësojmë traditën e çajit shqiptar.
            </motion.p>
            <motion.div
              variants={textVariants}
              className="mt-4"
            >
              <button 
                onClick={handleReadMore}
                className="relative inline-block text-[#8B4513] cursor-pointer font-armin text-base lg:text-lg rounded-lg group"
              >
                <span className="relative">Lexo më shumë...</span>
                <span className="absolute bottom-0 left-0 h-[2px] bg-[#8B4513] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 w-full"></span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="w-full px-5 lg:px-16">
        <div className="grid grid-cols-3">
          {imageTextImageItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[20vh] sm:h-[35vh] md:h-[50vh] lg:h-[70vh] overflow-hidden shadow-xl"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={item.type === "image" ? getImageVariants(index) : textVariants}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src!}
                  alt={item.alt!}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className={`absolute inset-0 ${item.bgGradient}`}>
                  {item.bgImage && (
                    <div className="absolute inset-0 opacity-30">
                      <Image
                        src={item.bgImage}
                        alt="Background"
                        fill
                        className="object-cover blur-md scale-110"
                      />
                    </div>
                  )}
                  
                  <div className="relative h-full flex items-center justify-center px-2 sm:px-4 md:px-6 text-center z-10">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-left font-armin leading-tight">
                      {item.content}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full px-5 lg:px-16">
        <div className="grid grid-cols-3">
          {textImageTextItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[20vh] sm:h-[35vh] md:h-[50vh] lg:h-[70vh] overflow-hidden"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={item.type === "image" ? getImageVariants(index) : textVariants}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src!}
                  alt={item.alt!}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className={`h-full flex items-center justify-center px-2 sm:px-4 md:px-6 text-center ${item.bgGradient || "bg-linear-to-br from-amber-900 via-amber-800 to-amber-950"}`}>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left text-white font-armin leading-tight">
                    {item.content}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full mt-20 lg:mt-2. px-0" ref={imageRef}>
        <div className="relative w-full h-[70vh] lg:h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={revealImageVariants}
          >
            <Image
              src="/assets/main-8.png"
              alt="LiraBrand Tea History"
              fill
              className="object-cover w-full opacity-70"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <p className="text-base font-armin font-extrabold sm:text-lg lg:text-xl xl:text-2xl text-black leading-tight text-center max-w-4xl drop-shadow-lg">
              <b className="font-foregen">Lira Brand</b> është një markë që përfaqëson traditën e <b className="text-red-800">çajit shqiptar dhe cilësinë e lartë. </b> 
              Me një histori të pasur dhe përvojë të gjatë në prodhimin e çajit, LiraBrand ofron 
              produkte që kombinojnë <b className="text-red-800">shijet tradicionale me inovacionin modern.</b> <br/><br/>Çdo produkt i LiraBrand 
              është i përzgjedhur me kujdes dhe përgatitur me dashuri për të ofruar një përvojë unike 
              shijeje që flet vetë për <b className="text-red-800">cilësinë dhe autenticitetin e markës.</b> <br /><br/>Me bazë në <b className="text-red-800 font-bold">Ferizaj, Kosovë</b>, 
              Lira Brand vazhdon të mbajë gjallë traditën e çajit shqiptar dhe të sjellë shijen autentike 
              në çdo produkt.
            </p>
          </motion.div>
        </div>
      </div> */}
    </section>
  );
}

"use client";

import Image from "next/image";
// import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../language/LanguageProvider";

const headerUnderlay =
  "-mt-[78px] pt-[78px] sm:-mt-[92px] sm:pt-[92px] lg:-mt-[168px] lg:pt-[168px] xl:-mt-[188px] xl:pt-[188px]";

export default function AboutLiraBrand({
  withHeaderUnderlay = false,
}: {
  /** Only on /about — pulls hero under the fixed header. Never use on homepage. */
  withHeaderUnderlay?: boolean;
}) {
  const { t } = useLanguage();
  // const router = useRouter();
  
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
    <section className="w-full">
      <div
        className={`relative overflow-hidden bg-[#e10600] px-6 pb-16 pt-6 text-white sm:px-10 sm:pb-20 sm:pt-8 lg:px-20 lg:pb-24 lg:pt-10 ${withHeaderUnderlay ? headerUnderlay : ""}`}
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative inline-block">
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] select-none font-lemonmilk text-5xl uppercase text-white/25 sm:text-6xl lg:text-7xl"
              >
                {t.about.title}
              </span>
              <h2 className="relative font-lemonmilk text-3xl uppercase text-white sm:text-4xl lg:text-5xl">
                {t.about.title}
              </h2>
            </div>
            <div className="mt-3 flex justify-center">
              <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden>
                <path d="M2 2L14 14L26 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="mt-8 font-lemonmilk-regular text-sm uppercase tracking-[0.18em] sm:text-base">
              {t.about.history}
            </p>
          </motion.div>

          {t.about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph.slice(0, 24)}
              className="mt-6 text-base font-bold leading-relaxed sm:text-lg"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.12 * index, ease: [0.22, 1, 0.36, 1] }}
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            className="mt-10 border-l-4 border-white pl-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base font-bold leading-relaxed sm:text-lg">
              {t.about.mission}
            </p>
            <p className="mt-2 text-base font-bold leading-relaxed sm:text-lg">
              {t.about.vision}
            </p>
          </motion.div>
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

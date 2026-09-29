"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "../../components/language/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

const headerUnderlay =
  "-mt-[78px] pt-[78px] sm:-mt-[92px] sm:pt-[92px] lg:-mt-[168px] lg:pt-[168px] xl:-mt-[188px] xl:pt-[188px]";

export default function NaturalPage() {
  const { t } = useLanguage();
  const n = t.naturalPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-w-0 max-w-full overflow-x-clip px-5 lg:px-16">
      <div
        className={`relative -mx-5 overflow-hidden bg-[#e4bc28] lg:-mx-16 ${headerUnderlay}`}
      >
        <div className="flex min-h-0 flex-col items-center justify-end pb-1 sm:pb-1.5">
          <h1 className="font-lemonmilk text-xl tracking-[0.22em] text-white sm:text-2xl lg:text-3xl">
            {n.brand}
          </h1>
          <svg
            className="mt-1 h-4 w-4 animate-bounce text-white/90 sm:h-5 sm:w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <svg
          className="-mb-px block h-8 w-full sm:h-10 lg:h-12"
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="#f1d13b"
            d="M0,32 C120,12 240,44 360,26 C480,8 600,40 720,24 C840,8 960,38 1080,22 C1200,6 1320,36 1440,28 V56 H0 Z"
          />
        </svg>

        <div className="bg-[#f1d13b]">
          <div className="mx-auto grid max-w-6xl items-start gap-8 px-2 pb-16 pt-0 sm:pb-20 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-4 lg:pb-24 xl:max-w-7xl xl:gap-8">
          <motion.div
            className="-mt-3 flex justify-center sm:-mt-5 lg:-mt-10 lg:justify-start xl:-mt-12"
            initial={{ opacity: 0, y: 28, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: -12 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease }}
          >
            <Image
              src="/assets/natural/1.png"
              alt="Natural sunflower oil"
              width={1000}
              height={1000}
              priority
              className="h-[min(68vh,26rem)] w-auto max-w-none object-contain object-top drop-shadow-[0_28px_36px_rgba(0,0,0,0.22)] sm:h-[min(72vh,30rem)] md:h-[min(76vh,34rem)] lg:h-[min(82vh,40rem)] xl:h-[min(86vh,46rem)] 2xl:h-[min(88vh,50rem)]"
            />
          </motion.div>

          <motion.div
            className="text-center lg:pt-6 lg:text-left xl:pt-10"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            <h2 className="font-lemonmilk text-2xl uppercase leading-tight text-[#c8820f] sm:text-3xl lg:text-4xl xl:text-[2.65rem]">
              {n.title}
            </h2>
            <p className="mt-2 font-bellarina text-3xl text-[#c8820f] sm:text-4xl lg:text-5xl xl:text-6xl">
              {n.subtitle}
            </p>
            <p className="mt-6 font-armin text-base leading-relaxed text-[#c8820f] sm:text-lg lg:mt-8 lg:text-xl lg:leading-relaxed">
              {n.body}
            </p>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "../../components/language/LanguageProvider";
import FrischProduct from "./FrischProduct";

const ease = [0.22, 1, 0.36, 1] as const;

const headerUnderlay =
  "-mt-[78px] pt-[78px] sm:-mt-[92px] sm:pt-[92px] lg:-mt-[168px] lg:pt-[168px] xl:-mt-[188px] xl:pt-[188px]";

const heroGreen = "bg-[#48bd4a]";

function VerticalDashDivider({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 8 400"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <line
        x1="4"
        y1="0"
        x2="4"
        y2="400"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="butt"
        strokeDasharray="52 44"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function FrischPage() {
  const { t } = useLanguage();
  const f = t.frischPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-w-0 max-w-full overflow-x-clip">
      <div
        className={`relative overflow-hidden text-white ${heroGreen} ${headerUnderlay}`}
      >
        <div className="relative px-5 pb-14 pt-4 sm:pb-16 sm:pt-6 lg:px-16 lg:pb-24 lg:pt-4 xl:pb-28">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch lg:gap-0">
            <motion.div
              className="flex flex-col items-center lg:items-start lg:pr-10 xl:pr-16 2xl:pr-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="flex flex-wrap items-start justify-center gap-x-4 gap-y-3 lg:justify-start">
                <h2 className="text-center font-lemonmilk text-[1.65rem] font-bold uppercase leading-[1.06] text-[#d4e838] sm:text-3xl lg:text-left lg:text-[2.35rem] xl:text-5xl 2xl:text-[3.25rem]">
                  {f.tagline}
                </h2>
                <span className="mt-1 shrink-0 rounded-md bg-[#1a6fd4] px-3 py-1.5 font-lemonmilk-regular text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                  {f.newBadge}
                </span>
              </div>
              <Image
                src="/assets/frisch logo.png"
                alt="Frisch"
                width={900}
                height={650}
                priority
                className="mt-8 h-auto w-full object-contain sm:mt-10 lg:mt-10 xl:mt-12"
              />
            </motion.div>

            <div className="relative hidden flex-col items-center lg:flex lg:px-14 xl:px-20 2xl:px-24">
              <div className={`z-10 flex flex-col items-center pb-8 ${heroGreen}`}>
                <h1 className="font-lemonmilk text-3xl tracking-[0.12em] xl:text-4xl 2xl:text-[2.65rem]">
                  {f.brand}
                </h1>
                <svg
                  className="mt-2 h-5 w-5 animate-bounce text-white/90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <VerticalDashDivider className="min-h-56 w-3 flex-1 lg:min-h-72 xl:min-h-80" />
            </div>

            <motion.div
              className="relative lg:pl-10 xl:pl-16 2xl:pl-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
            >
              <div className={`mb-8 flex flex-col items-center lg:hidden ${heroGreen}`}>
                <h1 className="font-lemonmilk text-2xl tracking-[0.14em] sm:text-3xl">{f.brand}</h1>
                <svg
                  className="mt-1.5 h-4 w-4 animate-bounce text-white/90 sm:h-5 sm:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="mb-8 lg:hidden">
                <VerticalDashDivider className="mx-auto h-24 w-2 rotate-90" />
              </div>

              <div className="space-y-6 font-armin text-base leading-relaxed text-white sm:text-lg lg:space-y-8 lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-relaxed 2xl:text-[1.35rem]">
                <p>{f.body}</p>
                <p>{f.bodyLine2}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <FrischProduct />
    </div>
  );
}

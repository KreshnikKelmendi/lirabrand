"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../language/LanguageProvider";

type WatermarkMark = {
  top?: string;
  bottom?: string;
  right: string;
  size: string;
  rotate: string;
  opacity: string;
};

/** Irregular clusters — not a uniform tile grid */
const topMarks: WatermarkMark[] = [
  { top: "8%", right: "4%", size: "h-[3.35rem] sm:h-[3.75rem]", rotate: "-5deg", opacity: "opacity-[0.2]" },
  { top: "14%", right: "16%", size: "h-[3rem] sm:h-[3.4rem]", rotate: "4deg", opacity: "opacity-[0.17]" },
  { top: "6%", right: "28%", size: "h-[3.6rem] sm:h-[4rem]", rotate: "-2deg", opacity: "opacity-[0.22]" },
  { top: "18%", right: "38%", size: "h-[3.2rem] sm:h-[3.65rem]", rotate: "6deg", opacity: "opacity-[0.19]" },
  { top: "10%", right: "50%", size: "h-[3.5rem] sm:h-[3.85rem]", rotate: "-3deg", opacity: "opacity-[0.21]" },
  { top: "20%", right: "62%", size: "h-[3.05rem] sm:h-[3.45rem]", rotate: "3deg", opacity: "opacity-[0.18]" },
];

const bottomMarks: WatermarkMark[] = [
  { bottom: "12%", right: "2%", size: "h-[3.4rem] sm:h-[3.8rem]", rotate: "4deg", opacity: "opacity-[0.2]" },
  { bottom: "8%", right: "14%", size: "h-[3.1rem] sm:h-[3.5rem]", rotate: "-6deg", opacity: "opacity-[0.18]" },
  { bottom: "16%", right: "24%", size: "h-[3.65rem] sm:h-[4.05rem]", rotate: "2deg", opacity: "opacity-[0.22]" },
  { bottom: "10%", right: "36%", size: "h-[3.25rem] sm:h-[3.7rem]", rotate: "-4deg", opacity: "opacity-[0.19]" },
  { bottom: "14%", right: "48%", size: "h-[3.45rem] sm:h-[3.85rem]", rotate: "5deg", opacity: "opacity-[0.21]" },
  { bottom: "9%", right: "58%", size: "h-[3rem] sm:h-[3.4rem]", rotate: "-2deg", opacity: "opacity-[0.17]" },
  { bottom: "18%", right: "68%", size: "h-[3.2rem] sm:h-[3.6rem]", rotate: "3deg", opacity: "opacity-[0.2]" },
  { bottom: "11%", right: "78%", size: "h-[3.55rem] sm:h-[3.95rem]", rotate: "-5deg", opacity: "opacity-[0.19]" },
];

function WatermarkLogo({ mark }: { mark: WatermarkMark }) {
  return (
    <Image
      src="/assets/logo/partnership-logo.png"
      alt=""
      width={96}
      height={110}
      aria-hidden
      className={`pointer-events-none absolute w-auto ${mark.size} ${mark.opacity} filter-[brightness(0)_saturate(100%)]`}
      style={{
        top: mark.top,
        bottom: mark.bottom,
        right: mark.right,
        transform: `rotate(${mark.rotate})`,
      }}
    />
  );
}

export default function Partner() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-[#e10600]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[min(100%,52rem)] max-w-[72%] sm:max-w-[68%] md:max-w-[62%] lg:max-w-[58%]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to left, transparent 0%, black 28%, black 100%)",
          maskImage: "linear-gradient(to left, transparent 0%, black 28%, black 100%)",
        }}
      >
        {topMarks.map((mark, i) => (
          <WatermarkLogo key={`t-${i}`} mark={mark} />
        ))}
        {bottomMarks.map((mark, i) => (
          <WatermarkLogo key={`b-${i}`} mark={mark} />
        ))}
      </div>

      <div className="container relative z-1 py-10 sm:py-11 md:py-12 lg:py-14 xl:py-16">
        <div className="flex flex-col gap-10 md:min-h-42 md:flex-row md:items-center md:justify-between md:gap-8 lg:min-h-46 lg:gap-12">
          <motion.div
            className="flex min-w-0 items-center gap-4 sm:gap-5 lg:gap-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/assets/logo/partnership-logo.png"
              alt=""
              width={108}
              height={123}
              className="h-17 w-auto shrink-0 drop-shadow-[0_2px_0_rgba(255,255,255,0.2),0_10px_28px_rgba(0,0,0,0.32)] sm:h-20 lg:h-22 xl:h-24"
              priority={false}
            />
            <p className="font-lemonmilk text-lg font-bold leading-[1.08] text-white sm:text-xl lg:text-[1.65rem] xl:text-3xl">
              {t.partner.line1}
              <br />
              {t.partner.line2}
            </p>
          </motion.div>

          <motion.div
            className="flex w-full justify-center md:w-auto md:shrink-0 md:justify-end"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="group flex flex-col items-center gap-2.5 transition-opacity duration-300 hover:opacity-85 sm:gap-3"
            >
              <span className="block h-px w-54 bg-white sm:w-58 lg:w-64" />
              <span className="whitespace-nowrap font-lemonmilk text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white sm:text-xs lg:text-sm lg:tracking-[0.24em]">
                {t.partner.cta}
              </span>
              <span className="block h-px w-54 bg-white sm:w-58 lg:w-64" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div aria-hidden className="relative z-10 h-2 bg-[#9b0606]" />
    </section>
  );
}

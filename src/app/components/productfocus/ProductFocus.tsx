"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../language/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

const stripe = {
  backgroundColor: "#f6f6f6",
  backgroundImage:
    "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.055) 10px, rgba(0,0,0,0.055) 11px)",
};

const view = { once: true, amount: 0.4 } as const;

export default function ProductFocus() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-6 py-14 sm:px-10 lg:px-20 lg:py-20" style={stripe}>
      <div className="mx-auto w-full max-w-6xl">
        <motion.h2
          className="font-lemonmilk text-[22px] uppercase tracking-wide text-black sm:text-[26px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, ease }}
        >
          {t.focus.title}
        </motion.h2>

        {/* Row 1: Lira Brand */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-10 md:grid-cols-3 md:gap-5 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={{ duration: 0.65, ease }}
          >
            <Link href="/products/lira-brand" onClick={() => window.scrollTo(0, 0)} className="block h-full">
              <Image
                src="/assets/productFocus/lirabrand-1.jpg"
                alt="Lira Brand"
                width={1440}
                height={1440}
                className="aspect-4/3 h-full w-full object-cover"
              />
            </Link>
          </motion.div>

          <div className="grid h-full grid-cols-1 items-stretch gap-4 md:col-span-2 md:grid-cols-2 md:gap-0">
          <motion.div
            className="flex h-full flex-col justify-center bg-white px-7 py-6 sm:px-8 md:px-8 lg:px-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.65, delay: 0.12, ease }}
          >
            <div>
              <h3 className="text-[15px] font-extrabold uppercase tracking-wide text-black sm:text-base">
                {t.focus.liraTitle}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#8a8a8a] sm:text-sm">
                {t.focus.lira[0]}
                <br />
                {t.focus.lira[1]}
                <br />
                {t.focus.lira[2]}
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-[#8a8a8a] sm:text-sm">
                {t.focus.liraEnd}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={{ duration: 0.65, delay: 0.22, ease }}
          >
            <Link href="/products/lira-brand" onClick={() => window.scrollTo(0, 0)} className="block h-full">
              <Image
                src="/assets/productFocus/lirabrand-2.jpg"
                alt="Lira Brand çaj"
                width={1440}
                height={1800}
                className="aspect-4/3 h-full w-full object-cover object-[center_40%]"
              />
            </Link>
          </motion.div>
          </div>
        </div>

        {/* Row 2: Kestrina */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-4 md:mt-14 md:grid-cols-3 md:gap-5 lg:mt-16 lg:gap-6">
          <div className="grid h-full grid-cols-1 items-stretch gap-4 md:col-span-2 md:grid-cols-2 md:gap-0">
          <motion.div
            className="@container relative flex aspect-4/3 h-full items-center justify-center overflow-hidden bg-[#e10600] md:aspect-auto"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={{ duration: 0.65, ease }}
          >
            <span className="pointer-events-none absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 select-none text-center font-lemonmilk text-[34cqw] uppercase leading-[0.8] text-white/25">
              Love
              <br />
              Box
            </span>
            <svg
              className="absolute right-5 top-6 h-12 w-12 text-white md:right-4 md:top-5 md:h-11 md:w-11 lg:right-6 lg:top-7 lg:h-14 lg:w-14"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden
            >
              <path d="M50 12C34 14 20 26 22 48" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M14 38L22 50L34 40" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link
              href="/products/kestrina"
              onClick={() => window.scrollTo(0, 0)}
              className="relative z-10 block h-[68%] w-[58%]"
            >
              <Image src="/assets/productFocus/kestrina-2.png" alt="Kestrina Love Box" fill className="object-contain" />
            </Link>
          </motion.div>

          <motion.div
            className="flex h-full flex-col justify-center bg-white px-7 py-6 sm:px-8 md:px-8 lg:px-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.65, delay: 0.12, ease }}
          >
            <div>
              <h3 className="text-[15px] font-extrabold uppercase tracking-wide text-black sm:text-base">
                {t.focus.kestrinaTitle}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#8a8a8a] sm:text-sm">
                {t.focus.kestrina[0]}
                <br />
                {t.focus.kestrina[1]}
                <br />
                {t.focus.kestrina[2]}
                <br />
                {t.focus.kestrina[3]}
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-[#8a8a8a] sm:text-sm">
                {t.focus.kestrinaEnd[0]}
                <br />
                {t.focus.kestrinaEnd[1]}
              </p>
            </div>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={{ duration: 0.65, delay: 0.22, ease }}
          >
            <Link href="/products/kestrina" onClick={() => window.scrollTo(0, 0)} className="block h-full">
              <Image
                src="/assets/productFocus/kestrina-1.jpg"
                alt="Kestrina"
                width={1440}
                height={1440}
                className="aspect-4/3 h-full w-full object-cover"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
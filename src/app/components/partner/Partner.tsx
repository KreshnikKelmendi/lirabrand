"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../language/LanguageProvider";

export default function Partner() {
  const { t } = useLanguage();

  return (
    <motion.section
      className="relative overflow-hidden bg-[#e10600]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-20 md:block"
        style={{
          backgroundImage: "url(/assets/logo/partnership-logo.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "92px",
          filter: "brightness(0)",
        }}
      />
      <div className="relative mx-auto flex flex-col items-start gap-8 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16 lg:py-20">
        <div className="flex items-center gap-4 sm:gap-6">
          <Image
            src="/assets/logo/partnership-logo.png"
            alt=""
            width={108}
            height={123}
            className="h-16 w-auto shrink-0 sm:h-20 lg:h-24"
          />
          <p className="max-w-md text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
            {t.partner.line1}
            <br />
            {t.partner.line2}
          </p>
        </div>
        <Link
          href="/contact"
          onClick={() => window.scrollTo(0, 0)}
          className="border-b-2 border-white pb-2 font-lemonmilk text-sm uppercase tracking-[0.18em] text-white transition-opacity duration-300 hover:opacity-70"
        >
          {t.partner.cta}
        </Link>
      </div>
      <div className="h-2.5 bg-[#c40808]" />
      <div className="h-2 bg-[#9b0606]" />
    </motion.section>
  );
}

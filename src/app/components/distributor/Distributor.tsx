"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../language/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Distributor() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white">
      <div className="container w-full py-14 sm:py-18 lg:py-24">
        <Reveal delay={0}>
          <p className="text-base font-bold leading-relaxed text-black sm:text-lg lg:text-xl">
            {t.distributor.p1}
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-6">
          <p className="text-base font-bold leading-relaxed text-black sm:text-lg lg:text-xl">
            {t.distributor.p2}
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-12">
          <p className="font-lemonmilk text-lg font-extrabold text-black sm:text-xl lg:text-2xl">
            {t.distributor.stats}
          </p>
          <p className="mt-3 font-lemonmilk text-lg font-extrabold text-[#e10600] sm:text-xl lg:text-2xl">
            {t.distributor.tag}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

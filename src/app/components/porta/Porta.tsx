"use client";

import { useLanguage } from "../language/LanguageProvider";

export default function Porta() {
  const { t } = useLanguage();
  return (
    <section
      className="bg-[#f7f7f7] px-8 py-12 sm:px-14 sm:py-16 lg:px-24 lg:py-20 xl:px-32"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 7px, rgba(0,0,0,0.07) 7px, rgba(0,0,0,0.07) 8px)",
      }}
    >
      <h2 className="font-lemonmilk text-2xl uppercase leading-tight text-black sm:text-3xl lg:text-4xl">
        {t.porta.title}
      </h2>
      <p className="mt-5 max-w-5xl text-lg leading-relaxed text-black sm:text-xl lg:text-2xl">
        {t.porta.text}
      </p>
    </section>
  );
}

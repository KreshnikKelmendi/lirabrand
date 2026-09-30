"use client";

import { useLanguage } from "../language/LanguageProvider";

const stripeBg = {
  backgroundColor: "#f7f7f7",
  backgroundImage:
    "repeating-linear-gradient(45deg, transparent, transparent 7px, rgba(0,0,0,0.07) 7px, rgba(0,0,0,0.07) 8px)",
};

export default function Porta() {
  const { t } = useLanguage();

  return (
    <section className="w-full" style={stripeBg}>
      <div className="container w-full py-14 sm:py-18 lg:py-24">
        <h2 className="font-lemonmilk text-2xl uppercase leading-tight text-black sm:text-3xl lg:text-4xl">
          {t.porta.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-black sm:text-xl lg:text-2xl">
          {t.porta.text}
        </p>
      </div>
    </section>
  );
}

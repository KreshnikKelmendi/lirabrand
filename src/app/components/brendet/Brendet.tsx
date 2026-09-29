"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../language/LanguageProvider";

const brands = [
  {
    id: 1,
    image: "/assets/lira logo.png",
    alt: "Lira Brand",
    link: "/products/lira-brand",
    group: "ushqimore",
  },
  {
    id: 2,
    image: "/assets/kestrina logo.png",
    alt: "Kestrina",
    link: "/products/kestrina",
    group: "ushqimore",
  },
  {
    id: 3,
    image: "/assets/natural logo.png",
    alt: "Natural",
    link: "/products/natural",
    group: "ushqimore",
  },
  {
    id: 4,
    image: "/assets/frisch logo.png",
    alt: "Frisch",
    link: "/products/frisch",
    group: "jo ushqimore",
  },
];

const filters = ["show all", "jo ushqimore", "ushqimore"] as const;

export default function Brendet() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<(typeof filters)[number]>("show all");
  const filterLabel = {
    "show all": t.brands.showAll,
    "jo ushqimore": t.brands.nonFood,
    ushqimore: t.brands.food,
  };
  const visible = brands.filter((brand) => filter === "show all" || brand.group === filter);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
        <div className="relative mx-auto inline-block">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] select-none font-lemonmilk text-5xl uppercase text-neutral-200 sm:text-6xl lg:text-7xl"
          >
            {t.brands.title}
          </span>
          <h2 className="relative font-lemonmilk text-3xl uppercase text-black sm:text-4xl lg:text-5xl">
            {t.brands.title}
          </h2>
        </div>

        <div className="mt-3 flex justify-center text-[#c8102e]">
          <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden>
            <path d="M2 2L14 14L26 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="mt-10 font-lemonmilk-regular text-sm uppercase tracking-[0.18em] text-black sm:text-base">
          {t.brands.list}
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 text-sm text-black sm:text-base">
          {filters.map((item, index) => (
            <span key={item} className="inline-flex items-center gap-2">
              {index > 0 && <span className="text-black/70">|</span>}
              <button
                type="button"
                onClick={() => setFilter(item)}
                className={`cursor-pointer lowercase ${filter === item ? "font-semibold" : "font-normal"}`}
              >
                {filterLabel[item]}
              </button>
            </span>
          ))}
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-2 items-center justify-items-center gap-x-8 gap-y-14 md:grid-cols-4 md:gap-8">
          {visible.map((brand, index) => (
            <motion.div
              key={`${brand.id}-${filter}`}
              className="w-full"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={brand.link}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex w-full flex-col items-center"
              >
                <span className="flex h-40 w-full items-center justify-center sm:h-48 lg:h-64 xl:h-72">
                  <Image
                    src={brand.image}
                    alt={brand.alt}
                    width={420}
                    height={280}
                    className="h-full w-auto max-w-full object-contain transition duration-500 group-hover:scale-[1.04]"
                  />
                </span>
                <span className="grid w-full grid-rows-[0fr] transition-[grid-template-rows,margin] duration-500 ease-out group-hover:mt-5 group-hover:grid-rows-[1fr]">
                  <span className="overflow-hidden">
                    <span className="inline-flex translate-y-3 rounded-full bg-[#e10600] px-6 py-2.5 font-lemonmilk text-xs uppercase tracking-[0.14em] text-white opacity-0 transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
                      {t.brands.seeMore}
                    </span>
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="h-16 w-full sm:h-20"
        style={{
          backgroundColor: "#f7f7f7",
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 7px, rgba(0,0,0,0.07) 7px, rgba(0,0,0,0.07) 8px)",
        }}
      />
    </section>
  );
}

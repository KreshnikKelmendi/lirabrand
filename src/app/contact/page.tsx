"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../components/language/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

const headerUnderlay =
  "-mt-[78px] pt-[78px] sm:-mt-[92px] sm:pt-[92px] lg:-mt-[168px] lg:pt-[168px] xl:-mt-[188px] xl:pt-[188px]";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.4422524543024!2d21.085321474998832!3d42.36922343452427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13547faaa67990d3%3A0x70d2ce2534fac529!2sR206%2C%2070000!5e1!3m2!1sen!2sus!4v1763922723112!5m2!1sen!2sus";

function EchoHeading({
  label,
  className = "",
  size = "hero",
}: {
  label: string;
  className?: string;
  size?: "hero" | "map";
}) {
  const ghost =
    size === "hero"
      ? "text-[clamp(3.5rem,14vw,9rem)]"
      : "text-[clamp(2.5rem,10vw,7rem)]";
  const main =
    size === "hero"
      ? "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
      : "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl";

  return (
    <div className={`relative flex flex-col items-center text-center ${className}`}>
      <span
        className={`pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-lemonmilk font-bold uppercase leading-none text-white/20 ${ghost}`}
        aria-hidden
      >
        {label}
      </span>
      <h1 className={`relative font-lemonmilk font-bold uppercase tracking-wide text-white ${main}`}>
        {label}
      </h1>
      <svg
        className="relative mt-2 h-4 w-4 text-white/90 sm:h-5 sm:w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contactPage;
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`relative min-h-[calc(100vh-12rem)] overflow-hidden bg-[#e10600] text-white ${headerUnderlay}`}
    >
      <div className="px-5 pb-16 pt-6 sm:pb-20 sm:pt-8 lg:px-16 lg:pb-24 lg:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <EchoHeading label={c.title} size="hero" />
        </motion.div>

        <div className="mt-12 grid w-full grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            className="w-full space-y-8 font-armin text-base leading-relaxed text-white/95 sm:text-lg lg:text-xl lg:leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
          >
            <div className="space-y-4">
              <p>{c.intro1}</p>
              <p>{c.intro2}</p>
            </div>

            <div className="space-y-6 text-white">
              <div>
                <p className="font-lemonmilk text-sm font-bold uppercase tracking-wide sm:text-base">
                  {c.emailLabel}
                </p>
                <a
                  href="mailto:ntpshlira@yahoo.com"
                  className="mt-1 block text-lg hover:underline sm:text-xl"
                >
                  ntpshlira@yahoo.com
                </a>
              </div>
              <div>
                <p className="font-lemonmilk text-sm font-bold uppercase tracking-wide sm:text-base">
                  {c.mobileLabel}
                </p>
                <a href="tel:+38344779000" className="mt-1 block text-lg hover:underline sm:text-xl">
                  +383 44 779 000
                </a>
                <a href="tel:+38344171676" className="block text-lg hover:underline sm:text-xl">
                  +383 44 171 676
                </a>
              </div>
              <div>
                <p className="font-lemonmilk text-sm font-bold uppercase tracking-wide sm:text-base">
                  {c.addressLabel}
                </p>
                <p className="mt-1 text-lg leading-snug sm:text-xl">{c.address}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-center lg:items-end lg:pt-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease }}
          >
            <button
              type="button"
              onClick={() => setShowMap((open) => !open)}
              aria-expanded={showMap}
              aria-label={c.mapTitle}
              className="group cursor-pointer rounded-lg px-2 py-3 text-center transition duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:px-4"
            >
              <div className="relative">
                <span
                  className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-lemonmilk text-[clamp(2rem,9vw,5.5rem)] font-bold uppercase leading-none text-white/20 transition duration-300 group-hover:text-white/30"
                  aria-hidden
                >
                  {c.mapTitle}
                </span>
                <span className="relative block font-lemonmilk text-2xl font-bold uppercase tracking-wide text-white transition duration-300 group-hover:scale-[1.03] group-hover:text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                  {c.mapTitle}
                </span>
              </div>
              <svg
                className={`mx-auto mt-2 h-4 w-4 text-white transition duration-300 group-hover:translate-y-0.5 sm:h-5 sm:w-5 ${showMap ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="mt-2 block text-xs uppercase tracking-wider text-white/70 opacity-0 transition duration-300 group-hover:opacity-100 sm:text-sm">
                {c.mapHint}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {showMap && (
                <motion.div
                  className="mt-8 w-full overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.25)] lg:mt-10"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <iframe
                    src={MAP_EMBED}
                    title="Lira Mark location"
                    className="h-72 w-full sm:h-96 lg:h-112"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

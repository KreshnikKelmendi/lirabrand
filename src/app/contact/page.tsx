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
  chevronClassName = "",
}: {
  label: string;
  className?: string;
  size?: "hero" | "map";
  chevronClassName?: string;
}) {
  const ghost =
    size === "hero"
      ? "text-[clamp(1.75rem,7vw,4rem)]"
      : "text-[clamp(1.25rem,5.5vw,2.75rem)]";
  const main =
    size === "hero"
      ? "text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem]"
      : "text-xl sm:text-2xl lg:text-3xl xl:text-[2rem]";

  return (
    <div className={`relative flex flex-col items-center text-center ${className}`}>
      <span
        className={`pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-lemonmilk font-light uppercase leading-none text-white/15 ${ghost}`}
        aria-hidden
      >
        {label}
      </span>
      <h1 className={`relative font-lemonmilk font-semibold uppercase tracking-wide text-white ${main}`}>
        {label}
      </h1>
      <svg
        className={`relative mt-2 h-4 w-4 text-white/90 transition-transform duration-300 sm:h-5 sm:w-5 ${chevronClassName}`}
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
      <div className="container pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24 lg:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <EchoHeading label={c.title} size="hero" />
        </motion.div>

        <div className="mt-10 grid w-full grid-cols-1 items-start gap-14 sm:mt-12 lg:mt-16 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            className="w-full space-y-8 text-left font-armin sm:max-lg:mx-auto sm:max-lg:max-w-xl lg:max-w-none"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
          >
            <div className="space-y-4 text-base font-semibold leading-relaxed text-black sm:text-lg lg:text-xl">
              <p>{c.intro1}</p>
              <p>{c.intro2}</p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-lemonmilk text-sm font-semibold uppercase tracking-wide text-black sm:text-base">
                  {c.emailLabel}
                </p>
                <a
                  href="mailto:ntpshlira@yahoo.com"
                  className="mt-1 block text-lg text-white hover:underline sm:text-xl"
                >
                  ntpshlira@yahoo.com
                </a>
              </div>
              <div>
                <p className="font-lemonmilk text-sm font-semibold uppercase tracking-wide text-black sm:text-base">
                  {c.mobileLabel}
                </p>
                <a
                  href="tel:+38344779000"
                  className="mt-1 block text-lg text-white hover:underline sm:text-xl"
                >
                  +383 44 779 000
                </a>
                <a
                  href="tel:+38344171676"
                  className="block text-lg text-white hover:underline sm:text-xl"
                >
                  +383 44 171 676
                </a>
              </div>
              <div>
                <p className="font-lemonmilk text-sm font-semibold uppercase tracking-wide text-black sm:text-base">
                  {c.addressLabel}
                </p>
                <p className="mt-1 text-lg leading-snug text-white sm:text-xl">{c.address}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-center lg:items-center lg:justify-start lg:pt-4 xl:pt-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease }}
          >
            <button
              type="button"
              onClick={() => setShowMap((open) => !open)}
              aria-expanded={showMap}
              aria-label={c.mapTitle}
              className="group w-full cursor-pointer rounded-lg px-2 py-2 text-center transition duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:py-3 lg:px-4"
            >
              <EchoHeading
                label={c.mapTitle}
                size="map"
                className="pointer-events-none"
                chevronClassName={showMap ? "rotate-180" : "group-hover:translate-y-0.5"}
              />
              <span className="-mt-1 block text-xs uppercase tracking-wider text-white/80 opacity-0 transition duration-300 group-hover:opacity-100 sm:text-sm">
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

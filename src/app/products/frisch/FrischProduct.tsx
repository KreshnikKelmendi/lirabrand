"use client";

import Image from "next/image";
import { useId } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../components/language/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

const rollMotion = {
  hidden: { opacity: 0, y: 36, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, delay: 0.08 * i, ease },
  }),
};

const watermarkText =
  "pointer-events-none font-lemonmilk font-bold uppercase text-[#b8d42a]";
const watermarkBg = `${watermarkText} absolute z-0`;

function PremiumBadge({ label }: { label: string }) {
  const arcId = useId();

  return (
    <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28 lg:h-32 lg:w-32">
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
        <circle cx="60" cy="60" r="54" fill="#2d8f4e" stroke="#1e6b38" strokeWidth="3" />
        <path
          d="M38 62 L52 76 L84 44"
          fill="none"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <path id={arcId} d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
        </defs>
        <text fill="white" fontSize="9" fontWeight="700" letterSpacing="2">
          <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
            {label}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

function FrischKitchenShowcase() {
  const { t } = useLanguage();
  const k = t.frischPage.kitchenXxl;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative bg-[#48bd4a]">
        <div className="relative grid w-full grid-cols-1 items-end gap-6 px-5 pb-2 pt-10 sm:pt-12 lg:min-h-104 lg:grid-cols-2 lg:gap-8 lg:px-16 lg:pb-4 lg:pt-14 xl:min-h-112">
          <div className="relative z-10 w-full">
            <p
              className={`${watermarkBg} left-[2%] top-[2%] text-4xl sm:text-5xl lg:left-[4%] lg:top-[4%] lg:text-6xl xl:text-7xl`}
            >
              {k.watermarkSoft}
            </p>
            <p
              className={`${watermarkBg} bottom-[18%] left-0 top-auto text-4xl sm:text-5xl lg:bottom-[20%] lg:text-[3.25rem] xl:text-6xl`}
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {k.watermarkQuality}
            </p>

            <div className="relative flex w-full items-end justify-center lg:justify-start">
              <Image
                src="/assets/frischProduct/1.png"
                alt={k.imageAlt}
                width={900}
                height={1100}
                className="h-auto w-full min-w-0 flex-1 object-contain object-bottom drop-shadow-[0_24px_32px_rgba(0,0,0,0.28)]"
              />
              <p
                className={`${watermarkText} relative z-0 -ml-1 shrink-0 self-center pb-[28%] text-4xl sm:-ml-2 sm:text-5xl lg:-ml-3 lg:text-6xl xl:text-7xl`}
                style={{ writingMode: "vertical-rl" }}
              >
                {k.watermarkPractical}
              </p>
            </div>
          </div>

          <div className="relative z-10 flex w-full flex-col justify-center pb-6 lg:pb-16 lg:pt-8">
            <h3 className="font-lemonmilk text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-[2.65rem]">
              {k.title}
            </h3>
            <p className="mt-2 font-lemonmilk text-xl font-bold leading-snug text-white sm:text-2xl lg:mt-3 lg:text-3xl xl:text-4xl">
              {k.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-[#01a401] px-5 py-8 shadow-[0_-14px_28px_rgba(0,0,0,0.28)] sm:py-10 lg:px-16 lg:py-12 lg:shadow-[0_-18px_36px_rgba(0,0,0,0.32)]">
        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-end justify-start">
            <svg
              viewBox="0 0 64 64"
              className="h-14 w-14 text-[#84e026] sm:h-16 sm:w-16 lg:h-18 lg:w-18"
              aria-hidden
            >
              <path
                d="M12 12 L52 52 M52 12 L12 52"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:justify-end lg:gap-10">
            <div>
              <p className="font-lemonmilk text-3xl font-bold leading-none text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
                {k.cellulose}
              </p>
              <p className="mt-3 font-lemonmilk text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                {k.softLine}
              </p>
            </div>
            <PremiumBadge label={k.premiumBadge} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FrischTrashBagsShowcase() {
  const { t } = useLanguage();
  const b = t.frischPage.trashBags;

  const leftColumn = ["2", "3"] as const;
  const middleColumn = ["4", "5"] as const;
  const rightRoll = "6";

  let rollIndex = 0;

  return (
    <section className="relative w-full bg-[#01a401] px-5 pb-12 pt-10 sm:pb-14 sm:pt-12 lg:px-16 lg:pb-16 lg:pt-14">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease }}
      >
        <h3 className="font-lemonmilk text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl xl:text-4xl">
          {b.title}
          <br />
          {b.sizes}
        </h3>
      </motion.div>

      <div className="mt-4 grid w-full grid-cols-2 gap-x-2 gap-y-0 sm:mt-8 sm:gap-x-4 sm:gap-y-1 lg:mt-8 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-0 xl:gap-x-6">
        {[leftColumn, middleColumn].map((column, colIdx) => (
          <div key={colIdx} className="flex w-full flex-col gap-0 sm:gap-2 lg:gap-4">
            {column.map((id) => {
              const i = rollIndex++;
              return (
                <motion.div
                  key={id}
                  className="flex w-full justify-center leading-none lg:justify-start [&+&]:-mt-1 sm:[&+&]:mt-0"
                  custom={i}
                  variants={rollMotion}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <Image
                    src={`/assets/frischProduct/${id}.png`}
                    alt={b.alts[id]}
                    width={900}
                    height={500}
                    className="h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.22)]"
                  />
                </motion.div>
              );
            })}
          </div>
        ))}

        <div className="col-span-2 flex w-full items-center justify-center pt-0.5 sm:pt-1 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:items-center lg:self-center lg:pt-0">
          <motion.div
            className="flex w-full max-w-[88%] justify-center sm:max-w-none lg:max-h-full lg:w-full"
            custom={rollIndex}
            variants={rollMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Image
              src={`/assets/frischProduct/${rightRoll}.png`}
              alt={b.alts[rightRoll]}
              width={900}
              height={500}
              className="h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.22)] lg:max-h-[85%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function FrischProduct() {
  return (
    <>
      <FrischKitchenShowcase />
      <FrischTrashBagsShowcase />
    </>
  );
}

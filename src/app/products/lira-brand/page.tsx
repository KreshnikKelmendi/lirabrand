"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../../components/language/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

const headerUnderlay =
  "-mt-[78px] pt-[78px] sm:-mt-[92px] sm:pt-[92px] lg:-mt-[168px] lg:pt-[168px] xl:-mt-[188px] xl:pt-[188px]";

function LiraBrandHero() {
  const { t } = useLanguage();
  const h = t.liraBrandPage;

  return (
    <div className={`relative overflow-x-clip bg-[#c11b1a] ${headerUnderlay}`}>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      />

      <div className="relative z-10 px-4 pb-2 pt-1 text-center text-white sm:px-6 sm:pt-2 lg:px-10 lg:pb-3 lg:pt-3">
        <p className="font-lemonmilk text-base tracking-[0.14em] sm:text-lg lg:text-xl xl:text-2xl">
          {h.brand}
        </p>
        <svg
          className="mx-auto mt-0.5 h-3.5 w-3.5 text-white/90 sm:mt-1 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative z-10 w-full pb-1 pt-0 sm:pb-2">
        <div className="pointer-events-none absolute right-[3%] top-0 z-20 max-w-[46%] text-right text-white sm:right-[5%] md:right-[6%] lg:right-[8%]">
          <p className="font-lemonmilk text-sm font-bold leading-[1.05] sm:text-2xl lg:text-4xl xl:text-[2.75rem] 2xl:text-[3rem]">
            {h.taglineBold}
          </p>
          <p className="font-bellarina text-lg leading-none sm:text-3xl lg:text-5xl xl:text-[3.35rem] 2xl:text-[3.75rem]">
            {h.taglineScript}
          </p>
        </div>

        <div className="relative flex w-full flex-row items-end justify-center px-0 pb-0 pt-5 sm:pt-19 md:pt-22 lg:pt-0">
          <Image
            src="/assets/lirabrandProducts/2.png"
            alt="Lira Brand Premium tea boxes"
            width={920}
            height={980}
            priority
            className="relative z-10 h-auto w-[35vw] max-w-66 shrink-0 object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)] sm:max-w-74 md:h-120 md:w-auto md:max-w-none lg:h-128 xl:h-144 2xl:h-168"
          />

          <Image
            src="/assets/lira logo.png"
            alt="Lira Brand"
            width={520}
            height={560}
            priority
            className="relative z-30 -mx-4 h-auto w-[27vw] max-w-44 shrink-0 object-contain object-bottom drop-shadow-[0_16px_32px_rgba(0,0,0,0.3)] sm:-mx-6 sm:max-w-50 md:-mx-10 md:h-80 md:w-auto md:max-w-none lg:-mx-12 lg:h-88 xl:h-96 2xl:-mx-14 2xl:h-112"
          />

          <Image
            src="/assets/lirabrandProducts/3.png"
            alt="Lira Brand tea pouches"
            width={920}
            height={980}
            priority
            className="relative z-10 h-auto w-[35vw] max-w-66 shrink-0 object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)] sm:max-w-74 md:h-120 md:w-auto md:max-w-none lg:h-128 xl:h-144 2xl:h-168"
          />
        </div>
      </div>

      <div className="relative z-10 h-2 bg-[#9b0606]" />
    </div>
  );
}

function TeaBand({
  title,
  subtitle,
  packs,
  lines,
  showHeader = true,
  packSpread = false,
}: {
  title: string;
  subtitle: string;
  packs: {
    src: string;
    alt: string;
    size: string;
    shift?: string;
    /** Extra margin after this pack when packSpread (uneven spacing) */
    spreadAfter?: string;
  }[];
  lines: string[];
  showHeader?: boolean;
  packSpread?: boolean;
}) {
  const detailLines = lines.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#c21c1e] pt-12 text-white sm:pt-14 lg:pt-16">
      <div className="container w-full">
      {showHeader && (
        <div className="text-center">
          <motion.h2
            className="font-lemonmilk text-3xl uppercase tracking-wide sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="mt-1 font-bellarina text-4xl leading-none sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
          >
            {subtitle}
          </motion.p>
        </div>
      )}
      <div
        className={
          packSpread
            ? "mx-auto w-full text-center md:max-w-4xl"
            : "text-center"
        }
      >
        <div
          className={`mx-auto mt-6 flex flex-nowrap items-end justify-center sm:mt-8 ${
            packSpread
              ? "max-md:max-w-75 sm:max-md:max-w-84 md:max-w-none"
              : ""
          }`}
        >
          {packs.map((pack, index) => (
            <motion.div
              key={pack.src}
              className={`flex min-w-0 shrink items-end ${
                packSpread
                  ? [
                      index > 0
                        ? "max-md:-ml-13 sm:max-md:-ml-18 max-md:mb-0"
                        : "max-md:mb-0",
                      pack.spreadAfter ?? "",
                      pack.shift ?? "",
                    ].join(" ")
                  : (pack.shift ??
                    (index === 0 ? "" : "-ml-24 sm:-ml-40 lg:-ml-56"))
              }`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.65,
                delay: 0.15 + index * 0.16,
                ease,
              }}
            >
              <Image
                src={pack.src}
                alt={pack.alt}
                width={1000}
                height={1000}
                className={`h-auto w-auto object-contain object-bottom ${pack.size}`}
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-5 pb-2 sm:mt-6 sm:pb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            duration: 0.55,
            delay: 0.2 + packs.length * 0.16,
            ease,
          }}
        >
          {lines[0] && (
            <p className="font-lemonmilk text-lg font-bold leading-snug sm:text-xl lg:text-2xl">
              {lines[0]}
            </p>
          )}
          {detailLines.length > 0 && (
            <p className="mt-2 font-lemonmilk text-lg font-bold leading-snug text-white/95 sm:text-xl lg:text-2xl">
              {detailLines.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          )}
        </motion.div>
      </div>
      </div>
      <div className="mt-10 h-2 bg-[#9b0606] sm:mt-12" />
    </section>
  );
}

export default function LiraBrandPage() {
  const { t } = useLanguage();

  return (
    <div className="min-w-0 max-w-full overflow-x-clip">
      <LiraBrandHero />

      <TeaBand
        title={t.premium.title}
        subtitle={t.premium.subtitle}
        lines={[t.premium.line1, t.premium.line2]}
        packs={[
          { src: "/assets/lirabrandProducts/4.png", alt: "Lira Brand Premium 400 g", size: "h-64 w-auto sm:h-80 lg:h-[28rem]" },
          { src: "/assets/lirabrandProducts/5.png", alt: "Lira Brand Premium 800 g", size: "h-80 w-auto sm:h-[28rem] lg:h-[36rem]" },
        ]}
      />
      <TeaBand
        title={t.tea444.title}
        subtitle={t.tea444.subtitle}
        lines={[t.tea444.line1, t.tea444.line2]}
        packs={[
          { src: "/assets/lirabrandProducts/6.png", alt: "Lira Brand 444A 300 g", size: "h-64 w-auto sm:h-80 lg:h-[28rem]" },
          { src: "/assets/lirabrandProducts/7.png", alt: "Lira Brand 444A 600 g", size: "h-80 w-auto sm:h-[28rem] lg:h-[36rem]" },
        ]}
      />
      <TeaBand
        title={t.gold.title}
        subtitle={t.gold.subtitle}
        lines={[t.gold.line1, t.gold.line2, t.gold.line3]}
        packs={[
          { src: "/assets/lirabrandProducts/8.png", alt: "Lira Brand Gold 200 g", size: "h-56 w-auto sm:h-72 lg:h-[24rem]" },
          { src: "/assets/lirabrandProducts/9.png", alt: "Lira Brand Gold 400 g", size: "h-72 w-auto sm:h-96 lg:h-[32rem]" },
          { src: "/assets/lirabrandProducts/10.png", alt: "Lira Brand Gold 800 g", size: "h-56 w-auto sm:h-72 lg:h-[24rem]" },
        ]}
      />
      <TeaBand
        title={t.traditional.title}
        subtitle={t.traditional.subtitle}
        packSpread
        lines={[t.traditional.line1, t.traditional.line2, t.traditional.line3]}
        packs={[
          {
            src: "/assets/lirabrandProducts/11.png",
            alt: "Lira Brand Traditional 200 g",
            size:
              "max-md:h-[7.25rem] max-md:max-w-[24vw] w-auto sm:max-md:h-32 sm:max-md:max-w-[22vw] md:h-72 lg:h-[32rem]",
            shift: "relative z-30",
            spreadAfter: "md:mr-0.5 lg:mr-1",
          },
          {
            src: "/assets/lirabrandProducts/12.png",
            alt: "Lira Brand Traditional 400 g",
            size:
              "max-md:h-[8.75rem] max-md:max-w-[28vw] w-auto sm:max-md:h-36 sm:max-md:max-w-[26vw] md:h-56 md:origin-bottom md:scale-[0.98] lg:h-[24rem] lg:scale-[0.99]",
            shift: "relative z-20 md:ml-0",
            spreadAfter: "md:mr-0.5 lg:mr-1",
          },
          {
            src: "/assets/lirabrandProducts/13.png",
            alt: "Lira Brand Traditional 800 g",
            size:
              "max-md:h-[7.25rem] max-md:max-w-[24vw] w-auto sm:max-md:h-32 sm:max-md:max-w-[22vw] md:h-56 md:origin-bottom md:scale-[0.88] md:opacity-[0.98] lg:h-[24rem] lg:scale-[0.92]",
            shift: "relative z-10 md:-ml-5 lg:-ml-6",
          },
        ]}
      />
      <TeaBand
        title={t.teaSack.title}
        subtitle={t.teaSack.subtitle}
        lines={[t.teaSack.line1]}
        packs={[
          {
            src: "/assets/lirabrandProducts/14.png",
            alt: "Lira Brand Tea Sack 444A 10 kg",
            size: "h-72 w-auto sm:h-[30rem] lg:h-[38rem] xl:h-[44rem]",
          },
          {
            src: "/assets/lirabrandProducts/15.png",
            alt: "Lira Brand Tea Sack 10 kg",
            size: "h-72 w-auto sm:h-[30rem] lg:h-[38rem] xl:h-[44rem]",
            shift: "-ml-32 sm:-ml-60 lg:-ml-[19rem] xl:-ml-[22rem]",
          },
        ]}
      />
    </div>
  );
}

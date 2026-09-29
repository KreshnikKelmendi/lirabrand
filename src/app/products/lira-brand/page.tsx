"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../../components/language/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

function TeaBand({
  title,
  subtitle,
  packs,
  lines,
}: {
  title: string;
  subtitle: string;
  packs: { src: string; alt: string; size: string; shift?: string }[];
  lines: string[];
}) {
  return (
    <section className="relative -mx-5 overflow-hidden bg-[#c21c1e] px-6 pt-12 text-center text-white sm:pt-14 lg:-mx-16 lg:pt-16">
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
      <div className="mx-auto mt-6 flex flex-nowrap items-end justify-center sm:mt-8">
        {packs.map((pack, index) => (
          <motion.div
            key={pack.src}
            className={
              pack.shift ?? (index === 0 ? "" : "-ml-24 sm:-ml-40 lg:-ml-56")
            }
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.15 + index * 0.16, ease }}
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
      <motion.p
        className="mx-auto mt-4 max-w-4xl text-lg font-bold leading-snug sm:text-xl lg:text-2xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.55, delay: 0.2 + packs.length * 0.16, ease }}
      >
        {lines.map((line, index) => (
          <span key={line}>
            {index > 0 && <br />}
            {line}
          </span>
        ))}
      </motion.p>
      <div className="-mx-6 mt-10 h-2 bg-[#9b0606] sm:mt-12" />
    </section>
  );
}

export default function LiraBrandPage() {
  const { t } = useLanguage();

  return (
    <div className="min-w-0 max-w-full overflow-x-clip px-5 lg:px-16">
      <div className="relative -mx-5 -mt-[78px] bg-[#c21c1e] pt-[78px] sm:-mt-[92px] sm:pt-[92px] lg:-mx-16 lg:-mt-[168px] lg:pt-[168px] xl:-mt-[188px] xl:pt-[188px]">
        <Image
          src="/assets/main/lirabrand-main.jpg"
          alt="Lira Brand"
          width={1402}
          height={459}
          priority
          className="h-auto w-full"
        />
        <div className="h-2 bg-[#9b0606]" />
      </div>

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
        lines={[t.traditional.line1, t.traditional.line2, t.traditional.line3]}
        packs={[
          {
            src: "/assets/lirabrandProducts/11.png",
            alt: "Lira Brand Traditional 200 g",
            size: "h-64 w-auto sm:h-80 lg:h-[26rem] xl:h-[31rem]",
            shift: "mb-14 sm:mb-20 lg:mb-24 xl:mb-28",
          },
          {
            src: "/assets/lirabrandProducts/12.png",
            alt: "Lira Brand Traditional 400 g",
            size: "h-72 w-auto sm:h-96 lg:h-[32rem] xl:h-[37rem]",
            shift: "-ml-10 mb-8 sm:-ml-14 sm:mb-10 lg:-ml-16 lg:mb-14 xl:-ml-20 xl:mb-16",
          },
          {
            src: "/assets/lirabrandProducts/13.png",
            alt: "Lira Brand Traditional 800 g",
            size: "h-80 w-auto sm:h-[28rem] lg:h-[39rem] xl:h-[45rem]",
            shift: "-ml-24 sm:-ml-32 lg:-ml-40 xl:-ml-48",
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

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

function PremiumBadge({ label }: { label: string }) {
  const arcId = useId();

  return (
    <div className="relative h-[110px] w-[110px] shrink-0 sm:h-[130px] sm:w-[130px] lg:h-[150px] lg:w-[150px]">
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
    <section className="relative w-full overflow-hidden bg-[#48bd4a]">
      <div className="relative flex w-full flex-col justify-between px-8 pt-12 pb-8 lg:px-20 lg:pt-16 lg:pb-10">
        
        {/* Rreshti i sipërm: Fjala "Butësi" */}
        <div className="relative w-full z-20 pl-[90px] sm:pl-[140px] lg:pl-[180px]">
          <p className="font-lemonmilk font-bold uppercase text-[#b8d42a] text-[56px] sm:text-[76px] lg:text-[96px] xl:text-[112px] leading-none select-none">
            {k.watermarkSoft}
          </p>
        </div>

        {/* Pjesa e mesit: Produkti dhe watermark-et anësore */}
        <div className="relative my-4 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          <div className="relative flex items-center justify-start lg:col-span-7">
            <div className="relative flex items-end">
              
              {/* Fjala vertikale "Cilësi" majtas */}
              <p
                className="absolute -left-6 bottom-[90px] z-20 select-none font-lemonmilk text-[56px] font-bold uppercase text-[#b8d42a] sm:-left-9 sm:text-[72px] lg:text-[88px] xl:text-[104px]"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {k.watermarkQuality}
              </p>

              {/* Imazhi i produktit */}
              <Image
                src="/assets/frischProduct/1.png"
                alt={k.imageAlt}
                width={1200}
                height={1400}
                className="z-10 ml-7 h-auto w-[360px] object-contain drop-shadow-[0_28px_36px_rgba(0,0,0,0.32)] sm:ml-10 sm:w-[460px] lg:w-[560px] xl:w-[640px]"
                priority
              />

              {/* Fjala vertikale "Praktike" - në mobile pak më djathtas, kurse në lg/xl mbivendoset si në dizajn */}
              <p
                className="absolute -right-6 bottom-[70px] z-20 select-none font-lemonmilk text-[56px] font-bold uppercase text-[#b8d42a] sm:-right-8 sm:text-[72px] lg:right-4 lg:text-[88px] xl:right-7 xl:text-[104px]"
                style={{ writingMode: "vertical-rl" }}
              >
                {k.watermarkPractical}
              </p>

            </div>
          </div>

          {/* Kolona e djathtë: Titulli dhe Nëntitulli */}
          <div className="flex flex-col justify-center lg:col-span-5 z-20">
            <h3 className="font-lemonmilk text-[28px] sm:text-[38px] lg:text-[46px] xl:text-[54px] font-bold leading-tight text-white">
              {k.title}
            </h3>
            <p className="mt-4 font-lemonmilk text-[22px] font-bold leading-snug text-white sm:text-[30px] lg:text-[38px] xl:text-[46px]">
              {k.subtitle}
            </p>
          </div>
        </div>

        {/* Pjesa e poshtme */}
        <div className="relative mt-8 flex flex-col items-start justify-between gap-8 border-t border-[#3ca33e] pt-8 sm:flex-row sm:items-center">
          
          <div className="flex items-center">
            <svg
              viewBox="0 0 64 64"
              className="h-14 w-14 text-[#b8d42a] sm:h-[68px] sm:w-[68px]"
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

          <div className="flex w-full items-center justify-between gap-10 sm:w-auto sm:justify-end">
            <div>
              <p className="font-lemonmilk text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-none text-white">
                {k.cellulose}
              </p>
              <p className="mt-2.5 font-lemonmilk text-[26px] font-bold text-black sm:text-[34px] lg:text-[42px]">
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

function TrashRollImage({
  id,
  alt,
  className,
}: {
  id: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={`/assets/frischProduct/${id}.png`}
      alt={alt}
      width={1000}
      height={600}
      className={`h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.22)] ${className ?? ""}`}
    />
  );
}

function FrischTrashBagsShowcase() {
  const { t } = useLanguage();
  const b = t.frischPage.trashBags;

  const rowTop = ["2", "4"] as const;
  const rowBottom = ["3", "5"] as const;
  const rollRight = "6";

  let rollIndex = 0;

  /** Same pull on both bottom cells so row 2 stays one straight line */
  const trashRow2Pull =
    "-mt-8 max-[380px]:-mt-7 sm:-mt-9 md:-mt-10 lg:-mt-[clamp(3rem,32%,5rem)] xl:-mt-[clamp(3.25rem,34%,5.25rem)]";

  return (
    <section className="relative h-fit w-full bg-[#01a401] pb-8 pt-8 sm:pb-9 sm:pt-9 lg:pb-10 lg:pt-10">
      <div className="container">
      <motion.div
        className="w-full text-left"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease }}
      >
        <h3 className="font-lemonmilk text-xl font-bold leading-[1.15] text-white sm:text-2xl lg:text-3xl xl:text-4xl">
          {b.title}
          <br />
          {b.sizes}
        </h3>
      </motion.div>

      <div className="mt-3 grid w-full grid-cols-2 grid-rows-[auto_auto_auto] items-start gap-x-1 gap-y-0 sm:mt-3.5 sm:gap-x-2 lg:mt-4 lg:grid-cols-[1fr_1fr_1.08fr] lg:grid-rows-2 lg:items-stretch lg:gap-x-3 xl:gap-x-4">
        {rowTop.map((id, col) => (
          <motion.div
            key={id}
            className={`row-start-1 flex min-w-0 justify-center leading-none lg:justify-start ${col === 1 ? "col-start-2" : "col-start-1"}`}
            custom={rollIndex++}
            variants={rollMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <TrashRollImage id={id} alt={b.alts[id]} />
          </motion.div>
        ))}

        {rowBottom.map((id, col) => (
          <motion.div
            key={id}
            className={`row-start-2 flex min-w-0 justify-center leading-none lg:justify-start ${col === 1 ? "col-start-2" : "col-start-1"} ${trashRow2Pull}`}
            custom={rollIndex++}
            variants={rollMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <TrashRollImage id={id} alt={b.alts[id]} />
          </motion.div>
        ))}

        <motion.div
          className="col-span-2 row-start-3 flex items-center justify-center -mt-10 sm:-mt-11 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:h-full lg:min-h-0"
          custom={rollIndex++}
          variants={rollMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TrashRollImage id={rollRight} alt={b.alts[rollRight]} className="w-full max-w-[90%] lg:max-w-none" />
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
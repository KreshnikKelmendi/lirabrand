"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "../../components/language/LanguageProvider";
import KestrinaProduct from "./KestrinaProduct";

const ease = [0.22, 1, 0.36, 1] as const;

const headerUnderlay =
  "-mt-[78px] pt-[78px] sm:-mt-[92px] sm:pt-[92px] lg:-mt-[168px] lg:pt-[168px] xl:-mt-[188px] xl:pt-[188px]";

function CurvedArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20.4468 104.344C10.6022 92.2323 3.02094 78.2152 1.16844 62.6453C-0.170748 51.2857 2.04464 39.9038 6.7145 29.6352C10.0717 22.2674 14.7325 15.5028 20.1192 9.50776C21.3802 8.10964 22.6919 6.70191 24.065 5.37611C18.9749 6.74289 13.8748 8.11973 8.71181 9.19118C6.84543 9.57722 6.05581 6.68416 7.94251 6.29834C15.124 4.81202 22.2103 2.7051 29.2985 0.902914C30.4342 0.610524 31.3243 1.66632 31.138 2.75107C29.7722 10.2421 28.4166 17.7433 27.0508 25.2343C26.707 27.1299 23.8177 26.3267 24.1616 24.4514C25.2519 18.3997 26.3624 12.3482 27.4527 6.29645C18.6332 13.9504 11.589 24.5792 7.56205 35.3525C4.04473 44.7601 2.87844 54.9752 4.45317 64.9966C6.6302 78.8332 13.7358 91.4639 22.5263 102.274C23.7339 103.77 21.6445 105.87 20.4266 104.364L20.4468 104.344Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function KestrinaPage() {
  const { t } = useLanguage();
  const k = t.kestrinaPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-w-0 max-w-full overflow-x-clip">
      <div
        className={`relative overflow-hidden bg-[#cf0207] pb-14 text-white sm:pb-16 lg:pb-20 ${headerUnderlay}`}
      >
        {/* Starburst rays — origin above center, soft core, slow spin */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-1/2 top-[30%] h-[240vmax] w-[240vmax] -translate-x-1/2 -translate-y-1/2 sm:top-[28%] lg:top-[26%]"
            animate={{ rotate: 360 }}
            transition={{ duration: 96, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "repeating-conic-gradient(from 0deg at 50% 50%, #d80309 0deg 7deg, #b10105 7deg 14deg)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 28%, #cf0207 0%, #cf0207 16%, rgba(207,2,7,0.85) 24%, transparent 52%)",
            }}
          />
        </div>

        {/* Soft radial highlight over the rays */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 32%, rgba(255,255,255,0.10) 0%, transparent 58%)",
          }}
        />

        {/* Giant background text */}
        <div className="pointer-events-none absolute inset-0 z-1 overflow-hidden">
          <p className="absolute left-[1%] top-[42%] max-w-[52%] font-lemonmilk text-[clamp(2.75rem,10vw,8rem)] uppercase leading-[0.82] text-black/15 lg:left-[3%] lg:top-[46%]">
            {k.loveBox}
            <br />
            <span className="text-[0.4em]">{k.cubes}</span>
          </p>
          <p className="absolute right-[1%] top-[46%] max-w-[52%] text-right font-lemonmilk text-[clamp(2.25rem,8.5vw,6rem)] uppercase leading-[0.88] text-black/15 lg:right-[3%]">
            {k.familyPack}
            <br />
            <span className="text-[0.36em]">{k.classicWafers}</span>
          </p>
        </div>

        {/* Content */}
        <div className="container relative z-10 w-full">
          {/* Centered KESTRINA title + arrow + logo — overlays the product grid */}
          <motion.div
            className="relative z-20 flex -mb-6 flex-col items-center text-center sm:-mb-10 lg:-mb-18 xl:-mb-20"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <h1 className="font-lemonmilk text-3xl tracking-[0.18em] sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              {k.brand}
            </h1>

            {/* Down arrow */}
            <motion.svg
              className="mt-1 h-5 w-5 text-white/90 sm:h-6 sm:w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>

            {/* Kestrina logo below arrow */}
            <Image
              src="/assets/kestrina logo.png"
              alt="Kestrina"
              width={480}
              height={160}
              className="mt-1 h-20 w-auto sm:h-24 md:h-28 lg:h-32 xl:h-52"
              priority
            />
          </motion.div>

          {/* Product grid flows naturally under the centered block */}
          <div className="-mt-2 grid items-start gap-4 sm:-mt-4 lg:grid-cols-2 lg:gap-8 lg:-mt-6 xl:gap-12 xl:-mt-8">
            {/* Left column: product + slogan */}
            <div className="relative mt-0 flex flex-col items-center sm:-mt-2 lg:-mt-10 lg:items-start xl:-mt-12">
              {/* Curved arrow — closer to product */}
              <motion.div
                className="pointer-events-none absolute -top-12 z-20 hidden sm:block sm:-top-16 md:-top-20 lg:-top-24 xl:-top-28 2xl:-top-32"
                style={{
                  left: "58%",
                }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease }}
              >
                <CurvedArrow className="h-16 w-5 rotate-180 lg:h-20 lg:w-7 xl:h-24 xl:w-8" />
              </motion.div>

              <motion.div
                className="relative z-10 w-full max-w-lg lg:max-w-none lg:-translate-y-60 xl:max-w-none"
                initial={{ opacity: 0, y: 24, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: -8 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.85, ease }}
              >
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/assets/kestrinaProduct/1.png"
                    alt="Kestrina Love Box Cubes"
                    width={1000}
                    height={1000}
                    className="mx-auto h-[min(52vh,20rem)] w-auto max-w-none object-contain object-center drop-shadow-[0_28px_40px_rgba(0,0,0,0.35)] sm:h-[min(58vh,24rem)] lg:mx-0 lg:h-[min(70vh,34rem)] lg:object-top xl:h-[min(74vh,40rem)] 2xl:h-[min(78vh,44rem)]"
                    priority
                  />
                </motion.div>
              </motion.div>

              <motion.h2
                className="relative z-10 mt-2 max-w-lg text-center font-lemonmilk text-[1.65rem] font-bold uppercase leading-[1.05] tracking-wide text-white [-webkit-text-stroke:2.5px_#000] sm:mt-0 sm:text-3xl lg:-mt-24 lg:text-left lg:text-[2.05rem] xl:-mt-28 xl:text-4xl 2xl:-mt-32"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, delay: 0.2, ease }}
              >
                {k.slogan1}
                <br />
                {k.slogan2}
              </motion.h2>
            </div>

            {/* Right column: body text */}
            <motion.div
              className="relative z-10 flex min-w-0 flex-col items-start justify-center gap-5 lg:gap-6 lg:pl-2 lg:pt-6 xl:pl-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: 0.25, ease }}
            >
              <p className="max-w-xl font-armin text-base leading-[1.35] text-white/95 sm:text-lg lg:text-xl lg:leading-[1.38]">
                {k.body}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <KestrinaProduct />
    </div>
  );
}
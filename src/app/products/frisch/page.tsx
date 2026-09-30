"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

import { useLanguage } from "../../components/language/LanguageProvider";
import FrischProduct from "./FrischProduct";

const ease = [0.22, 1, 0.36, 1] as const;

const headerUnderlay =
  "-mt-[78px] pt-[78px] sm:-mt-[92px] sm:pt-[92px] lg:-mt-[168px] lg:pt-[168px] xl:-mt-[188px] xl:pt-[188px] 2xl:-mt-[210px] 2xl:pt-[210px]";

const heroGreen = "bg-[#48bd4a]";

function VerticalDashDivider({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 400"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <line
        x1="6"
        y1="0"
        x2="6"
        y2="400"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="40 48"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function BrandTitleBlock({ brand }: { brand: string }) {
  return (
    <div className="flex flex-col items-center">
      <h1
        className="
          font-lemonmilk
          text-[1.35rem]
          leading-none
          tracking-[0.04em]
          text-white
          sm:text-[1.5rem]
          lg:text-[1.7rem]
          xl:text-[1.9rem]
          2xl:text-[2.15rem]
        "
      >
        {brand}
      </h1>

      <svg
        className="
          mt-1
          h-3
          w-3
          text-white
          sm:h-3.5
          sm:w-3.5
          lg:mt-1.5
          lg:h-4
          lg:w-4
          2xl:h-5
          2xl:w-5
        "
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden
      >
        <path
          d="M6 9l6 6 6-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function FrischPage() {
  const { t } = useLanguage();
  const f = t.frischPage;

  const taglineLines = f.taglineLines ?? f.tagline.split(" ");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-w-0 max-w-full overflow-x-clip">
      <section
        className={`
          relative
          w-full
          overflow-hidden
          text-white
          ${heroGreen}
          ${headerUnderlay}
        `}
      >
        <div className="container relative border-b-[3px] border-[#008d25]">
          {/* =========================================================
              MOBILE / TABLET
          ========================================================= */}

          <div
            className="
              flex
              min-h-[520px]
              flex-col
              lg:hidden
              sm:min-h-[560px]
            "
          >
            {/* MOBILE HEADLINE */}

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <h2
                className="
                  relative
                  z-10
                  mt-6
                  max-w-full
                  font-lemonmilk
                  text-[1.75rem]
                  font-bold
                  leading-[0.9]
                  text-[#d5e83a]
                  sm:mt-8
                  sm:text-[2.15rem]
                "
              >
                <span className="block whitespace-nowrap">
                  {taglineLines[0].toLowerCase()}
                </span>

                <span
                  className="
                    block
                    pl-[clamp(2rem,12vw,4rem)]
                  "
                >
                  {taglineLines[1].toLowerCase()}
                </span>

                <span
                  className="
                    mt-1
                    flex
                    flex-wrap
                    items-center
                    gap-x-2
                    pl-0
                  "
                >
                  <span className="whitespace-nowrap">
                    {taglineLines[2].toLowerCase()}
                  </span>

                  <span
                    className="
                      shrink-0
                      rounded-sm
                      bg-[#1974d2]
                      px-2
                      py-1
                      font-lemonmilk-regular
                      text-[0.52rem]
                      font-bold
                      uppercase
                      leading-none
                      tracking-wide
                      text-white
                      sm:text-[0.6rem]
                    "
                  >
                    {f.newBadge}
                  </span>
                </span>
              </h2>

              {/* MOBILE LOGO */}

              <div
                className="
                  relative
                  ml-auto
                  -mt-3
                  w-[65%]
                  max-w-60
                  sm:mt-[-18px]
                  sm:w-[58%]
                  sm:max-w-[18rem]
                "
              >
                <Image
                  src="/assets/frisch logo.png"
                  alt="Frisch"
                  width={900}
                  height={650}
                  priority
                  className="
                    h-auto
                    w-full
                    object-contain
                    object-bottom
                  "
                />
              </div>
            </motion.div>

            {/* MOBILE BRAND */}

            <motion.div
              className="
                flex
                flex-col
                items-center
                pt-3
                sm:pt-5
              "
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease,
              }}
            >
              <BrandTitleBlock brand={f.brand} />

              <VerticalDashDivider
                className="
                  mt-3
                  h-[110px]
                  w-[7px]
                  sm:h-[130px]
                  sm:w-2
                "
              />
            </motion.div>

            {/* MOBILE DESCRIPTION */}

            <motion.div
              className="
                flex
                justify-center
                pb-8
                pt-4
                sm:pb-10
                sm:pt-5
              "
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.18,
                ease,
              }}
            >
              <div
                className="
                  w-full
                  max-w-[70vh]
                  space-y-4
                  font-armin
                  text-[0.78rem]
                  leading-[1.3]
                  text-white
                  sm:text-base
                  sm:leading-[1.35]
                "
              >
                <p>{f.body}</p>

                <p>{f.bodyLine2}</p>
              </div>
            </motion.div>
          </div>

          {/* =========================================================
              DESKTOP
          ========================================================= */}

          <div
            className="
              relative
              hidden
              min-h-[310px]
              grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)]
              items-start
              lg:grid
              xl:min-h-[340px]
              2xl:min-h-[390px]
            "
          >
            {/* =====================================================
                LEFT
            ===================================================== */}

            <motion.div
              className="relative h-full min-w-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div
                className="
                  relative
                  h-full
                  min-h-[307px]
                  w-full
                  xl:min-h-[337px]
                  2xl:min-h-[387px]
                "
              >
                {/* HEADLINE */}

                <h2
                  className="
                    relative
                    z-10
                    mt-8
                    max-w-full
                    font-lemonmilk
                    text-[2.55rem]
                    font-bold
                    leading-[0.9]
                    text-[#d5e83a]
                    xl:mt-9
                    xl:text-[2.95rem]
                    2xl:mt-[42px]
                    2xl:text-[3.55rem]
                    2xl:leading-[1.3]
                  "
                >
                  <span className="block whitespace-nowrap">
                    {taglineLines[0].toLowerCase()}
                  </span>

                  <span
                    className="
                      block
                      pl-[clamp(3rem,8vw,6.5rem)]
                      2xl:pl-28
                    "
                  >
                    {taglineLines[1].toLowerCase()}
                  </span>

                  <span
                    className="
                      mt-0.5
                      flex
                      flex-wrap
                      items-center
                      gap-x-3
                      pl-[clamp(0rem,1vw,1rem)]
                      2xl:gap-x-3.5
                    "
                  >
                    <span className="whitespace-nowrap">
                      {taglineLines[2].toLowerCase()}
                    </span>

                    <span
                      className="
                        shrink-0
                        rounded-sm
                        bg-[#1974d2]
                        px-2.5
                        py-1.5
                        font-lemonmilk-regular
                        text-[0.65rem]
                        font-bold
                        uppercase
                        leading-none
                        tracking-wide
                        text-white
                        2xl:px-3
                        2xl:py-1.5
                        2xl:text-[0.7rem]
                      "
                    >
                      {f.newBadge}
                    </span>
                  </span>
                </h2>

                {/* LOGO */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-0.5
                    right-0
                    z-20
                    w-[47%]
                    max-w-60
                    xl:w-[48%]
                    xl:max-w-68
                    2xl:bottom-[-3px]
                    2xl:w-[49%]
                    2xl:max-w-[20rem]
                  "
                >
                  <Image
                    src="/assets/frisch logo.png"
                    alt="Frisch"
                    width={900}
                    height={650}
                    priority
                    className="h-auto w-full object-contain object-bottom"
                  />
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                CENTER
            ===================================================== */}

            <div
              className="
                relative
                flex
                h-full
                min-h-[307px]
                flex-col
                items-center
                xl:min-h-[337px]
                2xl:min-h-[387px]
              "
            >
              <BrandTitleBlock brand={f.brand} />

              <VerticalDashDivider
                className="
                  mt-2
                  h-60
                  w-2
                  xl:h-[265px]
                  2xl:h-[310px]
                "
              />
            </div>

            {/* =====================================================
                RIGHT
            ===================================================== */}

            <motion.div
              className="
                relative
                min-w-0
                pl-6
                pr-0
                pt-[60px]
                xl:pl-8
                xl:pt-16
                2xl:pl-10
                2xl:pt-[72px]
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease,
              }}
            >
              <div
                className="
                  w-full
                  max-w-[70vh]
                  space-y-5
                  font-armin
                  text-base
                  leading-tight
                  text-white
                  xl:text-lg
                  xl:leading-[1.28]
                  2xl:space-y-6
                  2xl:text-[1.2rem]
                  2xl:leading-[1.3]
                "
              >
                <p>{f.body}</p>

                <p>{f.bodyLine2}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FrischProduct />
    </div>
  );
}
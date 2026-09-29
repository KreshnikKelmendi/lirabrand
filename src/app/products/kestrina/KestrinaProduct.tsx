"use client";

import Image from "next/image";
import { useLanguage } from "../../components/language/LanguageProvider";

function ProductRow({
  images,
  title,
  lines,
  imageClass,
}: {
  images: { src: string; alt: string }[];
  title: string;
  lines: string[];
  imageClass: string;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:gap-5 md:gap-x-6 lg:gap-8 xl:gap-10">
      <div className="flex min-w-0 max-w-full items-end justify-center md:justify-start">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
            className={`w-auto max-w-[46%] shrink-0 object-contain object-bottom drop-shadow-[0_22px_34px_rgba(0,0,0,0.32)] md:max-w-[44%] lg:max-w-[48%] ${index === 0 ? "" : "-ml-8 sm:-m l-10 md:-ml-12 lg:-ml-14 xl:-ml-17"} ${imageClass}`}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center text-center md:text-left">
        <p className="font-lemonmilk-regular text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl xl:text-[1.65rem]">
          {title}
        </p>
        {lines.map((line) => (
          <p
            key={line}
            className="mt-2 font-armin text-base font-semibold leading-relaxed text-white sm:text-lg lg:mt-2.5 lg:text-xl xl:text-[1.35rem]"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function KestrinaProduct() {
  const { t } = useLanguage();
  const k = t.kestrinaPage;

  const bagSize =
    "h-44 sm:h-52 md:h-56 lg:h-[19rem] xl:h-[22rem] 2xl:h-[24rem]";
  const packSize =
    "h-40 sm:h-48 md:h-52 lg:h-[17rem] xl:h-[20rem] 2xl:h-[21rem]";

  return (
    <section className="-mx-5 overflow-x-clip bg-[#cf0207] px-5 pb-14 pt-10 text-white sm:pb-16 sm:pt-12 lg:-mx-16 lg:px-16 lg:pb-16 lg:pt-14">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-lemonmilk text-2xl uppercase tracking-[0.12em] sm:text-3xl lg:text-4xl">
          {k.productsTitle}
        </h2>
        <svg
          className="mt-2 h-5 w-5 animate-bounce text-white/90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-16 sm:mt-12 sm:gap-20 lg:mt-14 lg:max-w-7xl lg:gap-24 xl:max-w-336">
        <ProductRow
          imageClass={bagSize}
          title={k.loveBoxTitle}
          lines={[k.loveBoxLine1, k.loveBoxLine2]}
          images={[
            { src: "/assets/kestrinaProduct/1.png", alt: "Kestrina Love Box Crispy Choco 150 g" },
            { src: "/assets/kestrinaProduct/2.png", alt: "Kestrina Love Box Lemon 150 g" },
          ]}
        />
        <ProductRow
          imageClass={packSize}
          title={k.familyTitle}
          lines={[k.familyLine1, k.familyLine2]}
          images={[
            { src: "/assets/kestrinaProduct/3.png", alt: "Kestrina Family Pack 300 g hazelnut chocolate" },
            { src: "/assets/kestrinaProduct/4.png", alt: "Kestrina Family Pack 300 g lemon" },
          ]}
        />
      </div>
    </section>
  );
}

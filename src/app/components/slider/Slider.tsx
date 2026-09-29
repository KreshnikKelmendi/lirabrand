import Image from "next/image";

const mobileHeroSlides = [
  { src: "/assets/main/1.jpg", alt: "Lira Mark" },
  { src: "/assets/main/2.jpg", alt: "Lira Mark" },
  { src: "/assets/main/3.jpg", alt: "Lira Mark" },
] as const;

export default function Slider() {
  const loopSlides = [...mobileHeroSlides, ...mobileHeroSlides];

  return (
    <>
      {/* Mobile: full-bleed infinite horizontal carousel */}
      <section
        className="relative z-10 h-[50vh] w-full overflow-hidden lg:hidden"
        aria-label="Hero carousel"
      >
        <div className="hero-mobile-track flex h-[50vh] w-max">
          {loopSlides.map((slide, index) => (
            <div
              key={`${slide.src}-${index}`}
              className="relative h-[50vh] w-screen shrink-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index < 3}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Desktop: single hero */}
      <section className="relative z-10 hidden w-full bg-[#f4f4f4] lg:block lg:h-screen lg:bg-black">
        <Image
          src="/assets/main/main-website.webp"
          alt="Lira Mark"
          width={2400}
          height={1600}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </section>
    </>
  );
}

import Image from "next/image";

export default function Slider() {
  return (
    <section className="relative z-10 w-full bg-[#f4f4f4] lg:h-screen lg:bg-black">
      <Image
        src="/assets/main/main-website.webp"
        alt="Lira Mark"
        width={2400}
        height={1600}
        priority
        sizes="100vw"
        className="block h-auto w-full object-contain object-center lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-cover lg:object-center"
      />
    </section>
  );
}

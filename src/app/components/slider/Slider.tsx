import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-full h-[40vh] lg:h-screen relative overflow-hidden">
      {/* Mobile Image */}
      <Image
        src="/assets/main-1.png"
        alt="Main Slider Image"
        fill
        className="object-cover firstServiceImage lg:hidden"
        priority
      />
      {/* Large Device Image */}
      <Image
        src="/assets/main-1.png"
        alt="Main Slider Image"
        fill
        className="object-cover firstServiceImage hidden lg:block"
        priority
      />
    </div>
  );
}

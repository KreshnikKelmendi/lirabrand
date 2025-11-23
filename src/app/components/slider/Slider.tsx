import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-full h-[55vh] lg:h-screen relative overflow-hidden">
      {/* Mobile Image */}
      <Image
        src="/assets/491432225_18380106025184030_4272445670178327441_n.jpg"
        alt="Main Slider Image"
        fill
        className="object-cover secondServiceImage lg:hidden"
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

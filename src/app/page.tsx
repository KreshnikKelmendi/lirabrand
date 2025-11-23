import Slider from "@/app/components/slider/Slider";
import AboutLiraBrand from "@/app/components/about/AboutLiraBrand";
import Quality from "@/app/components/quality/Quality";
import SecondQuality from "@/app/components/quality/SecondQuality";
import Mission from "@/app/components/mission/Mission";

export default function Home() {
  return (
    <div>
      <Slider />
      <AboutLiraBrand />
      <Mission />
      <Quality />
      <SecondQuality />
    </div>
  );
}

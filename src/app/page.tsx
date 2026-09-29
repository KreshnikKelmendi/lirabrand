import Slider from "@/app/components/slider/Slider";
import Porta from "@/app/components/porta/Porta";
import AboutLiraBrand from "@/app/components/about/AboutLiraBrand";
// import Quality from "@/app/components/quality/Quality";
// import SecondQuality from "@/app/components/quality/SecondQuality";
// import Mission from "@/app/components/mission/Mission";
import Brendet from "./components/brendet/Brendet";
import Distributor from "./components/distributor/Distributor";
import Partner from "./components/partner/Partner";
import ProductFocus from "./components/productfocus/ProductFocus";

export default function Home() {
  return (
    <div className="w-full min-w-0 overflow-x-clip">
      <Slider />
      <Porta />
      <Brendet />
      <Distributor />
      <Partner />
      <AboutLiraBrand />
      <ProductFocus />
      {/* <Mission /> */}
      {/* <Quality /> */}
      {/* <SecondQuality /> */}
    </div>
  );
}

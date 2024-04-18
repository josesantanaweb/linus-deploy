import type { Metadata } from "next";
import MainSection from "@/components/Landing/Sections/MainSection";
import AboutUs from "@/components/Landing/Sections/AboutUs";
import LiquidityBurned from "@/components/Landing/Sections/LiquidityBurned";
import Roadmap from "@/components/Landing/Sections/Roadmap";
import TakeToAction from "@/components/Landing/Sections/TakeToAction";
export const metadata: Metadata = {
  title: "Linus App",
  description: "Finance App",
};
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <TakeToAction id="section5" className="max-lg:mt-[220px]" />
      <AboutUs id="section4" className="mt-20 max-lg:mt-[120px] max-xs:mt-[220px] lg:mt-[200px]" />
      <Roadmap id="section3" className="mt-20" />
      <LiquidityBurned id="section2" className="mt-20" />
      <MainSection id="section1" className="" />
    </main>
  );
}

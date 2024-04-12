import type { Metadata } from "next";
import MainSection from "@/components/Landing/Sections/MainSection";
import AboutUs from "@/components/Landing/Sections/AboutUs";
import LiquidityBurned from "@/components/Landing/Sections/LiquidityBurned";
import TakeToAction from "@/components/Landing/Sections/TakeToAction";
export const metadata: Metadata = {
  title: "Linus App",
  description: "Finance App",
};
export default function HomePage() {
  return (
    <main>
      <TakeToAction id="section4" className="" />
      <LiquidityBurned id="section3" className="mt-10 mb-20" />
      <AboutUs id="section2" className="" />
      <MainSection id="section1" className="" />
    </main>
  );
}

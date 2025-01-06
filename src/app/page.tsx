import { BentoGridThirdDemo } from "@/components/BentoGridThirdDemo";
import { Explore } from "@/components/Explore";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import { NavbarDemo } from "@/components/Navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <NavbarDemo navItems={navItems} />
      <Hero />
      <BentoGridThirdDemo />
      <Explore />
      <Footer />
    </>
  );
}

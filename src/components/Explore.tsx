"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

// Define the type for the tab items
interface TabItem {
  icon: string;
  title: string;
  isNew: boolean;
  backgroundPositionX: number;
  backgroundPositionY: number;
  backgroundSizeX: number;
}

const tabs: TabItem[] = [
  {
    icon: "/assets/lottie/mouse.json",
    title: "User-friendly Dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/shit.json",
    title: "Cool AI Assistant",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/beng.json",
    title: "Mind-blowing Features",
    isNew: false,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Explore: React.FC = () => {
  return (
    <section>
      <div className="container relative h-screen mt-64">
        <h2>Elevate your SEO Efforts.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          dolore illum molestias, blanditiis aut qui.
        </p>
        {tabs.map((tab) => (
          <div key={tab.title}>
            <DotLottieReact src={tab.icon} className="h-5 w-5" autoplay />
            <div>{tab.title}</div>
            {tab.isNew && <div>new</div>}
          </div>
        ))}
        <Image
          src="/images/linear.webp"
          alt="aceternity logo"
          width={1400}
          height={1200}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

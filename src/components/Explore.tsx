"use client";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState, useEffect, useRef, ComponentPropsWithoutRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
  ValueAnimationTransition,
} from "framer-motion";

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
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    const xAnimation = animate(xPercentage, [0, 100, 100, 0, 0], options);
    const yAnimation = animate(yPercentage, [0, 0, 100, 100, 0], options);

    return () => {
      xAnimation.stop();
      yAnimation.stop();
    };
  }, [props.selected]); // Re-run the animation when `selected` changes.

  const handleMouseEnter = () => {
    if (dotLottie) dotLottie.play();
  };

  const handleMouseLeave = () => {
    if (dotLottie) {
      dotLottie.stop();
      dotLottie.setFrame(0);
    }
  };

  return (
    <div
      ref={tabRef}
      className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={props.onClick} // Ensure tab is clickable
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
        ></motion.div>
      )}
      <div className="h-8 w-8  rounded-lg inline-flex items-center justify-center">
        <DotLottieReact
          dotLottieRefCallback={setDotLottie}
          src={props.icon}
          className="h-7 w-7"
          autoplay
        />
      </div>
      <div className="font-medium">{props.title}</div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};

export const Explore: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPostionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPostionY}% `;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectedTab = (index: number) => {
    setSelectedTab(index);

    const animateOption: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOption
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOption
    );

    animate(
      backgroundPostionY,
      [backgroundPostionY.get(), tabs[index].backgroundPositionY],
      animateOption
    );
  };

  return (
    <section className="py-20">
      <div className="container max-w-7xl px-8 md:px-0 mx-auto mt-[900px] md:mt-64">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO Efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tighter text-center mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          dolore illum molestias, blanditiis aut qui.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectedTab(tabIndex)}
              key={tab.title}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(/images/linear.webp)`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

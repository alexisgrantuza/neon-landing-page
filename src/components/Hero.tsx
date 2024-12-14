"use client";

import { useState } from "react";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const items = [
  {
    icon: "/assets/lottie/idea.lottie", // Replace with your actual Lottie URL
    title: "Get Started",
  },
];

const Hero = () => {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  const handleMouseEnter = () => {
    if (dotLottie) dotLottie.play();
  };

  const handleMouseLeave = () => {
    if (dotLottie) {
      dotLottie.stop(); // Stop the animation
      dotLottie.setFrame(0); // Reset to the first frame
    }
  };

  return (
    <div className="pb-20 pt-36">
      <div className="flex justify-center relative my-20 z-10 bg-black/[0.7] antialiased bg-grid-white/[0.02]">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-96">
            Find Answers to Your School-Related Questions
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences. Your Questions Answered, One Step at a Time"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black  text-white dark:text-white flex items-center space-x-2 px-4 py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Lottie Icon */}
            <DotLottieReact
              dotLottieRefCallback={setDotLottie}
              src={items[0].icon} // Ensure this is a valid Lottie URL
              className="w-6 h-6"
              loop={false} // Disable looping
            />
            <span>{items[0].title}</span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default Hero;

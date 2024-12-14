import React from "react";
import MarqueeItem from "./ui/MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    "/images/01.svg",
    "/images/02.svg",
    "/images/03.svg",
    "/images/04.svg",
    "/images/05.svg",
    "/images/06.svg",
    "/images/07.svg",
    "/images/08.svg",
    "/images/09.svg",
    "/images/10.svg",
    "/images/11.svg",
  ];

  return (
    <div className="mx-auto bg-black/[0.7] antialiased bg-grid-white/[0.02]">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;

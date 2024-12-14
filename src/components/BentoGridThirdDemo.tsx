"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  SkeletonOne,
  SkeletonTwo,
  SkeletonThree,
  SkeletonFour,
  SkeletonFive,
  SkeletonSeven,
  SkeletonSix,
} from "./skeleton/BentoSkeleton";

const items = [
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16c0 1.105.895 2 2 2h12a2 2 0 002-2v-4m-2-5a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8m-2 11v4m-4-4v4m8-4v4"
        />
      </svg>
    ),
  },
  {
    title: "Automated Proofreading",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-4m-6-6h10M10 6l6 6"
        />
      </svg>
    ),
  },
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 15.292m-1.5-3.364L8.5 15l1.5-2.293M15.5 12l1.5 2.293L13.5 15"
        />
      </svg>
    ),
  },
  {
    title: "Sentiment Analysis",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3M5 8h14m-1 8a3 3 0 01-6 0M9 16h6"
        />
      </svg>
    ),
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 15.5a4 4 0 11-3-3M10.5 10.5l4-4M6.5 17.5H5a2 2 0 01-2-2v-3.5a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },

  {
    title: "Voice Interaction with AI",
    description: (
      <span className="text-sm">
        Use a microphone to interact with AI seamlessly.
      </span>
    ),
    header: <SkeletonSix />, // SkeletonSix now reflects voice interaction
    className: "md:col-span-1",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 0v4m0-8h.01M16 16c0 1.105-.895 2-2 2h-8a2 2 0 01-2-2v-8a2 2 0 012-2h8a2 2 0 012 2v8z"
        />
      </svg>
    ),
  },

  {
    title: "Robot Interaction",
    description: (
      <span className="text-sm">A robot holding the device and walking.</span>
    ),
    header: <SkeletonSeven />, // SkeletonSeven now reflects robot interaction
    className: "md:col-span-2",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 15.5a4 4 0 11-3-3M10.5 10.5l4-4M6.5 17.5H5a2 2 0 01-2-2v-3.5a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
];

export function BentoGridThirdDemo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true after the component is mounted on the client side
  }, []);

  if (!isMounted) return null; // Render nothing until mounted on the client side

  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              {item.iconPath}
            </svg>
          }
        />
      ))}
    </BentoGrid>
  );
}

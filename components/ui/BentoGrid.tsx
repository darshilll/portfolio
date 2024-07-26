/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import animationData from "@/data/confetti.json";
import { GlobeDemo } from "./GridGlobe";
import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  titleClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const firstLists = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "Tailwind CSS",
    "React.js",
  ];
  const middleLists = [
    "Next.js",
    "Framer-Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
  ];

  const thirdLists = ["Postman", "Firebase", "Git/Github", "AWS", "Docker"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "darsgajul2003@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 -mt-12 w-full",
        className
      )}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center h-full"} `}>
        <div
          className={cn(
            titleClassName,
            "relative md:h-full min-h-40 flex flex-col"
          )}
        >
          <motion.div
            className="flex flex-col justify-center items-center gap-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
          >
            <div className={`font-sans text-lg lg:text-3xl font-semibold`}>
              {title}
            </div>
            <div className="font-sans md:text-xs lg:text-xl text-sm z-10 px-72">
              {description}
            </div>
          </motion.div>

          {/* for the github 3d globe */}
          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 2 && (
            <div
              className="flex-col flex_center gap-1 w-full lg:gap-2 absolute mt-60 px-64 z-40 select-none"
              id="skill"
            >
              {/* tech stack lists */}
              <div className="flex gap-2">
                {firstLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-5 py-2 px-3 text-xs lg:text-lg opacity-50 
                    lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {middleLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-5 py-2 px-3 text-xs lg:text-lg opacity-50 
                    lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {thirdLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-5 py-2 px-3 text-xs lg:text-lg opacity-50 
                    lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

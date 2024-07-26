/* eslint-disable @next/next/no-img-element */
"use client";
import { animate, motion } from "framer-motion";
import { GlobeDemo } from "./GridGlobe";
import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn("")}>{children}</div>;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
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
    "Next.js",
    "Framer-Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Postman",
    "Firebase",
    "Git/Github",
    "AWS",
    "Docker",
  ];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 -mt-12 w-full",
        className
      )}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center h-full"} `}>
        <div className={cn(titleClassName, "relative h-full flex flex-col")}>
          <motion.div
            className="flex flex-col justify-center items-center gap-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
          >
            <div
              className={`font-sans text-2xl lg:text-3xl font-bold mb-28 md:mb-10`}
            >
              {title}
            </div>
          </motion.div>

          {/* for the github 3d globe */}
          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 2 && (
            <div
              className="max-w-[53rem] lg:gap-2 absolute z-40 select-none top-20 lg:left-72"
              id="skill"
            >
              {/* tech stack lists */}
              <ul className="flex_center flex-wrap  gap-2 text-lg">
                {firstLists.map((item, i) => (
                  <motion.li
                    key={i}
                    className="lg:px-7 lg:py-4 py-2 px-3 text-sm lg:text-lg opacity-50 
                    lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={i}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

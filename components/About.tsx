/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

/* eslint-disable react/no-unescaped-entities */
const About = ({ id, className }: { id: number; className?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "darsgajul2003@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <motion.section
      className="flex_center w-full"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <div className="w-1/2">
        <p className="text-3xl font-semibold max-w-fit">About Me</p>
        <div className="w-[80%] mt-10 text-lg leading-1">
          I am a Full-Stack Developer, with a strong focus on Frontend
          Development and Java. I specialize in developing MERN applications and
          I've completed Bachelor of Engineering (B.E) in Computer Science from
          SITRC. I work persistently, with self-discipline and commitment, to
          enhance my skills. In addition to coding, I enjoy building side
          projects and contributing to open-source projects because it allows me
          to explore my creativity and accomplish exciting tasks.
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[40%]">
        <div
          className={cn(
            "row-span-3 relative overflow-hidden rounded-2xl transition duration-200 shadow-input dark:shadow-none space-y-4 w-auto p-[5rem] h-[12rem]"
          )}
        >
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl -mt-9 text-center md:text-2xl">
              Do you want to start a project together?
            </div>
          </BackgroundGradientAnimation>

          <div className="relative top-5  flex_center">
            <div className={`absolute ${copied ? "block" : "block"}`}>
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        </div>
        <div
          className="row-span-3 relative overflow-hidden rounded-2xl transition duration-200 shadow-input dark:shadow-none space-y-4 w-auto p-[5rem] h-[12rem]"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="w-full h-full absolute">
            <img
              src="/grid.svg"
              alt="img"
              className={cn("object-cover object-center ")}
            />
          </div>
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 && "w-full opacity-80"
            } `}
          >
            <img
              src="/b4.svg"
              alt="img"
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <p className="text-lg lg:text-3xl font-bold ">
            Tech enthusiast with a passion for development.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
export default About;

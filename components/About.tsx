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
      <div>
        <p className="text-3xl font-semibold">About Me</p>
        <div className="w-[45%] mt-10 text-lg leading-1">
          I am a Full-Stack Developer, with a strong focus on Frontend
          Development and Java. I specialize in developing MERN applications and
          I've completed Bachelor of Engineering (B.E) in Computer Science from
          SITRC. I work persistently, with self-discipline and commitment, to
          enhance my skills. In addition to coding, I enjoy building side
          projects and contributing to open-source projects because it allows me
          to explore my creativity and accomplish exciting tasks.
        </div>
      </div>
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-2xl  transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 w-full h-[12rem]",
          className
        )}
      >
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-2xl">
              Do you want to start a project together?
            </div>
          </BackgroundGradientAnimation>
        )}
        {id === 6 && (
          <div className=" relative">
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
        )}
      </div>
    </motion.section>
  );
};
export default About;

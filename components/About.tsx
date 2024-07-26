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
      <div className="w-full flex_center flex-col">
        <p className="md:text-3xl text-2xl font-semibold max-w-fit">About Me</p>
        <div className="md:w-[50%] px-6 mt-10 text-lg leading-1 text-gray-300 text-justify leading-relaxed whitespace-normal break-words">
          I am a Full-Stack Developer, with a strong focus on Frontend
          Development and Java. I specialize in developing MERN applications and
          I've completed Bachelor of Engineering (B.E) in Computer Science from
          SITRC. I work persistently, with self-discipline and commitment, to
          enhance my skills. In addition to coding, I enjoy building side
          projects and contributing to open-source projects because it allows me
          to explore my creativity and accomplish exciting tasks.
        </div>
      </div>
    </motion.section>
  );
};
export default About;

/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

/* eslint-disable react/no-unescaped-entities */
const About = ({ id, className }: { id: number; className?: string }) => {
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
      <div className="w-full flex_center flex-col mt-6">
        <p className="md:text-3xl text-2xl font-semibold max-w-fit">About Me</p>
        <div className="md:w-[50%] px-6 mt-10 text-md md:text-[19px] leading-1 text-gray-400 text-justify leading-relaxed whitespace-normal break-words">
        I am a dedicated Full-Stack Developer with a strong focus on Backend Development and proficiency in Java. I specialize in building scalable, high-performance applications using Node.js, Express.js, and the MERN stack. With a Bachelor of Engineering (B.E) in Computer Science from SITRC, I have honed my skills through hands-on experience and a commitment to continuous learning. I take pride in architecting robust APIs, optimizing database performance, and delivering clean, maintainable code. These experiences fuel my creativity, sharpen my problem-solving abilities, and inspire me to deliver impactful solutions that drive meaningful outcomes.
        </div>
      </div>
    </motion.section>
  );
};
export default About;

"use client";
import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import { useState } from "react";
import Heading from "./Heading";
import About from "./About";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Hero = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  };

  return (
    <div className="pt-4">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <header>
        <nav>
          <motion.div
            className="w-full flex items-center justify-center fixed z-10"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <ul className="flex items-center justify-center gap-16 bg-[#161a31] rounded-full px-4 py-3 max-w-fit bg-opacity-80 backdrop-blur-[0.5rem]">
              <li onClick={() => handleClick}>
                {active ? "" : ""}
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skill">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </motion.div>
        </nav>
        <Heading />
        <About id={6} />
        {/* <Skill /> */}
      </header>
    </div>
  );
};
export default Hero;

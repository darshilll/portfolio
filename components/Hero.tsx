"use client";
import { Spotlight } from "./ui/Spotlight";
import { useState } from "react";
import Heading from "./Heading";
import About from "./About";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Grid from "./Grid";
import Projects from "./Projects";
import Footer from "./Footer";

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
            className="w-full flex_center fixed z-50"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <ul className="flex_center gap-6 text-xs md:text-base md:gap-16 bg-[#161a31] rounded-full px-4 py-3 max-w-fit bg-opacity-80 backdrop-blur-[0.5rem]">
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
        <Grid />
        <Experience />
        <Projects />
        <Footer />
      </header>
    </div>
  );
};
export default Hero;

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { motion } from "framer-motion";

/* eslint-disable react/no-unescaped-entities */
const Heading = () => {
  return (
    <section
      id="home"
      className=" pt-[14rem] md:pt-[17rem] w-full flex flex-col justify-center items-center gap-4"
    >
      <motion.div
        className="flex flex-col justify-center items-center w-full text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <p className="font-bold text-3xl lg:text-6xl">Hello. I'm Darshil.</p>
        <p className="font-bold text-3xl lg:text-6xl text-purple">
          A Full-Stack Developer.
        </p>
        <span className="mt-3 lg:text-xl text-sm text-gray-400 lg:w-[50%]">
          I am dedicated to driving innovation and excellence by leveraging
          advanced development techniques, continually enhancing my skills, and
          high-quality software solutions.
          <p className="text-center"></p>
        </span>
      </motion.div>
      <motion.a
        href="/Darshil_Gajul.pdf"
        download
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <MagicButton
          title={"Download CV"}
          icon={<FaLocationArrow />}
          position={"left"}
        />
      </motion.a>
    </section>
  );
};
export default Heading;

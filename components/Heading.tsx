import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { motion } from "framer-motion";

/* eslint-disable react/no-unescaped-entities */
const Heading = () => {
  return (
    <section
      id="home"
      className="pt-72 w-full flex flex-col justify-center items-center gap-4"
    >
      <motion.div
        className="flex flex-col justify-center items-center w-full text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
        }}
      >
        <p className="font-bold text-6xl">Hello. I'm Darshil.</p>
        <p className="font-bold text-6xl text-purple">
          A Full-Stack Developer.
        </p>
        <span className="mt-2 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quisquam
          odit nemo quo id enim,
          <p className="text-center">
            eaque ea doloribus quam beatae odio recusandae.
          </p>
        </span>
      </motion.div>
      <motion.a
        href="/Darshilresume.pdf"
        download
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
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

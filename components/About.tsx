import { motion } from "framer-motion";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <motion.section
      className="flex_center flex-col w-full"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <div>
        <p className="text-3xl font-semibold">About Me</p>
      </div>
      <div className="w-[45%] mt-10 text-lg leading-1">
        I am a Full-Stack Developer, with a strong focus on Frontend Development
        and Java. I specialize in developing MERN applications and I've
        completed Bachelor of Engineering (B.E) in Computer Science from SITRC.
        I work persistently, with self-discipline and commitment, to enhance my
        skills. In addition to coding, I enjoy building side projects and
        contributing to open-source projects because it allows me to explore my
        creativity and accomplish exciting tasks.
      </div>
    </motion.section>
  );
};
export default About;

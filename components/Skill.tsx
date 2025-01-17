"use client"
import { motion } from "framer-motion";
import { GlobeDemo } from "./ui/GridGlobe";

const Skill = ({ id }: { id: number }) => {
  const firstLists = [
    "Javaz",
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "Tailwind CSS",
    "React.js",
    "Redux",
  ];
  const middleLists = [
    "Next.js",
    "Framer-Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
  ];

  const thirdLists = ["Postman", "Firebase", "Git/Github"];

  return (
    <motion.section
      className="flex_center flex-col w-full"
      id="skills"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <p className="text-3xl font-semibold">Skillset</p>
      {id === 2 && <GlobeDemo />}

      {/* Tech stack list div */}
      {id === 2 && (
        <div className="flex flex-col gap-1 lg:gap-5 w-fit px-64 h-full">
          {/* Tech stack lists */}
          <div className="flex gap-3 lg:gap-8">
            {firstLists.map((item, i) => (
              <span
                key={`first-${item}-${i}`} // Ensures unique key by combining value and index
                className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] text-gray-400"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-3 lg:gap-8">
            {middleLists.map((item, i) => (
              <span
                key={`middle-${item}-${i}`} // Ensures unique key
                className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] text-gray-400"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-3 lg:gap-8">
            {thirdLists.map((item, i) => (
              <span
                key={`third-${item}-${i}`} // Ensures unique key
                className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] text-gray-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Skill;

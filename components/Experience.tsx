/* eslint-disable react/jsx-no-undef */
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section id="experience" className="-mt-16">
      <div className="w-full">
        <p className="text-3xl font-semibold max-w-fit text-center">
          Experience
        </p>
        <div className="w-full mt-12 lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              borderRadius="1.75rem"
              className="flex-1 text-white-100 border-neutral-200 dark:border-slate-800"
              duration={Math.floor(Math.random() * 100000)}
            >
              <div className="flex lg:flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;

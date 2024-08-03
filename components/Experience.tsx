/* eslint-disable react/jsx-no-undef */
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section id="experience">
      <div className="w-full flex_center flex-col">
        <p className="md:text-3xl text-2xl font-semibold flex_center text-center">
          Work Experience
        </p>
        <div className="max-w-[53rem] mt-12 flex_center flex-col gap-8 ml-12 md:ml-0">
          {workExperience.map(({ id, date, title, desc, desc1, tech }) => (
            <div key={id}>
              <div className="flex w-full lg:flex-col lg:items-center p-3 py-6 md:p-5 gap-2">
                <div className="lg:ms-5 ">
                  <p className="text-gray-400 text-start">{date}</p>
                  <h1 className="text-start text-lg md:text-xl font-semibold">
                    {title}
                  </h1>
                  <p className="text-left text-white-100 font-semibold ">
                    {desc}
                  </p>
                  <p className="w-[90%] sm:w-full text-gray-400 text-justify leading-relaxed text-sm md:text-base whitespace-normal break-words">
                    {desc1}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 ">
                    {tech.map((item) => (
                      <span
                        key={id}
                        className="lg:px-5 py-2 px-3 text-xs md:text-base md:text-md opacity-100 rounded-lg text-center bg-gray-700 min-w-fit"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;

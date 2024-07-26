/* eslint-disable react/jsx-no-undef */
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section id="experience">
      <div className="w-full flex_center flex-col">
        <p className="text-3xl font-semibold flex_center text-center">
          Work Experience
        </p>
        <div className="w-full mt-12 flex justify-center items-center flex-col gap-10 xl:ml-96 md:ml-24 px-44">
          {workExperience.map(({ id, date, title, desc, desc1, tech }) => (
            <div key={id}>
              <div className="flex lg:flex-col lg:items-center p-3 py-6 md:p-5 lg:p-5 gap-2 ">
                <div className="lg:ms-5">
                  <p className="text-gray-400 text-start">{date}</p>
                  <h1 className="text-start text-xl font-bold">{title}</h1>
                  <p className="text-left text-white-100 font-semibold ">
                    {desc}
                  </p>
                  <p className="lg:w-[70%] text-gray-400 text-justify leading-relaxed whitespace-normal break-words">
                    {desc1}
                  </p>
                  <div className="flex gap-2 mt-2 w-full">
                    {tech.map((item) => (
                      <span
                        key={id}
                        className="lg:px-5 py-2 px-3 text-xs md:text-md opacity-100 rounded-lg text-center bg-gray-700"
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

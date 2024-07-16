/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <p className="text-3xl font-semibold heading text-center">Projects</p>
      <div className=" flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex_center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex_center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="./bg.png" alt="bg" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-20 absolute bottom-0 transform rotate(2.63 14.8994 0.136963)"
                  width={500}
                  height={300}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white-/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex_center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex_center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check live site
                    </p>
                    <FaLocationArrow className="ms-3" size={14} />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;

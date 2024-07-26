/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <p className="text-3xl flex_center font-semibold">Projects</p>
      <div className=" flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 lg:mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="md:h-[36rem] h-[29rem] flex_center sm:w-[700px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex_center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]"></div>
                <img
                  src={img}
                  alt={title}
                  className="z-20 absolute bottom-0 top-0"
                  width={600}
                  height={500}
                />
              </div>
              <h1 className="font-bold md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-lg text-gray-400 lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-4 mb-3">
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
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;

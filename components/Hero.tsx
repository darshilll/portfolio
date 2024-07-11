import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
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

      <div className="flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={"Hello. I'm Darshil."}
          />
          <TextGenerateEffect
            className="text-center md:tracking-wider mb-4 text-md md:text-lg lg:text-2xl"
            words={
              "I am passionate about continuous learning and always strive to improve my skills in order to deliver high-quality software solutions"
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;

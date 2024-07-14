//https://github.com/emmabostian/developer-portfolios?tab=readme-ov-file

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex-center text-white flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-full">
        <Hero />
        <Grid />
      </div>
    </main>
  );
}

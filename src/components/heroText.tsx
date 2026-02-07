import { ArrowUpRight } from "lucide-react";
import { Manrope_Font } from "../../public/fonts";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-y-1 md:mb-20 items-center md:items-start z-40">
      <div className="flex flex-row gap-x-2">
        <div className="flex w-fit items-center mb-4 rounded-full gap-3 py-2 px-5 border border-zinc-600 enter-animation md:mb-7 place-self-start">
          <div className="relative size-3">
            <div className="absolute size-full animate-ping rounded-full bg-green-300 opacity-65"></div>{" "}
            <div className="drop-shadow-green size-full rounded-full bg-green-400"></div>{" "}
          </div>
          <h3 className={`${Manrope_Font.className} text-sm text-white`}>
            Available for Projects
          </h3>
        </div>
        <a
          className="group flex w-fit items-center mb-4 rounded-full gap-1 py-2 px-5 borderenter-animation md:mb-7 place-self-start"
          href="https://blog.brendankeaton.com"
          target="_blank"
        >
          <h3
            className={`${Manrope_Font.className} text-sm text-white group-hover:text-white/60`}
          >
            Read my blog
          </h3>
          <ArrowUpRight
            strokeWidth={1}
            size={16}
            className="text-white group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-200"
          />
        </a>
      </div>
      <p
        className={`text-white text-[28px] lg:text-[54px] xl:text-[80px] font-semibold leading-none text-start items-start w-full font-orbit mb-1`}
      >
        Hi! I&apos;m Brendan
      </p>
      <p
        className={`text-white text-sm lg:text-base 2xl:text-xl font-light place-self-end text-start`}
      >
        A software dev building in Python, Typescript, and Rust
      </p>
    </div>
  );
};

export default HeroText;

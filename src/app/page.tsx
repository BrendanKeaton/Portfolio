"use client";
import SpinningEarth from "@/components/cube";
import { Urbanist_Font } from "../../public/fonts";

export default function Home() {
  return (
    <div
      className={
        "flex flex-row md:items-center w-full h-screen z-10 tracking-urbanist font-light justify-between md:justify-start mt-24 md:mt-0"
      }
    >
      <div className="flex flex-col gap-y-1 mb-32 items-center md:items-start">
        <div className="flex w-fit items-center rounded-full gap-3 py-2 px-5 border border-zinc-600 bg-avinity-black enter-animation md:mb-7">
          <div className="relative size-3">
            <div className="absolute size-full animate-ping rounded-full bg-green-300 opacity-65"></div>{" "}
            <div className="drop-shadow-green size-full rounded-full bg-green-400"></div>{" "}
          </div>
          <h3 className="text-sm text-white">Available for Projects</h3>
        </div>
        <p
          className={`${Urbanist_Font.className} text-white text-[48px] md:text-[64px] xl:text-[96px] font-semibold leading-none`}
        >
          Hi, I'm <a>Brendan</a>
        </p>
        <p
          className={`text-white text-2xl font-light place-self-end text-center md:text-start`}
        >
          A fullstack dev building projects using Nextjs & Python
        </p>
      </div>
      <div className="h-96 w-96 flex">
        <SpinningEarth />
      </div>
    </div>
  );
}

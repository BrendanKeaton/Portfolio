"use client";
import SpinningEarth from "@/components/cube";
import { motion } from "motion/react";
import HeroText from "@/components/heroText";
import { SVGLineGlowAnimateContainer } from "./animation";

export default function Landing() {
  return (
    <div
      className={
        "relative flex flex-row md:items-center w-full h-screen z-10 tracking-urbanist font-light justify-center md:justify-start mt-24 md:mt-0"
      }
    >
      <div className="flex flex-row gap-x-10 ml-5 md:ml-0">
        <SVGLineGlowAnimateContainer />
        <HeroText />
      </div>
      <motion.div className="place-self-center absolute md:right-0 h-[300px] w-[300px] md:h-[450px] md:w-[450px] 2xl:h-[700px] 2xl:w-[700px] flex opacity-90 mb-12 md:mb-0 ">
        <SpinningEarth />
      </motion.div>
      <p className="absolute text-lg text-gray-400 min-w-fit place-self-end right-2 md:right-32 bottom-48 md:bottom-10">
        scroll for more.
      </p>
    </div>
  );
}

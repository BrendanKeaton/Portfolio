"use client";
import { DistortedGlass } from "@/components/ui/distortedGlass";
import { HyperText } from "./hyperText";
import Image from "next/image";
import ExperienceComponent from "./experiences";
import { experienceContent } from "../content";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function WhoAmI() {
  const [glitch, setGlitch] = useState(false);
  const [imageSrc, setImageSrc] = useState("/roman_head.png");
  const elementRef = useRef<HTMLElement | null>(null);
  const delay = 800;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);

      setTimeout(() => {
        setImageSrc("/roman_head_red_2.png");
      }, 80);

      setTimeout(() => {
        setImageSrc("/roman_head_black.png");
      }, 130);

      setTimeout(() => {
        setImageSrc("/roman_head.png");
        setGlitch(false);
      }, 250);
    }, 10000);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row z-30 justify-center md:justify-start gap-x-10 2xl:gap-x-24 items-center">
      <div className="relative flex items-center md:justify-start ml-10 md:ml-0">
        <motion.div
          animate={{
            x: glitch ? [0, 50, -50, 50, -50, 100, -100, 0] : 0,
            y: glitch ? [0, -50, 50, -50, 50, -100, 100, 0] : 0,
            opacity: glitch ? [1, 0, 1, 0, 1, 1, 1] : 1,
          }}
          transition={{ duration: 0.05 }}
        >
          <Image
            src={imageSrc}
            width={577}
            height={714}
            alt="ascii art roman statue head"
            className="max-w-[200px] md:max-w-[300px] lg:max-w-[450px] xl:max-w-[577px]"
          />
        </motion.div>
        <div className="text-xl md:text-3xl lg:text-5xl xl:text-6xl md:top-[23.4%] lg:top-[23.8%] xl:top-[24%] top-[22.67%] left-[18.8%] md:left-[26%] absolute font-orbit">
          <HyperText>EXPERIENCE</HyperText>
        </div>
        <DistortedGlass />
        <div className="w-[4px] rounded-full z-0 h-[100%] bg-white bottom-5 absolute rotate-[10deg] justify-self-start"></div>
      </div>
      <div className="flex flex-col gap-y-12 md:gap-y-20 mt-8 md:mt-0 w-full">
        {experienceContent.map((experience, index) => (
          <ExperienceComponent key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}

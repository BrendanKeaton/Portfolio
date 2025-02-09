"use client";
import { DistortedGlass } from "@/components/ui/distortedGlass";
import { HyperText } from "./hyperText";
import Image from "next/image";

export default function WhoAmI() {
  return (
    <div className="flex flex-col md:flex-row z-30 justify-center md:justify-start">
      <div className="relative flex items-center md:justify-start ml-10 md:ml-0">
        <Image
          src="/roman_head.png"
          width={577}
          height={714}
          alt="ascii art roman statue head"
          className="max-w-[200px] md:max-w-[300px] lg:max-w-[450px] xl:max-w-[577px]"
        />
        <div className="text-xl md:text-3xl lg:text-5xl xl:text-6xl md:top-[23.4%] lg:top-[23.8%] xl:top-[24%] top-[22.67%] left-[18.8%] md:left-[26%] absolute font-orbit">
          <HyperText>EXPERIENCE</HyperText>
        </div>
        <DistortedGlass />
        <div className="w-[4px] rounded-full z-0 h-[100%] bg-white bottom-5 absolute rotate-[10deg] justify-self-start"></div>
      </div>
    </div>
  );
}

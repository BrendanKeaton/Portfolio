"use client";
import Image from "next/image";
import { useState } from "react";
import ZoomedEarth from "@/components/projects.js";
import { motion } from "motion/react";

export default function Projects() {
  const [clicked, setClicked] = useState(false);
  return clicked ? (
    <div className="flex flex-col h-[80vh] bg-gradient-to-br from-black via-[#030303] to-black z-10 items-center justify-center rounded-xl justify-items-center">
      <div className="flex flex-col gap-y-16">
        <p className="text-white text-lg text-center mb-5">click to unlock</p>
        <Image
          src="/lock.png"
          width={100}
          height={104}
          alt="Floating Lock"
          onClick={() => setClicked(true)}
          className="place-self-center justify-self-center animate-[float_4s_ease-in-out_infinite] filter hover:cursor-pointer"
        />
        <Image
          src="/hand2.png"
          width={556}
          height={208}
          alt="Floating Hand"
          className="place-self-center justify-self-center filter drop-shadow-[0_0_8px_rgba(37,225,169,0.8)] opacity-70 ml-12"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-row justify-between h-[80vh] bg-gradient-to-br from-black via-[#030303] to-black z-10 items-center rounded-xl justify-items-center">
      <div className="border flex text-white w-1/3">test</div>
      <motion.div className="flex border w-2/3 h-4/5 items-start">
        <ZoomedEarth />
      </motion.div>
    </div>
  );
}

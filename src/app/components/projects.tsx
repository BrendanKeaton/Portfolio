"use client";
import Image from "next/image";
import { useState } from "react";
import ZoomedEarth from "@/components/projects.js";
import { motion } from "motion/react";
import Link from "next/link";

export default function Projects() {
  const [clicked, setClicked] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const projects = [
    {
      title: "Statistex",
      location: "MIAMI, FLORIDA... UNITED STATES",
      description:
        "Using knowledge gained during my time as an analyst, built a platform that leverages software developed by Overwolf to automatically track players' matches. Additionally, I have created a list of key questions addressing factors crucial to performance, such as caffeine intake, sleep patterns, nutrition, and exercise habits. These data points are integrated into a user-friendly dashboard and analyzed using regression techniques, enabling players and staff to identify the factors that most impact individual performance.",
      tags: [
        "Next.js",
        "Tailwind",
        "Data Visualization",
        "Supabase",
        "Postgresql",
        "Typescript",
        "Stripe API",
        "Flask",
        "Python",
      ],
      link: "https://statistex.dev",
      linkText: "$ https://statistex.dev",
      aircraft: "sat: 66xba0110",
      lat: "25.7617° N",
      long: "80.1918° W",
    },
    {
      title: "Portfolio Website",
      location: "RABAT... MOROCCO",
      description:
        "Built my current portfolio website with the goal of learning the basics of threejs and optimization for rendering. Attempted a new style of design outside of my comfort zone. Used this Pinterest board for inspiration: https://www.pinterest.com/8bitfire/80s-ui/",
      tags: ["Next.js", "TypeScript", "Tailwind", "Threejs", "Framer"],
      link: "/",
      aircraft: "AIRCRAFT: 71jc-ns01",
      linkText: "$ HERE",
      lat: "34.0084° N",
      long: "6.8539° W",
    },
    {
      title: "Rex Regum Qeon",
      location: "...ASIA PACIFIC REGION",
      description:
        "Worked as a data analyst for an APAC based Valorant team. Developed a small (2k+) following on Twitter through my data based content.",
      tags: ["Excel", "Analytics", "Python", "R", "Data Automation & Scraping"],
      link: "/",
      aircraft: "sat: js-78102z",
      linkText: "$ no link",
      lat: "0.7893° S",
      long: "113.9213° E",
    },
    {
      title: "Recommendation Systems Thesis",
      location: "HICKAM... HAWAII",
      description:
        "Researched and summarized several machine learning methods used in recommendation systems of social media for my senior thesis at the University of Virginia. Additionally studied the societal impacts of these systems on users",
      tags: ["RESEARCH PROJECT"],
      link: "https://doi.org/10.18130/bem4-3v72",
      aircraft: "sat: wql103-z",
      linkText: "$ https://doi.org/10.18130/bem4-3v72",
      lat: "21.3360° N",
      long: "157.9557 W",
    },
  ];

  return !clicked ? (
    <div className="flex flex-col h-[80vh] bg-gradient-to-br from-black via-[#030303] to-black z-10 items-center justify-center rounded-xl justify-items-center">
      <div className="flex flex-col gap-y-16">
        <p className="text-white text-lg text-center mb-5">
          PROJECTS [click below to unlock]
        </p>
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
    <div className="flex flex-col md:flex-row justify-between h-[80vh] bg-gradient-to-br from-black via-[#030303] to-black z-10 rounded-xl justify-items-center">
      <div className="flex text-white w-full md:w-1/3 px-6 py-3 flex-col gap-y-[1px] mt-2">
        <div className="text-brendan-green text-lg md:text-2xl max-h-fit">
          <p className="w-full text-end mb-2 font-bold ">
            {projects[currentSection].title}
          </p>
        </div>
        <p className="text-sm place-self-end">
          {projects[currentSection].location}
        </p>
        <Link
          className="text-sm text-end mt-5 border pr-5 py-2 border-[#FF5863]"
          href={projects[currentSection].link}
        >
          go to {projects[currentSection].linkText}
        </Link>
        <p className="text-lg font-bold mt-3 text-brendan-green">OBJECTIVE:</p>
        <p className="text-base mt-1">{projects[currentSection].description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {projects[currentSection].tags.map((tag, index) => (
            <span
              key={index}
              className="bg-brendan-green text-black py-2 px-3 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-2/3 h-full justify-between">
        <div className="flex text-white flex-col gap-y-1 h-1/5 mr-5 mb-1">
          <p className="text-sm mt-2 border p-1 border-[#F000F9] place-self-end">
            latitude: {projects[currentSection].lat}
          </p>
          <p className="text-sm mt-1 border p-1 border-[#F000F9] place-self-end">
            longitude: {projects[currentSection].long}
          </p>
          <p className="text-white opacity-65 text-md place-self-end mt-auto">
            {projects[currentSection].aircraft}
          </p>
        </div>
        <motion.div className="flex border border-white border-opacity-20 w-[99%] h-4/5 items-start mb-2 mr-2">
          <ZoomedEarth updateSection={setCurrentSection} />
        </motion.div>
      </div>
    </div>
  );
}

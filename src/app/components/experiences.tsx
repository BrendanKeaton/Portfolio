import { ChevronsRight } from "lucide-react";
import { ExperienceProps } from "../content";
import { TypingAnimation } from "./typingText";
import { useState } from "react";

const ExperienceComponent: React.FC<ExperienceProps> = ({
  company,
  role,
  technologies,
  start,
  end,
  location,
}) => {
  const locationText = "D:Location> ";
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-w-full">
      <div className="flex flex-col md:flex-row gap-x-10 lg:gap-x-20 min-w-fit items-start">
        <div className="flex flex-col gap-y-2 w-full">
          <div className="flex flex-row gap-x-1 items-center min-w-fit">
            <ChevronsRight size={24} color="#28FFBF" className="mr-3" />
            <TypingAnimation className="text-brendan-green uppercase text-xl min-w-fit">
              {company}
            </TypingAnimation>
            <div
              className={`h-[20px] flex z-50 w-[2px] bg-brendan-green ${
                company ? "animate-blink" : "animate-none hidden"
              } `}
            ></div>
          </div>
          <p
            className={`px-4 py-2 bg-brendan-green text-brendan-black text-xl text-center w-fit font-medium`}
          >
            {role}
          </p>
        </div>
        <div className="flex flex-col justify-start md:justify-end gap-y-2 w-full mt-2 md:mt-0">
          <p className="text-lg text-start md:text-end text-white min-w-5xl">
            {start} [to] {end}
          </p>
          <div
            className={`text-white text-xl text-end justify-start min-w-fit flex flex-row gap-x-2 md:justify-end py-2 items-center`}
          >
            <p> {locationText}</p>
            <p className="text-brendan-green min-w-fit"> {location}</p>
          </div>
        </div>
      </div>
      <button
        className="text-white text-md text-end text-opacity-40"
        onClick={() => setOpen(!open)}
      >
        view skills
      </button>
      <div
        className={`bg-gradient-to-r from-[#F000F9] to-[#FF5863] flex flex-wrap mt-1 py-1 ${
          open ? "flex" : "hidden"
        }`}
      >
        {technologies.map((value, index) => (
          <p className="text-black px-3 font-semibold" key={index}>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;

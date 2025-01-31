import { Urbanist_Font } from "../../public/fonts";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-y-1 mb-32 items-center md:items-start">
      <div className="flex w-fit items-center mb-4 rounded-full gap-3 py-2 px-5 border border-zinc-600 bg-avinity-black enter-animation md:mb-7 place-self-start md:place-self-end">
        <div className="relative size-3">
          <div className="absolute size-full animate-ping rounded-full bg-green-300 opacity-65"></div>{" "}
          <div className="drop-shadow-green size-full rounded-full bg-green-400"></div>{" "}
        </div>
        <h3 className="text-sm text-white">Available for Projects</h3>
      </div>
      <p
        className={`${Urbanist_Font.className} text-white text-[36px] md:text-[64px] xl:text-[96px] font-semibold leading-none text-start items-start w-full`}
      >
        Hi, I'm Brendan
      </p>
      <p
        className={`text-white text-lg md:text-xl xl:text-2xl font-light place-self-end text-start`}
      >
        A fullstack dev building projects using Nextjs & Python
      </p>
    </div>
  );
};

export default HeroText;

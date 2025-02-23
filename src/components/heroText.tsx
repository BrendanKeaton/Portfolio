import { Manrope_Font } from "../../public/fonts";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-y-1 md:mb-20 items-center md:items-start">
      <div className="flex w-fit items-center mb-4 rounded-full gap-3 py-2 px-5 border border-zinc-600 bg-avinity-black enter-animation md:mb-7 place-self-start">
        <div className="relative size-3">
          <div className="absolute size-full animate-ping rounded-full bg-green-300 opacity-65"></div>{" "}
          <div className="drop-shadow-green size-full rounded-full bg-green-400"></div>{" "}
        </div>
        <h3 className={`${Manrope_Font.className} text-sm text-white`}>
          Available for Projects
        </h3>
      </div>
      <p
        className={`text-white text-[28px] md:text-[54px] xl:text-[80px] font-semibold leading-none text-start items-start w-full font-orbit mb-1`}
      >
        Hi,Im Brendan
      </p>
      <p
        className={`text-white text-md md:text-lg 2xl:text-xl font-light place-self-end text-start`}
      >
        A fullstack dev building projects using Nextjs & Python
      </p>
    </div>
  );
};

export default HeroText;

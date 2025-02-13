import Landing from "./components/landing";
import WhoAmI from "./components/whoAmI";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-16">
      <Landing />
      <WhoAmI />
      <Projects />
    </div>
  );
}

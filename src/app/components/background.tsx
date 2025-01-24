export default function Background() {
  return (
    <div
      className="fixed h-full w-full z-0"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #0E0F0F 70%, #171818 100%)",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#7BDFC11A_1px,transparent_1px),linear-gradient(to_bottom,#28FFBF1A_1px,transparent_1px)] bg-[size:26px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}

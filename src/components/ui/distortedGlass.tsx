"use client";
export const DistortedGlass = () => {
  return (
    <>
      <div className="h-[80px] w-[200px] md:h-[120px] md:w-[300px] lg:h-[200px] lg:w-[500px] bottom-10 -left-8 lg:bottom-40 lg:-left-8 absolute z-50">
        <div className="pointer-events-none absolute bottom-0 h-full w-full left-0 z-10 overflow-hidden rounded-xl">
          <div className="glass-effect h-full w-full" />
        </div>
        <svg>
          <defs>
            <filter id="fractal-noise-glass">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.12 0.12"
                numOctaves="1"
                result="warp"
              ></feTurbulence>
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="30"
                in="SourceGraphic"
                in2="warp"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <style jsx>{`
        .glass-effect {
          background: rgba(0, 0, 0, 0);
          background: repeating-radial-gradient(
            circle at 50%50%,
            rgb(255 255 255 / 0),
            rgba(99, 230, 202, 0.12) 10px,
            rgb(255 255 255) 31px
          );
          filter: url(#fractal-noise-glass);
          background-size: 6px 6px;
          backdrop-filter: blur(1px);
        }
      `}</style>
    </>
  );
};

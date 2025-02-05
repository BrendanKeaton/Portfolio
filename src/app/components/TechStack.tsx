"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  siNextdotjs,
  siTailwindcss,
  siPython,
  siSupabase,
  siTypescript,
  siGit,
} from "simple-icons";
import { UserRound } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-10 md:-translate-x-96"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle
            ref={div1Ref}
            className="outline-white outline-2 outline-offset-4 outline"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: siNextdotjs.svg }}
            />
          </Circle>
          <Circle
            ref={div5Ref}
            className="outline-[#06B6D4] outline-2 outline-offset-4 outline"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#06B6D4"
              dangerouslySetInnerHTML={{ __html: siTailwindcss.svg }}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle
            ref={div2Ref}
            className="outline-[#3776AB] outline-2 outline-offset-4 outline"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#3776AB"
              dangerouslySetInnerHTML={{ __html: siPython.svg }}
            />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <UserRound size={32} strokeWidth={1.2} />
          </Circle>
          <Circle
            ref={div6Ref}
            className="outline-[#3178C6] outline-2 outline-offset-4 outline"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#3178C6"
              dangerouslySetInnerHTML={{ __html: siTypescript.svg }}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle
            ref={div3Ref}
            className="outline-[#3FCF8E] outline-2 outline-offset-4 outline"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#3FCF8E"
              dangerouslySetInnerHTML={{ __html: siSupabase.svg }}
            />
          </Circle>
          <Circle
            ref={div7Ref}
            className="outline-[#F05032] outline-2 outline-offset-4 outline"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#F05032"
              dangerouslySetInnerHTML={{ __html: siGit.svg }}
            />
          </Circle>
        </div>
      </div>
      <div>
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
        />
      </div>
    </div>
  );
}

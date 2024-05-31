"use client";

import { cn } from "@/lib/utils";
export default function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "rgba(255,255,255,0.5)",
  className,
  children,
}) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } 
      }
      className={cn(
        "relative grid min-h-[60px] place-items-center rounded-[--border-radius] text-center text-white",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--border-radius-child": `${borderRadius * 0.2}px`,
            "--shine-pulse-duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${!(color instanceof Array) ? color : color.join(",")},transparent,transparent)`,
          } 
        }
        className={`before:bg-shine-size before:absolute before:inset-[0] before:aspect-square before:h-full before:w-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:[mask:var(--mask-linear-gradient)] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      <div className={"z-[1] h-full rounded-[--border-radius-child]"}>
        {children}
      </div>
    </div>
  );
}

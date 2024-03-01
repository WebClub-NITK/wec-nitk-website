"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(({ className }) => {
  const paths = [
    "M927.5 456C927.5 609.243 798.799 733.5 640 733.5C481.201 733.5 352.5 609.243 352.5 456C352.5 302.757 481.201 178.5 640 178.5C798.799 178.5 927.5 302.757 927.5 456Z",
    "M1005.5 456C1005.5 652.878 841.872 812.5 640 812.5C438.128 812.5 274.5 652.878 274.5 456C274.5 259.122 438.128 99.5 640 99.5C841.872 99.5 1005.5 259.122 1005.5 456Z",
    "M1085.5 456C1085.5 686.549 886.074 873.5 640 873.5C393.926 873.5 194.5 686.549 194.5 456C194.5 225.451 393.926 38.5 640 38.5C886.074 38.5 1085.5 225.451 1085.5 456Z",
    "M1224.5 455.5C1224.5 760.887 962.613 1008.5 639.5 1008.5C316.387 1008.5 54.5 760.887 54.5 455.5C54.5 150.113 316.387 -97.5 639.5 -97.5C962.613 -97.5 1224.5 150.113 1224.5 455.5Z",
    "M1369.5 456C1369.5 847.28 1042.91 1164.5 640 1164.5C237.094 1164.5 -89.5 847.28 -89.5 456C-89.5 64.7199 237.094 -252.5 640 -252.5C1042.91 -252.5 1369.5 64.7199 1369.5 456Z",
  ];
  return (
    <div
      className={cn(
        "absolute  h-full w-full inset-0  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
        className
      )}
    >
      <svg
        className=" z-0 h-full w-full pointer-events-none absolute "
        width="1280"
        height="832"
        viewBox="0 0 1280 832"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M927.5 456C927.5 609.243 798.799 733.5 640 733.5C481.201 733.5 352.5 609.243 352.5 456C352.5 302.757 481.201 178.5 640 178.5C798.799 178.5 927.5 302.757 927.5 456Z"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="0.8"
        />
        <path
          d="M1005.5 456C1005.5 652.878 841.872 812.5 640 812.5C438.128 812.5 274.5 652.878 274.5 456C274.5 259.122 438.128 99.5 640 99.5C841.872 99.5 1005.5 259.122 1005.5 456Z"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="0.5"
        />
        <path
          d="M1085.5 456C1085.5 686.549 886.074 873.5 640 873.5C393.926 873.5 194.5 686.549 194.5 456C194.5 225.451 393.926 38.5 640 38.5C886.074 38.5 1085.5 225.451 1085.5 456Z"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="0.5"
        />
        <path
          d="M1224.5 455.5C1224.5 760.887 962.613 1008.5 639.5 1008.5C316.387 1008.5 54.5 760.887 54.5 455.5C54.5 150.113 316.387 -97.5 639.5 -97.5C962.613 -97.5 1224.5 150.113 1224.5 455.5Z"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="0.5"
        />
        <path
          d="M1369.5 456C1369.5 847.28 1042.91 1164.5 640 1164.5C237.094 1164.5 -89.5 847.28 -89.5 456C-89.5 64.7199 237.094 -252.5 640 -252.5C1042.91 -252.5 1369.5 64.7199 1369.5 456Z"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="0.5"
        />

        {paths.map((path, index) => (
          <motion.path
            key={`path-` + index}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.8"
            strokeWidth="0.9"
          ></motion.path>
        ))}
        <defs>
          {paths.map((path, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              x1="100%"
              x2="100%"
              y1="100%"
              y2="100%"
              key={`gradient-${index}`}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 1 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 1,
              }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="32.5%" stopColor="#6344F5"></stop>
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          ))}

          <radialGradient
            id="paint0_radial_242_278"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";

// <svg
//   width="1280"
//   height="832"
//   viewBox="0 0 1280 832"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//     d="M927.5 456C927.5 609.243 798.799 733.5 640 733.5C481.201 733.5 352.5 609.243 352.5 456C352.5 302.757 481.201 178.5 640 178.5C798.799 178.5 927.5 302.757 927.5 456Z"
//     stroke="white"
//   />
//   <path
//     d="M1005.5 456C1005.5 652.878 841.872 812.5 640 812.5C438.128 812.5 274.5 652.878 274.5 456C274.5 259.122 438.128 99.5 640 99.5C841.872 99.5 1005.5 259.122 1005.5 456Z"
//     stroke="white"
//   />
//   <path
//     d="M1085.5 456C1085.5 686.549 886.074 873.5 640 873.5C393.926 873.5 194.5 686.549 194.5 456C194.5 225.451 393.926 38.5 640 38.5C886.074 38.5 1085.5 225.451 1085.5 456Z"
//     stroke="white"
//   />
//   <path
//     d="M1224.5 455.5C1224.5 760.887 962.613 1008.5 639.5 1008.5C316.387 1008.5 54.5 760.887 54.5 455.5C54.5 150.113 316.387 -97.5 639.5 -97.5C962.613 -97.5 1224.5 150.113 1224.5 455.5Z"
//     stroke="white"
//   />
//   <path
//     d="M1369.5 456C1369.5 847.28 1042.91 1164.5 640 1164.5C237.094 1164.5 -89.5 847.28 -89.5 456C-89.5 64.7199 237.094 -252.5 640 -252.5C1042.91 -252.5 1369.5 64.7199 1369.5 456Z"
//     stroke="white"
//   />
// </svg>;

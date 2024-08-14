'use client'
import * as React from "react"
import { SideScroll } from "@/components/ui/side-scroll";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import { motion, useScroll } from "framer-motion"
import Section from "@/components/section-framer";
import IconCloud from "@/components/ui/icon-cloud";
import SkewedInfiniteScroll from "@/components/ui/skeewed";
import { HackathonMarque } from "@/components/ui/hackathon-marque";
import { Mentorship } from "@/components/ui/mentorship";
import { cn } from "@/lib/utils";
import {
  IconPhone,
  IconFriends,
  IconGitBranch,
  IconCode
} from "@tabler/icons-react";


export function WhatWeDoSection() {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Section>
        <div className="flex flex-col p-2 m-2 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className={`md:text-lg text-center text-xs font-medium md:font-light text-secondary-800/50 p-9 mx-auto ${scrollYProgress}`}>OUR ALUMNI ARE CURRENTLY AT</motion.h1>

          <div className="h-fit flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ring-1 ring-secondary-400/50 rounded-full md:p-5 md:w-10/12 w-11/12 mx-auto">
            <SideScroll
              items={companies}
              direction="left"
              speed="normal"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className=" text-secondary-800 font-semibold text-center text-2xl md:text-4xl p-9 mt-[90px] mb-10 mx-auto">
            Things we do in <span className="text-primary-400">WebClub🕸️</span>
          </motion.h1>
          <BentoGrids />
        </div>

      </Section>

    </motion.div>

  )
}

export function BentoGrids() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
  </div>
)

export const companies = [
  "micro",
  "google",
  "oracle_4",
  "goldman",
  "morgan_stanley",
  "wells",
  "deshaw",
  "amazon",
  // "sforce",
  // "servicenow",
  "intuit",
  // "coinbase_3",
  "adobe",

];

export let notifications = [
  {
    name: "Interview Prep",
    description: "with Abhishek",
    time: "in 15m",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Codebuddy",
    description: "with Chinmaya",
    time: "in 10m",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Online Assessments",
    description: "Microsoft OA",
    time: "in 5m",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "AMA",
    description: "GSOC",
    time: "in 2m",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const hackathons = [
  {
    
    name: "ETHIndia'22",
    
  },
  {
    
    name: "Fantom Hackathon",
   
  },
  {
    
    name: "ETHForAll'23",
    
  },
  {
    
    name: "AngelHack's Polkadot Hackathon",

  },
  {
   
    name: "Warpspeed by Lightspeed",
  
  },
  {
   
    name: "HackToFuture, SJEC Mangalore",
  
  },
  {
   
    name: "NivHack’23 by Niveus Solutions, Mangalore",
  
  },
  {
   
    name: "Manipal Hackathon 2023",
  
  },
  {
   
    name: "ETHOnline’23",
  
  },
  {
   
    name: "MultiverseX Hackathon’23",
  
  },
  {
   
    name: "ETHIndia’23",
  
  },
  {
   
    name: "DevRev Forge’23",
  
  },{
   
    name: "AngelHack's HackBangalore",
  
  },
  {
   
    name: "ETHGlobal's LFGHO",
  
  },
  {
    name: "HackFS"
  }

];

const ProjectSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <IconCloud iconSlugs={slugs} />
  </div>
);

const TalksSkeleton = () => (
  <div className="flex flex-1 w-full h-full items-center justify-center min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <SkewedInfiniteScroll />
  </div>
);

const HackathonSkeleton = () => (
  <div className="flex flex-1 w-full h-full items-center justify-center  rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 bg-secondary-900">
    <HackathonMarque items={hackathons}/>
  </div>
);

const MentorshipSkeleton = () => {

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4 h-full",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-gray-800 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

  return (
    <div className="flex flex-1 w-full h-full items-center justify-center rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 bg-secondary-900 relative max-h-[170px] min-h-[170px] overflow-hidden">
        <Mentorship>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </Mentorship>
    </div>

  )
};

export const items = [
  {
    title: "Talks",
    description: "We host talks by industry experts and alumni.",
    header: <TalksSkeleton />,
    className: "md:col-span-2",
    icon: <IconPhone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Projects",
    description: "Build projects that solve real-world problems.",
    header: <ProjectSkeleton />,
    className: "md:col-span-1",
    icon: <IconGitBranch className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mentorships",
    description: "Get mentored by industry professionals.",
    header: <MentorshipSkeleton />,
    className: "md:col-span-1",
    icon: <IconFriends className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Hackathons",
    description:
      "Participate in hackathons and showcase your skills to the world.",
    header: 
      <HackathonSkeleton/>,
    className: "md:col-span-2",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
];

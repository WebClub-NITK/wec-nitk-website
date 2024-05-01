"use client";
import { BackgroundBeams, Logo } from "@/components/background-beams";

import {
  WhatWeDoSection,
} from "@/components/what-we-do";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="flex h-fit  flex-col items-start justify-start md:justify-center  bg-secondary-800">
        <BackgroundBeams className="hidden md:block" />
        <div className="mt-16 md:mt-20 w-full flex flex-col md:h-full justify-center md:justify-center items-center">
          <img
            className=" size-full md:size-1/3  -z-0  bg-transparent animate-pulse"
            src="/logo.svg"
            alt="illustration"
          />
          <div
            className=" h-12 w-full 
          bg-secondary-800 z-10 opacity-85 text-2xl
           text-white lg:text-4xl font-bold text-center flex  justify-center items-center 
          
           "
          >
            Web Enthusiasts` Club NITK
          </div>
        </div>
      </section>
      <section className="bg-secondary-800 text-white h-screen p-12 w-full">
        <WhatWeDoSection />
      </section>
    </main>
  );
}

"use client";
import { BackgroundBeams, Logo } from "@/components/background-beams";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import {
  AboutUsSection,
} from "@/components/about-us";
import { WhatWeDoSection } from "@/components/what-we-do";

export default function Home() {
  return (
    <main className="w-full h-full bg-secondary-800">

      <section className=" flex h-screen flex-col items-start justify-start md:justify-center bg-secondary-800">
        <BackgroundBeams className="hidden md:block" />
        <div className="mt-16 md:mt-20 w-full flex flex-col md:h-full justify-center md:justify-center items-center bg-transparent">
          
          {/* <WebClubOrbitingCircles/> */}

          <img
                className=" size-full md:size-1/2 -z-0 bg-transparent animate-pulse"
                src="/logo.svg"
                alt="illustration"
            />
          
          <div
            className=" h-12 w-full bg-secondary-800 z-10 opacity-85 text-2xl text-primary-50 lg:text-7xl font-bold text-center flex justify-center items-center mb-10"
          >
            Web Enthusiasts`Club NITK
          </div>
        </div>
      </section>

      <section className="bg-primary-50 text-white h-fit w-full border-1 border-secondary-700 rounded-t-3xl rounded-b-3xl">
        <WhatWeDoSection/>
      </section>


      <section className="bg-secondary-800 text-white h-fit p-12 w-full border-1 border-secondary-700">
        <AboutUsSection />
      </section>

      


    </main>
  );
}





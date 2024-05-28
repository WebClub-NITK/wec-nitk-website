"use client";
import { useState, useEffect } from "react";
import { BackgroundBeams, Logo } from "@/components/background-beams";
import { motion } from "framer-motion";
import { AboutUsSection } from "@/components/about-us";
import { WhatWeDoSection } from "@/components/what-we-do";
import Section from "@/components/section-framer";
import { OurSIGS } from "@/components/our-sigs";
import RetroGrid from "@/components/ui/retro-grid";
import { FlipWords } from "@/components/ui/flip-words";
import { Preloader } from "@/components/preloader";

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);


  const handlePreloaderFinish = () => {
    setLoading(false);
    setFirstVisit(false);
  }

  return (
    
    <main className="w-full h-full bg-secondary-800 relative">
      {firstVisit && loading ? (
        <Preloader onFinish={handlePreloaderFinish}/>
      ) : (
        <div>
          <section className="flex h-screen flex-col items-start justify-start md:justify-center bg-secondary-800">
            <BackgroundBeams className="hidden md:block" />
            <div className="mt-[170px] md:mt-20 w-full flex flex-col md:h-full justify-center items-center bg-transparent ">
              <img
                className=" size-full md:size-1/2 -z-0 bg-transparent animate-pulse"
                src="/logo.svg"
                alt="illustration"
              />
              <Section>
              
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}

                  className=" h-12 w-full bg-secondary-800 z-10 opacity-85 text-2xl text-primary-50 lg:text-7xl font-bold text-center flex justify-center items-center mb-10"
                >
                  Web Enthusiasts' Club NITK
                  {/* <FlipWords words={wecHeroWords} duration={3000} /> */}
                </motion.div>

              </Section>
            </div>
          </section>
          <section className="bg-white text-white h-fit w-full border-1 border-secondary-700 rounded-t-3xl rounded-b-3xl">
            <WhatWeDoSection />
          </section>
          <section className="bg-secondary-800 text-white md:h-[60vh] h-fit p-5 w-full border-1 border-secondary-700 relative flex flex-col overflow-hidden">
            <AboutUsSection />
            <RetroGrid />
          </section>
          <section className="bg-white text-white h-fit w-full border-1 border-secondary-700 rounded-t-3xl">
            <OurSIGS />
          </section>
        </div>
      )}
    </main>
  );
}

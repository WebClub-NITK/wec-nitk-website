"use client";
import { BackgroundBeams, Logo } from "@/components/background-beams";
import { AccordionDemo } from "@/components/faq";
import Footer from "@/components/footer";
import { Accordion } from "@radix-ui/react-accordion";
import Image from "next/image";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="flex h-screen  flex-col items-start justify-start md:justify-center  bg-secondary-800">
        <BackgroundBeams className="hidden md:block" />
        <div className="relative w-full flex flex-col h-1/2 md:h-full justify-start md:justify-center items-center">
          <Image
            className="absolute z-0 object-contain bg-transparent animate-pulse"
            src="/logo.svg"
            alt="illustration"
            width={1000}
            height={1000}
          />
          <div
            className=" absolute h-24 w-full 
          bg-secondary-800 z-10 opacity-85 text-xl
           text-white lg:text-4xl font-bold text-center flex  justify-center items-center 
           bottom-0
           "
          >
            We are Web Enthusiasts` Club NITK
          </div>
        </div>
      </section>
      <section className="bg-secondary-800 text-white">
        <span className="lg:text-6xl text-3xl font-bold py-12">What we do</span>

        <WhatWeDoSection />
      </section>

      <section className="flex flex-col items-center px-4 justify-between w-full h-screen bg-secondary-800 text-white">
        <span className="lg:text-6xl text-3xl font-bold py-12">FAQ</span>
        <div className="flex flex-col lg:flex-row w-full h-full ">
          <p className="lg:w-1/2 px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quos similique quia aliquid dolorem neque molestiae libero fugit at
            fugiat, natus dolores harum explicabo reiciendis et odio, cumque
            amet quae.
          </p>
          <AccordionDemo />
        </div>
      </section>
    </main>
  );
}

function SectionCard() {
  return (
    <>
      <div className="sm:flex items-center justify-around w-screen lg:px-24 ">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image
              src="/logo.svg"
              alt="hackathon "
              className="ml-auto transition-transform"
              width="1080"
              height="1080"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              <span className="text-primary-blue">Hackathons</span>
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function MentorShipSection() {
  return (
    <>
      <div className="sm:flex items-center justify-around w-screen lg:px-24 ">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image
              src="/logo.svg"
              alt="mentorship "
              className="ml-auto transition-transform"
              width="1080"
              height="1080"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              <span className="text-primary-blue">Mentorship</span>
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectsSection() {
  return (
    <>
      <div className="sm:flex items-center justify-around w-screen lg:px-24">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image
              src="/logo.svg"
              alt="projects"
              className=" ml-auto transition-transform"
              width="1080"
              height="1080"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              <span className="text-primary-blue">Projects</span>
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function HorizontalScrollCarousel({ children }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative w-full h-[600vh] bg-opacity-0">
      <div className="sticky top-0 flex h-screen items-center  overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 ">
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  return (
    <HorizontalScrollCarousel>
      <ProjectsSection />
      <MentorShipSection />
      <MentorShipSection />
      {/* <MentorShipSection /> */}
      {/* <HackathonSection /> */}
    </HorizontalScrollCarousel>
  );
}

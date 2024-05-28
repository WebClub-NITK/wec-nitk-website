"use client";
import * as React from "react";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import Section from "@/components/section-framer";
import { ourSigsData } from "../lib/ourSigsData";
import Image from "next/image";
import useViewportWidth from "../hooks/useViewportWidth";
import { BorderBeam } from "./ui/border-beam";
import { MagicCard, MagicContainer } from "./ui/magic-card";

export function OurSIGS() {
  const width = useViewportWidth();
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-95%"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Section>
        {width > 768 ? (
          <section ref={targetRef} className="relative h-[300vh] ml-4 py-4">
            
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
              <motion.div
                style={{ x }}
                className="flex gap-10 items-center h-[74%]"
              >
                <h2 className=" text-secondary-800 text-2xl font-semibold lg:text-7xl">
                  Our SIG's
                </h2>
                {ourSigsData.map((sig) => (
                  <div
                    className="grid h-full w-full shrink-0 flex-col gap-4 rounded-3xl bg-secondary-800 backdrop-blur-lg p-4 px-4 py-6 lg:w-[525px] lg:p-16 lg:px-12 lg:py-14 justify-items-center relative"
                    key={sig.id}
                  >
                    <BorderBeam />

                    <Image
                      src={`/${sig.imageName}`}
                      width={225}
                      height={225}
                      alt="Picture of sig"
                      className="rounded-full"
                    />
                    {sig.title}
                    <p className="max-w-md leading-6 font-light text-gray-300 items-center justify-center flex">
                      {sig.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        ) : (
          <section className="">
            
            <h2 className=" text-secondary-800 text-2xl font-semibold lg:text-7xl text-center py-6 ">
              Our SIG's
            </h2>
            <div
              className="flex flex-col md:w-[70%] w-[95%] mx-auto pt-2 pb-8 gap-6"
            >

              {ourSigsData.map((sig) => (
                <div
                className="bg-secondary-800 backdrop-blur-lg rounded-3xl justify-items-center md:p-10 p-6 flex flex-col gap-2 items-center relative"
                key={sig.id}
                >
                <BorderBeam />
                  <Image
                    src={`/${sig.imageName}`}
                    width={225}
                    height={225}
                    alt="Picture of sig"
                    className="rounded-full"
                  />
                  {sig.title}
                  <p className="md:max-w-md leading-6 md:font-light font-thin text-center">
                    {sig.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </Section>
    </motion.div>
  );
}

"use client";
import * as React from "react";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import Section from "@/components/section-framer";
import { ourSigsData } from "../lib/ourSigsData";
import Image from "next/image";

export function OurSIGS() {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Section>
        <section
          ref={targetRef}
          className="relative h-[300vh] bg-neutral-900 ml-4"
        >
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex gap-10 items-center h-[95%]"
            >
              <h2 className=" text-secondary-800 text-2xl font-semibold lg:text-7xl">
                Our SIG's
              </h2>
              {ourSigsData.map((sig) => (
                <div
                  className="flex h-full w-full shrink-0 flex-col items-center justify-evenly gap-4 rounded-3xl bg-secondary-400 p-4 px-4 py-6 lg:w-[525px] lg:flex-col-reverse lg:p-16 lg:px-14 lg:py-14"
                  key={sig.id}
                >
                  <p className="max-w-md leading-6 font-light">
                    {sig.description}
                  </p>
                  {sig.title}
                  <Image
                    src={`/${sig.imageName}`}
                    width={225}
                    height={225}
                    alt="Picture of sig"
                    className="rounded-full"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </Section>
    </motion.div>
  );
}

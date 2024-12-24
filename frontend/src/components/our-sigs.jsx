"use client";
import * as React from "react";
import { ourSigsData } from "../lib/ourSigsData";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import Markdown from "react-markdown";
import { Button } from "./ui/button";


export function OurSIGS() {
  
  return (
    <>
        <h2 className=" text-secondary-800 text-2xl font-semibold lg:text-5xl text-center py-9 mb-10 mt-0">
          Our Special Interest Groups
        </h2>

        <TracingBeam className="px-6">
          <div className="md:max-w-[1200px] max-w-2xl mx-auto antialiased pt-4 relative">
            {ourSigsData.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h1 className={"text-xl mb-4"}>
                  {item.title}
                </h1>
                <div className="border-2 rounded-lg p-3 text-sm prose prose-sm dark:prose-invert bg-primary-50 md:backdrop-blur-md bg-opacity-70 text-hackclub-secondary-content flex md:flex-row flex-col gap-5 md:items-center md:justify-center md:max-w-[1200px] ">
                  {item?.imageName && (
                    <Image
                      src={`/${item.imageName}`}
                      alt="sig thumbnail"
                      height="400"
                      width="400"
                      className="rounded-lg object-cover m-0"
                    />
                  )}
                  <div className="md:w-[1000px]">
                    <Markdown className="markdown ">
                      {item.description}
                    </Markdown>
                    <Button className="p-0">
                      <a className=" text-primary-950" href={item.sigPage}>Learn More</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
    </>
  );
}

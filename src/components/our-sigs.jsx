"use client";
import * as React from "react";
import { ourSigsData } from "../lib/ourSigsData";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import Markdown from "react-markdown";

export function OurSIGS() {
  
  return (
    <>
        <h2 className=" text-secondary-800 text-2xl font-semibold lg:text-5xl text-center py-9 mb-10 mt-0">
          Our SIG's
        </h2>

        <TracingBeam className="px-6">
          <div className="md:max-w-[1200px] max-w-2xl mx-auto antialiased pt-4 relative">
            {ourSigsData.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h1 className={"text-xl mb-4"}>
                  {item.title}
                </h1>
    
                <div className="border-2 rounded-md p-3 text-sm prose prose-sm dark:prose-invert bg-primary-50 md:backdrop-blur-md bg-opacity-70 text-hackclub-secondary-content flex md:flex-row flex-col gap-5 md:items-center md:justify-center md:max-w-[1200px] ">
                  {item?.imageName && (
                    <Image
                      src={`/${item.imageName}`}
                      alt="blog thumbnail"
                      height="400"
                      width="400"
                      className="rounded-lg object-cover"
                    />
                  )}
                  <Markdown className="markdown md:w-[1000px]">
                    {item.description}
                  </Markdown>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
    </>
  );
}

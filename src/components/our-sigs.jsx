"use client";
import * as React from "react";
import { ourSigsData } from "../lib/ourSigsData";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import Markdown from "react-markdown";

export function OurSIGS() {
  
  return (
    <>

        <h2 className=" text-secondary-800 text-2xl font-semibold lg:text-5xl text-center py-6 mb-10 mt-10">
          Our SIG's
        </h2>

        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {ourSigsData.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2> */}
    
                <h1 className={"text-xl mb-4"}>
                  {item.title}
                </h1>
    
                <div className="text-sm prose prose-sm dark:prose-invert text-hackclub-secondary-content">
                  {item?.imageName && (
                    <Image
                      src={`/${item.imageName}`}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  <Markdown className="markdown">
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

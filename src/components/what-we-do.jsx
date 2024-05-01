import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SideScroll } from "@/components/ui/side-scroll";

export function WhatWeDoSection() {
  return (

    
<div className="flex flex-col p-2 m-2 ">

        <h1 className=" text-lg font-thin text-secondary-800/50 p-9 mx-auto">OUR ALUMNI'S ARE CURRENTLY AT</h1>


        <div className="h-fit flex flex-col antialiased bg-primary-50 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ring-1 ring-secondary-400/50 rounded-full p-5 w-10/12 mx-auto">
            <SideScroll
                items={press}
                direction="left"
                speed="normal"
            />
    </div>

        

        <h1 className=" text-secondary-800 font-semibold text-5xl p-9 mb-10 mx-auto">Things we do in <span className="text-secondary-800">WebClub</span></h1>
{/* 
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full bg-secondary-800 text-primary-500"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-secondary-800">
            <div className="p-1">
              <Card className="bg-secondary-800 border-s border-secondary-300">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel> */}

</div>

  )
}


const press = [
    "TheNewYorkTimes",
    "TheWashingtonPost",
    "Forbes",
    "Bloomberg",
    "BusinessInsider",
    "TechCrunch",
    "TheGuardian",
    "Wired",
  ];
  


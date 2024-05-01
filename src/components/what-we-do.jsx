import * as React from "react"
import Image from "next/image";

import { WWDCard, WWDCardHeader, WWDCardFooter, WWDCardTitle, WWDCardDescription, WWDCardContent } from "@/components/ui/wwd-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SideScroll } from "@/components/ui/side-scroll";
import graph from "@/assets/graph.png"

export function WhatWeDoSection() {
  return (


    <div className="flex flex-col p-2 m-2 pb-10">

      <h1 className=" text-lg font-light text-secondary-800/50 p-9 mx-auto">OUR ALUMNI'S ARE CURRENTLY AT</h1>


      <div className="h-fit flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ring-1 ring-secondary-400/50 rounded-full p-5 w-10/12 mx-auto">
        <SideScroll
          items={press}
          direction="left"
          speed="normal"
        />
      </div>



      <h1 className=" text-secondary-800 font-semibold text-4xl p-9 mt-[90px] mb-10 mx-auto">Things we do in <span className="text-primary-400">WebClub🕸️</span></h1>

      <div className=" space-y-10">

        {/* Hacks and Projects */}
        <WWDCard className="bg-[#ceffde] flex items-center justify-between w-10/12 h-auto mx-auto rounded-3xl p-8 text-secondary-800 space-x-7">


          <div className="flex flex-col w-1/2">
            <WWDCardHeader className="">
              <WWDCardTitle className="text-4xl font-bold"><span className=" text-[#4ac874]">Learn </span>by doing projects and collaborating with others</WWDCardTitle>
            </WWDCardHeader>

            <WWDCardContent className="space-y-4">
              <WWDCardDescription className=" text-2xl ">
                We conduct workshops on various trending technologies and tools to help students learn and grow.
              </WWDCardDescription>

              <WWDCardDescription className=" text-2xl">
                We conduct workshops on various trending technologies and tools to help students learn and grow.
              </WWDCardDescription>
            </WWDCardContent>
          </div>


          <Image src={graph} className="h-[430px] w-[430px] "></Image>


        </WWDCard>

        {/* Network */}
        <WWDCard className="bg-[#ffdace] flex items-center justify-between w-10/12 h-auto mx-auto rounded-3xl p-8 text-secondary-800 space-x-7">


          <div className="flex flex-col w-1/2">
            <WWDCardHeader className="">
              <WWDCardTitle className="text-4xl font-bold"><span className=" text-[#cd6f50]">Network </span>with smart people</WWDCardTitle>
            </WWDCardHeader>

            <WWDCardContent className="space-y-4">
              <WWDCardDescription className=" text-2xl ">
                We conduct workshops on various trending technologies and tools to help students learn and grow.
              </WWDCardDescription>

              <WWDCardDescription className=" text-2xl">
                We conduct workshops on various trending technologies and tools to help students learn and grow.
              </WWDCardDescription>
            </WWDCardContent>
          </div>


          <Image src={graph} className="h-[430px] w-[430px] "></Image>


        </WWDCard>

        {/* Mentorship and Talks */}
        <WWDCard className="bg-[#cee6ff] flex items-center justify-between w-10/12 h-auto mx-auto rounded-3xl p-8 text-secondary-800 space-x-7">


          <div className="flex flex-col w-1/2">
            <WWDCardHeader className="">
              <WWDCardTitle className="text-4xl font-bold"><span className=" text-[#3071b1]">Talks and Mentorship </span>with smart people</WWDCardTitle>
            </WWDCardHeader>

            <WWDCardContent className="space-y-4">
              <WWDCardDescription className=" text-2xl ">
                We conduct workshops on various trending technologies and tools to help students learn and grow.
              </WWDCardDescription>

              <WWDCardDescription className=" text-2xl">
                We conduct workshops on various trending technologies and tools to help students learn and grow.
              </WWDCardDescription>
            </WWDCardContent>
          </div>


          <Image src={graph} className="h-[430px] w-[430px] "></Image>


        </WWDCard>

      </div>


      {/* <Carousel
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



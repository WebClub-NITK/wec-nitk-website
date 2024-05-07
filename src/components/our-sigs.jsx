'use client'
import * as React from "react"
import { motion, useScroll, useInView } from "framer-motion"
import Section from "@/components/section-framer";
import { SigCard } from "./ui/sig-cards";



export function OurSIGS() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Section>
        <div className="flex flex-col p-2 m-2 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className=" text-secondary-800 font-semibold text-center text-2xl md:text-4xl p-9 mt-[90px] mb-10 mx-auto">
            Our SIG's
          </motion.h1>
          <div className="flex flex-col justify-center items-center">

                  {/* <h1 className="text-[#DB6541] text-[250px] font-bold">algorithms</h1>
                  <h1 className="text-[#BDCC1C] text-[250px] font-bold">intel</h1>
                  <h1 className=" text-[250px] font-bold"><span className="text-[#EA4234]">g</span><span className="text-[#4385F8]">d</span><span className="text-[#139C59]">s</span><span className="text-[#FABD06]">c</span></h1>
                  <h1 className="text-[#F59453] text-[250px] font-bold">systems</h1> */}

          </div>

          

          
          
        </div>

      </Section>

    </motion.div>

  )
}






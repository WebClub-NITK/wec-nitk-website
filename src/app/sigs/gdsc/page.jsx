"use client"

import { useRef } from "react"
import WhatwedoCards from "../WhatwedoCards"
import cards from "./cards"
import { useScroll } from "framer-motion"

export default function GDSC () {
    let container_ref = useRef(null)

    let { scrollYProgress } = useScroll({
        target: container_ref,
        offset: ["start 0.20", "0.75 20vh"]
    })

    return (
        <main>
            <div className="flex flex-col pt-12 h-screen bg-primary-950">
                <img src="/logo.svg" alt="" className="grayscale brightness-125 h-[500px]" />
                <div>
                    <h1 className="text-5xl text-primary-100 font-bold leading-tight text-center">Google Developer Student Club</h1>
                    <p className="text-primary-300 text-center text-2xl font-semibold">everything dev.</p>
                </div>
            </div>
            <div className="bg-primary-950" ref={container_ref}>
                <div className="rounded-3xl bg-white px-4">
                    <div className="flex gap-16 max-w-[1000px] mx-auto">
                        <div className="w-3/5">
                            <div className="h-[400px] flex flex-col justify-center gap-2">
                                <h2 className="text-3xl font-bold">Web Development</h2>
                                <p className="text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur doloremque incidunt quidem qui nihil et esse laudantium, rerum dolorum? Nesciunt a perspiciatis magni molestias velit! Possimus quia vitae repellendus!</p>
                            </div>
                            <div className="h-[400px] flex flex-col justify-center gap-2">
                                <h2 className="text-3xl font-bold">App Development</h2>
                                <p className="text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur doloremque incidunt quidem qui nihil et esse laudantium, rerum dolorum? Nesciunt a perspiciatis magni molestias velit! Possimus quia vitae repellendus!</p>
                            </div>
                            <div className="h-[400px] flex flex-col justify-center gap-2">
                                <h2 className="text-3xl font-bold">DevOPs</h2>
                                <p className="text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur doloremque incidunt quidem qui nihil et esse laudantium, rerum dolorum? Nesciunt a perspiciatis magni molestias velit! Possimus quia vitae repellendus!</p>
                            </div>
                            <div className="h-[400px] flex flex-col justify-center gap-2">
                                <h2 className="text-3xl font-bold">Blockchain Teahnology</h2>
                                <p className="text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur doloremque incidunt quidem qui nihil et esse laudantium, rerum dolorum? Nesciunt a perspiciatis magni molestias velit! Possimus quia vitae repellendus!</p>
                            </div>
                        </div>
                        <WhatwedoCards cards={cards} cutoffs={[0.2, 0.5, 0.85]} scrollYProgress={scrollYProgress} />
                    </div>
                </div>
            </div>
        </main>
    )
}



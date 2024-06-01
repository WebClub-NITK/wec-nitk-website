"use client"

import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const spring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
}

export default function GDSC () {
    let container_ref = useRef(null)
    let [ current, setCurrent ] = useState({ active: 0, prev: 0 })

    let { scrollYProgress } = useScroll({
        target: container_ref,
        offset: ["start 0.20", "0.75 20vh"]
    })
    
    let cardsBottom = useTransform(() => scrollYProgress.get() == 1 ? "0px" : "")
    let cardsTop = useTransform(() => {
        let y = scrollYProgress.get()
        if (y == 0) return "0px"
        else if (y < 1) return "20vh"
        else return ""
    })
    let cardsPosition = useTransform(() => {
        let y = scrollYProgress.get()
        if (y > 0 && y < 1) return "fixed"
        else return "absolute"
    })


    useMotionValueEvent(scrollYProgress, "change", y => {
        let newCurrent = getCurrent(y)

        if (newCurrent != current.active) {
            setCurrent({ active: newCurrent, prev: current.active })
        }
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
                <div className="rounded-t-3xl bg-white px-4">
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
                        <div className="relative w-2/5">
                            <motion.div className="flex items-center h-[400px]" style={{ top: cardsTop, position: cardsPosition, bottom: cardsBottom }}>
                                <div className="h-[250px] w-[250px] grid grid-cols-2 grid-rows-2">
                                    {
                                        cards[current.active].map((cur, i) => {
                                            let prev = cards[current.prev][i]
                                            let direction = 1
                                            if (current.prev > current.active) direction = -1

                                            return (
                                                <div className="m-2" style={{ transformStyle: "preserve-3d", perspective: "600px" }}>
                                                    <motion.div
                                                        className="absolute top-0 w-full h-full"
                                                        style={{backfaceVisibility: "hidden" }}
                                                        initial={{ rotateY: 0 }}
                                                        animate={{ rotateY: direction*180 }}
                                                        transition={{ ...spring, delay: i*0.1 }}
                                                        key={current.active*10 + i}
                                                    >
                                                        {prev}
                                                    </motion.div>
                                                    <motion.div
                                                        className="absolute top-0 w-full h-full"
                                                        style={{backfaceVisibility: "hidden" }}
                                                        initial={{ rotateY: direction*-180 }}
                                                        animate={{ rotateY: 0 }}
                                                        transition={{ ...spring, delay: i*0.1 }}
                                                        key={current.active*10 + i + 5}
                                                    >
                                                        {cur}
                                                    </motion.div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


function Card ({ bg="#fbfef9", size=60, src }) {
    return (
        <div className="flex justify-center items-center shadow rounded-lg cursor-pointer hover:-translate-y-1 hover:translate-x-1 duration-200 w-full h-full" style={{background: bg}}>
            <img src={src} alt="" style={{ width: size+"px", height: size+"px" }} />
        </div>
    )
}


let cards = [
    [
        <Card size={69} bg={rg("#00000010")} src="/technologies/next.svg" />,
        <Card size={55} bg={rg("#38bdf810")} src="/technologies/tailwind.svg" />,
        <Card size={75} bg={rg("#d3000110")} src="/technologies/rails.svg" />,
        <Card size={60} bg={rg("#ff3e0010")} src="/technologies/svelte.svg" />,
    ],
    [
        <Card size={50} src="/technologies/flutter.png" />,
        <Card size={40} src="/technologies/kotlin.svg" />,
        <Card size={50} src="/technologies/swift.svg" />,
        <Card size={65} src="/technologies/android.png" />,
    ],
    [
        <Card size={50} src="/technologies/travisci.png" />,
        <Card size={55} src="/technologies/gitlab.svg" />,
        <Card size={55} src="/technologies/githubactions.png" />,
        <Card size={55} src="/technologies/kubernetes.svg" />,
    ],
    [
        <Card size={50} src="/technologies/ethereum.svg" />,
        <Card size={45} src="/technologies/metamask.svg" />,
        <Card size={55} src="/technologies/hardhat.svg" />,
        <Card size={50} src="/technologies/solidity.svg" />,
    ],
]


function getCurrent (y) {
    if (y < 0.20) return 0
    else if (y < 0.5) return 1
    else if (y < 0.85) return 2
    else return 3
}

function rg (color) {
    return `radial-gradient(${color}, #fbfef9 70%)`
}
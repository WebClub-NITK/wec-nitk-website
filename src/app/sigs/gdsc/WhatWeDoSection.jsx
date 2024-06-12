"use client"

import { useEffect, useState } from "react"

export default function WhatWeDoSection () {
    let [ count, setCount ] = useState(0)

    useEffect(() => {
        let id = setInterval(()=> setCount(i => i+1), 3000)

        return () => clearInterval(id)
    }, [])

    let images = [
        "/gdsc/whatwedo/incident.png",
        "/gdsc/whatwedo/engineer.png",
        "/gdsc/whatwedo/wec.png",
    ]

    return (
        <div className="bg-primary-950 py-10">
            <div className="mx-auto max-w-[1000px]">
                <h1 className="text-primary-100 text-4xl font-bold mb-10">What we do</h1>
                <div className="bg-white rounded-md max-w-[500px] p-5">
                    <div className="relative h-[275px] overflow-hidden -mt-2">
                        <img src={images[(count+3)%3]} key={count+3} alt="" className="h-40 rounded-md absolute top-0 left-1/2 scale-50 -translate-x-1/2 opacity-0 duration-300" />
                        <img src={images[(count+2)%3]} key={count+2} alt="" className="h-40 rounded-md absolute top-0 left-1/2 scale-75 -translate-x-1/2 opacity-20 duration-300" />
                        <img src={images[(count+1)%3]} key={count+1} alt="" className="h-40 rounded-md absolute top-8 left-1/2 scale-90 -translate-x-1/2 opacity-40 duration-300" />
                        <img src={images[(count)%3]} key={count} alt="" className="h-40 rounded-md absolute top-16 left-1/2 -translate-x-1/2 duration-300" />
                        <img src={images[(count-1)%3]} key={count-1} alt="" className="h-40 rounded-md absolute top-20 left-1/2 -translate-x-[150%] opacity-0 duration-700" />
                    </div>
                    <div>
                        <h2 className= "text-xl font-semibold">Projects</h2>
                        <p className=" text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque et aliquid quisquam inventore deleniti ipsam in dolor temporibus incidunt consectetur, ducimus corporis soluta rerum maxime doloremque. Maxime repellat iste qui!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
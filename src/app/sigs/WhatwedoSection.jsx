import { useState } from "react"
import thresolds from "./helpers/threshold"
import { useMotionValueEvent, useScroll, motion } from "framer-motion"


const spring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
}



export default function WhatwedoSection ({ cards, cutoffs, container }) {
    let getCurrent = thresolds(cutoffs)
    
    let [ current, setCurrent ] = useState({ active: 0, prev: 0 })
    let [ position, setPosition ] = useState({ top: "0px", bottom: "", position: "absolute" })

    let { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.20", "0.75 20vh"]
    })


    useMotionValueEvent(scrollYProgress, "change", y => {
        if (y==0) setPosition({ top: "0px", bottom: "", position: "absolute" })
        else if (y<1) setPosition({ top: "20vh", bottom: "", position: "fixed" })
        else setPosition({ top: "", bottom: "0px", position: "absolute" })

        let newCurrent = getCurrent(y)

        if (newCurrent != current.active) {
            setCurrent({ active: newCurrent, prev: current.active })
        }
    })

    return (
        <div className="relative w-2/5">
            <motion.div className="flex items-center h-[400px]" style={{ ...position }}>
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
                                        key={-(current.active*10 + i)}
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
    )
}
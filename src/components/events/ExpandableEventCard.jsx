"use client"
import { useEffect, useState } from "react"
import EventCard from "./EventCard"
import EventModal from "./EventModal"
import { AnimatePresence, motion } from "framer-motion"

export default function ExpandableEventCard ({ event }) {
    let [ modalInitial, setModalInitial ] = useState(false)

    useEffect(() => {
        if (modalInitial) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [modalInitial])

    /**
     * @type {(rect: DOMRect) => void} clickHandler 
    */
    function clickHandler (rect) {
        setModalInitial({
            x: `calc(50% - 50vw + ${rect.x}px)`,
            y: `calc(50% - 50vh + ${rect.y}px)`,
            width: rect.width,
            height: rect.height
        })
    }

    return (
        <>
            <EventCard event={event} clickHandler={clickHandler}/>
            <AnimatePresence>
                {modalInitial ? 
                    <EventModal event={event} initial={modalInitial} handleClose={() => setModalInitial(false)}/>
                : null}
            </AnimatePresence>
        </>
    )
}
"use client"
import { useState } from "react"
import EventCard from "./EventCard"
import { AnimatePresence, motion } from "framer-motion"
import EventModal from "./EventModal"

export default function ExpandableEventCard ({ event }) {
    let [ modalInitial, setModalInitial ] = useState(false)

    /**
     * @type {(rect: DOMRect) => void} clickHandler 
    */
    function clickHandler (rect) {
        setModalInitial({
            left: rect.x,
            top: rect.y,
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
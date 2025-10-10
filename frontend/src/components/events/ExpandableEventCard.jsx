"use client"

import { useEffect, useState } from "react"
import EventCard from "./EventCard"
import EventModal from "./EventModal"
import { AnimatePresence, motion } from "framer-motion"
import { createEventSlug, getEventIdFromSlug } from "@/app/(normal)/events/event_utils"

export default function ExpandableEventCard ({ event }) {
    let [ modalInitial, setModalInitial ] = useState(null)

    let slug = createEventSlug(event.title, event.id)
    let isOpen = () => parseInt(getEventIdFromSlug(getHash())) == event.id
    
    useEffect(() => {
        if (isOpen()) 
            setModalInitial({ x: 0, y: 0, width: 0, height: 0})
    }, [])

    useEffect(() => {
        if (modalInitial == null) return

        if (modalInitial) {
            document.body.style.overflow = "hidden"
            window.location.hash = slug
        } else {
            document.body.style.overflow = "auto"
            window.location.hash = ""
            if (isOpen()) {
                let y = window.scrollY
                window.location.hash = ""
                window.scrollTo(0, y)
            }
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


function getHash () {
    return window.location.hash.slice(1)
}
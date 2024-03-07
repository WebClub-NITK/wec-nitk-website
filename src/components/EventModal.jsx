"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect } from "react"

export default function EventModal ({ event, initial, handleClose }) {

    // format the time of the event
    let time = new Date(event.date_time)
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let timestring = `${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}, ${time.getHours()}:${time.getMinutes()}`


    // enable closing modal on clicking esc key
    useEffect(() => {
        function handleKeydown (e) {
            if (e.key == "Escape") {
                handleClose()
                dispose()
            }
        }
        
        document.addEventListener("keydown", handleKeydown)

        function dispose () {
            document.removeEventListener("keydown", handleKeydown)
        }
        return dispose
    }, [])

    return (
        <motion.div 
            className="fixed left-0 top-0 h-screen w-screen z-10"
            animate = {{ backgroundColor: "#000000aa" }}
            exit = {{ backgroundColor: "#00000000" }}
            onClick = {handleClose}
        >
            <motion.div 
                className="bg-white rounded-lg shadow-lg max-w-[90%] fixed overflow-hidden flex justify-center items-top"
                initial = {{ ...initial }}
                animate = {{ width: "max(500px, 70%)", height: "70%", top: "15%", left: "min(calc(50% - 250px), 15%)" }}
                exit = {{ opacity: 0, scale: 0.6 }}
                transition = {{ ease: "easeInOut" }}
                onClick = {e => e.stopPropagation()}
            >
                <div className="flex w-[max(500px,70vw)] h-[70vh] p-7 gap-7 shrink-0">
                    <Image src={event.cover_image} height={200} width={200} alt="" className="w-56 h-56 rounded-lg" />
                    <div>
                        <h1 className="font-bold text-2xl mb-2">{event.title}</h1>
                        <p className="flex items-center gap-1 mb-1"><HiOutlineStatusOnline size={20} />{event.event_type} | {timestring}</p>
                        <p className="flex items-center gap-1"><FaLocationDot />{event.location}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
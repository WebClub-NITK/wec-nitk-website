"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaLocationDot, FaSpider } from "react-icons/fa6";
import { useEffect } from "react"
import { CalendarClock } from "lucide-react"

export default function EventModal ({ event, initial, handleClose }) {

  const {
    id,
    sig,
    title,
    date_time,
    event_type,
    location,
    link,
    cems_link,
    body,
    cover_image,
    resources,
  } = event;

    // format the time of the event
    const date = new Date(date_time).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const time = new Date(date_time).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
    });



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
                className="bg-white rounded-lg shadow-lg max-w-[90vw] fixed overflow-hidden flex justify-center items-top"
                initial = {{ ...initial }}
                animate = {{ width: "max(800px, 70vw)", height: "70vh", top: "50%", left: "50%", x: "-50%", y: "-50%" }}
                exit = {{ opacity: 0, scale: 0.6 }}
                transition = {{ ease: "easeInOut" }}
                onClick = {e => e.stopPropagation()}
            >
                <div className="w-[max(800px,70vw)] h-[70vh] p-7 shrink-0 max-w-[90vw]">
                    <div className="flex flex-col sm:flex-row gap-7">
                        <Image src={event.cover_image} height={200} width={200} alt="" className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg" />
                        <div>
                            <h1 className="font-bold text-xl mb-2 md:text-2xl">{title}</h1>
                        
                            <time className="text-xs sm:text-sm font-bold text-primary-blue flex items-center mb-4">
                                <div className="border-r-2 border-primary-blue pr-2 mr-2 flex items-center">
                                    <CalendarClock size={25} className="inline mr-2" />
                                    <span>{date}</span>
                                </div>
                                <span>{time}</span>
                            </time>
                            <p className="flex items-center mb-1 sm:mb-2 text-sm sm:text-base"><FaLocationDot />&nbsp;{location}</p>
                            <p className="flex items-center mb-1 sm:mb-2 text-sm sm:text-base"><HiOutlineStatusOnline size={25}/>&nbsp;{event_type}</p>
                            <p className="flex items-center mb-1 sm:mb-2 text-sm sm:text-base"><FaSpider size={20}/>&nbsp;{sig}</p>
                        </div>
                    </div>
                    <br />
                    <p className="text-lg text-justify">{body}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}
"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaLocationDot, FaSpider } from "react-icons/fa6";
import { RiCalendarEventFill } from "react-icons/ri";
import { MdVideoChat } from "react-icons/md";
import { CalendarClock } from "lucide-react"
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect } from "react"
import EventType from "./EventType"
import Link from "next/link"

export default function EventModal ({ event, initial, handleClose }) {

  const {
    id,
    sigs,
    title,
    date_time,
    event_type,
    location,
    link,
    cems_link,
    body,
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

    // format options : large (1000x1000), medium (750x750), small(500x500) , thumbnail(150x150)
    const cover_image = `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${event.cover_images.data[0].attributes.formats.small.url}`


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
            className="fixed left-0 top-0 h-screen w-screen z-50 flex justify-center items-center"
            animate = {{ backgroundColor: "#111111dd" }}
            exit = {{ backgroundColor: "#11111100" }}
            onClick = {handleClose}
        >
            <motion.div 
                className="bg-secondary-600 sm:rounded-lg sm:border-[1px] border-accent-200 overflow-hidden flex justify-center items-top"
                initial = {{ ...initial }}
                animate = {{ width: "initial", height: "initial", x: 0, y: 0}}
                exit = {{ opacity: 0, scale: 0.6 }}
                transition = {{ ease: "easeInOut" }}
                onClick = {e => e.stopPropagation()}
            >
                <div className=" no-scrollbar bg-secondary-700 w-[max(800px,70vw)] sm:max-h-[80vh] sm:h-fit min-h-[55vh] h-screen sm:p-9 pb-[calc(28px_+_100vh_-_100svh)] shrink-0 sm:max-w-[90vw] max-w-full overflow-scroll relative">
                    {/* close button */}
                    <IoIosCloseCircle onClick={handleClose} size={40} className="fixed top-3 right-3 sm:hidden bg-white rounded-full"/>


                    <div className="flex flex-col sm:flex-row gap-7">
                        <Image src={cover_image} height={200} width={200} alt="" className="w-full h-56 object-cover sm:w-48 sm:h-48 sm:rounded-lg" />
                        <div className="sm:p-0 px-7">
                            <h1 className="font-bold text-xl mb-2 md:text-2xl text-white">{title}</h1>
                        
                            <time className="text-xs sm:text-sm font-bold text-primary-blue flex items-center mb-4 text-primary-200">
                                <div className="border-r-2 border-primary-blue pr-2 mr-2 flex items-center">
                                    <CalendarClock size={25} className="inline mr-2" />
                                    <span>{date}</span>
                                </div>
                                <span>{time}</span>
                            </time>
                            {location ? <p className="flex gap-2 items-center mb-3 text-sm text-primary-200"><FaLocationDot className="ml-[2px]" size={16} />{location}</p> : null}
                            <div className="flex text-primary-200">
                                <div className={link || cems_link ? "border-r-[1px] border-r-gray-500 border-dotted pr-5 py-2" : ""}>
                                    <EventType type={event_type} />
                                    <p className="flex gap-2 mb-1 items-center text-sm text-primary-200">
                                        <FaSpider size={20}/>
                                        {(sigs.data).map(sig => sig.attributes.name).join(", ")}
                                    </p>
                                </div>
                                <div className="py-3 pl-4">
                                    {link ? <p className="flex gap-2 items-center mb-3 text-sm"><MdVideoChat size={19}/><Link className="text-primary-blue underline" href={link}>Attend here</Link></p> : null}
                                    {cems_link ? <p className="flex gap-2 items-center text-sm"><RiCalendarEventFill size={19} /><Link className="text-primary-blue underline" href={cems_link}>View on CEMS</Link></p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <p className="text-base text-justify sm:p-0 px-7 text-white whitespace-pre">{body}</p>
                    {resources ? 
                        <div className="sm:p-0 px-7">
                            <h2 className="font-bold text-lg mt-4 md:text-xl text-white">Resources</h2>
                            <ul className="list-disc ml-6 mt-2">
                                {resources.map(r => <li className="text-white">{r}</li>)}
                            </ul>
                        </div>
                    : null}
                </div>
            </motion.div>
        </motion.div>
    )
}
"use client";
import Image from "next/image";
import { CalendarClock } from "lucide-react";
import { useRef } from "react"

export default function EventCard({ event, clickHandler = () => null }) {
  const {
    id,
    sig,
    title,
    date_time,
    location,
    link,
    cems_link,
    body,
    resources,
  } = event;

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
  const cover_image = `${process.env.NEXT_PUBLIC_STRAPI_URL}${event.cover_images.data[0].attributes.formats.large.url}`

  let cardRef = useRef()

  return (
    <article 
      className="rounded-lg overflow-hidden shadow transition hover:shadow-lg hover:-translate-y-2 duration-300 m-4 bg-secondary-600 cursor-pointer"
      onClick={() => clickHandler(cardRef.current.getBoundingClientRect())}
      ref={cardRef} 
    >
      <div className="h-56 w-full relative overflow-hidden">
        {/* IMAGE */}
        <Image
          alt="Office"
          src={cover_image}
          width={2070}
          height={800}
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>

      <div className=" p-4 flex flex-col">
        {/* DATE */}
        <time className="py-2 text-xs font-bold text-primary-200 flex justify-between">
          <div className="flex items-center">
            <CalendarClock size={22} className="inline mr-2" />
            <span>{date}</span>
          </div>
          <span>{time}</span>
        </time>

        {/* TITLE */}
        <h3 className="mt-1 text-lg text-white ">
          {title}
        </h3>

        {/* TAGS */}
        {/* <div className=" mt-4 flex flex-wrap gap-2 ">
        </div> */}
      </div>
    </article>
  );
}

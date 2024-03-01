"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CalendarClock } from "lucide-react";

export default function EventCard({ event }) {
  const {
    id,
    sig,
    title,
    date_time,
    location,
    link,
    cems_link,
    body,
    cover_image,
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

  return (
    <article className=" rounded-lg h-full overflow-hidden shadow transition hover:shadow-lg hover:-translate-y-2 duration-300-2 m-4 bg-white dark:bg-darkCard">
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

      <div className="bg-white p-4 h-full flex flex-col ">
        {/* DATE */}
        <time className=" py-2 text-s text-primary-blue flex justify-between">
          <div className="flex items-center">
            <CalendarClock className="inline mr-2" />
            <span>{date}</span>
          </div>
          <span>{time}</span>
        </time>

        {/* TITLE */}
        <h3 className="mt-0.5 text-lg text-gray-900 ">
          {title}
        </h3>

        {/* TAGS */}
        {/* <div className=" mt-4 flex flex-wrap gap-2 ">
        </div> */}
      </div>
    </article>
  );
}

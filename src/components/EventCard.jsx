"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

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

  return (
    <article className="rounded-lg h-full overflow-hidden shadow transition hover:shadow-lg hover:-translate-y-2 duration-300-2 m-4 bg-white dark:bg-gray-800">
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

      <div className="bg-white dark:bg-gray-800 p-4 h-full flex flex-col ">
        {/* DATE */}
        <time
          dateTime="2022-10-10"
          className="block text-s text-gray dark:text-gray-400"
        >
            {new Date(date_time).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
            })}
        </time>

        {/* TITLE */}
        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
        {title}
        </h3>

        {/* TAGS */}
        <div className=" mt-4 flex flex-wrap gap-2 ">
        </div>
      </div>
    </article>
  );
}

import { demoEvents } from "@/lib/eventsDemoData";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
    return (
        <>
            <div className=" h-screen">
                <section className="relative inset-0 min-h-full w-full bg-opacity-10  bg-gray bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                    <div className="relative mx-auto py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
                        <h2 className="my-4 px-4 text-4xl font-bold dark:text-white">Events</h2>
                        <div className="mx-auto grid max-w-screen sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* Event cards here */}
                            {demoEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

import { demoEvents } from "@/lib/eventsDemoData";
import EventCard from "@/components/EventCard";
import ExpandableEventCard from "@/components/ExpandableEventCard"

export default function EventsPage() {
    return (
        <>
            <section className="min-h-full bg-opacity-10 bg-gray bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="mx-auto py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
                    <h2 className="my-4 px-4 text-4xl font-bold dark:text-white">Events</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Event cards here */}
                        {demoEvents.map((event) => (
                            <ExpandableEventCard key={event.id} event={event} />
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}

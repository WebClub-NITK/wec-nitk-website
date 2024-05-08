"use client"
import { useState, useEffect } from "react";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { ArrowRightIcon } from '@/components/icons/arrow';
import { TrophyIcon } from '@/components/icons/trophy'
import {Loading} from '@/components/Loading/loading';
import { CalendarClock } from "lucide-react";


const Hackathons = [
    {
        title: "HackNITR",
        description: "HackNITR is a hackathon conducted by WebClub NITR.",
        image: "/placeholder.svg",
        prize: "upto 10K USD",
        value: "ongoing",
        link: "https://hacknitr.tech",
        mode: "Virtual",
        timeline: "May 27 - June 21"
    },
    {
        title: "soonami",
        description: "HackNITR is a hackathon conducted by WebClub NITR.",
        image: "/placeholder.svg",
        prize: "125K USD",
        value: "ongoing",
        link: "https://hacknitr.tech",
        mode: "In-Person",
        timeline: "May 27 - June 21"
    },
    {
        title: "HackFS",
        description: "HackNITR is a hackathon conducted by WebClub NITR.",
        image: "/placeholder.svg",
        prize: "10K USD",
        value: "ongoing",
        link: "https://hacknitr.tech",
        mode: "Virtual",
        timeline: "May 27 - June 21"
    },
    {
        title: "HackFS",
        description: "HackNITR is a hackathon conducted by WebClub NITR.",
        image: "/placeholder.svg",
        prize: "10K USD",
        value: "past",
        link: "https://hacknitr.tech",
        mode: "Virtual",
        timeline: "May 27 - June 21"

    },
    {
        title: "HackFS",
        description: "HackNITR is a hackathon conducted by WebClub NITR.",
        image: "/placeholder.svg",
        prize: "10K USD",
        value: "upcoming",
        link: "https://hacknitr.tech",
        mode: "Virtual",
        timeline: "May 27 - June 21"
    },
]

export default function HackClubDashBoard() {
    const [activeTab, setActiveTab] = useState('ongoing');
    const [loading, setLoading] = useState(true);

    const handleTabChange = (value) => {
        setActiveTab(value);
    };

    useEffect(() => {
        setLoading(false);
    }, [activeTab]);

    return (

        // loading ? 
        // <Loading /> :

       <>
            <section className="w-full h-[80vh] flex items-center justify-center bg-accent-900 bg-cover bg-center">
                <div className="container px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Hack<span className=' text-hackclub-primary'>Club</span> NITK</h1>
                    <p className="max-w-[600px] mx-auto text-lg md:text-xl text-gray-500">
                        Discover and share hackathons, connect with like-minded individuals, and form teams to bring your ideas to
                        life.
                    </p>
                </div>
            </section>


            <section className="min-h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="mx-auto p-5 py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">

                    <h2 className="mt-12 mb-4 px-4 text-4xl font-bold text-hackclub-primary">Explore Hackathons</h2>

                    <Tabs className="w-full max-w-6xl mx-auto" defaultValue="ongoing" onChange={handleTabChange}>
                        <TabsList className="grid grid-cols-3 gap-2 md:gap-4 border bg-hackclub-background">
                            <TabsTrigger value="past">Past</TabsTrigger>
                            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
                            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                        </TabsList>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6'>
                            {Hackathons.map((hackathon, index) => (
                                <TabsContent key={index} value={hackathon.value}>
                                    <Card className="relative bg-hackclub-side">

                                    <div className="absolute top-4 left-4 bg-secondary-900 text-gray-50 px-3 py-1 rounded-t-md rounded-bl-md text-xs font-medium">
                                        {hackathon.mode}
                                    </div>


                                        <CardHeader>
                                            <img
                                                alt="Hackathon Image"
                                                className="rounded-t-lg object-cover w-full"
                                                height="200"
                                                src={hackathon.image}
                                                style={{
                                                    aspectRatio: "300/200",
                                                    objectFit: "cover",
                                                }}
                                                width="300"
                                            />
                                        </CardHeader>
                                        <CardContent className="p-4 md:p-6">
                                            <h3 className="text-lg md:text-xl font-semibold">{hackathon.title}</h3>
                                            <p className="text-sm md:text-base text-gray-700 mt-2">
                                                {hackathon.description}
                                            </p>
                                            <div className="flex items-center gap-2 mt-4">
                                            <CalendarClock size={22} className="inline" /><span className="text-sm md:text-base font-medium">{hackathon.timeline}</span>
                                            </div>
                                            <div className="flex items-center gap-2 mt-4">
                                                <TrophyIcon className="w-5 h-5 text-[#F59E0B]" />
                                                <span className="text-sm md:text-base font-medium">{hackathon.prize}</span>
                                            </div>
                                            <a
                                                className="inline-flex items-center gap-2 text-sm md:text-base font-medium mt-4 text-hackclub-primary-dark hover:underline"
                                                href={hackathon.link}
                                                _target="blank"
                                                rel='noreferrer noopener'
                                            >
                                                Learn More
                                                <ArrowRightIcon className="w-4 h-4" />
                                            </a>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </div>
            </section>
        </>

    );
}


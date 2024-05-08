'use client'
import { useState } from 'react';
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

const Hackathons = [
    {
        header: "HackNITR",
        description: "HackNITR is a hackathon conducted by WebClub NITR.",
        image: "/placeholder.svg",
        prize: "upto 10K USD",
        value: "ongoing",
        link: "https://hacknitr.tech",
    },
    {
        header: "soonami",
        description: "HackNITR is a hackathon conducted by WebClub NITR.",
        image: "/placeholder.svg",
        prize: "125K USD",
        value: "ongoing",
        link: "https://hacknitr.tech",
    },
    {
        header: "lalalla",
        description: "HackNITR is a hackathon conducted by WebClub NITR.",
        image: "/placeholder.svg",
        prize: "Prize Pool",
        value: "ongoing",
        link: "https://hacknitr.tech",
    },
    {
        header: "lalalla",
        description: "HackNITR is a hackathon conducted by WebClub NITR.",
        image: "/placeholder.svg",
        prize: "Prize Pool",
        value: "past",
        link: "https://hacknitr.tech",

    },
    {
        header: "lalalla",
        description: "HackNITR is a hackathon conducted by WebClub NITR.",
        image: "/placeholder.svg",
        prize: "Prize Pool",
        value: "upcoming",
        link: "https://hacknitr.tech",
    },
]

export default function HackClubDashBoard() {
    const [activeTab, setActiveTab] = useState('ongoing');

    const handleTabChange = (value) => {
        setActiveTab(value);
    };

    return (
        <>

<section className="w-full h-[80vh] flex items-center justify-center bg-hackclub-primary bg-cover bg-center">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">HackClub NITK</h1>
        <p className="max-w-[600px] mx-auto text-lg md:text-xl text-white">
          Discover and share hackathons, connect with like-minded individuals, and form teams to bring your ideas to
          life.
        </p>
      </div>
    </section>


            <section className="min-h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="mx-auto p-5 py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">

                    <h2 className="mt-12 mb-4 px-4 text-4xl font-bold text-hackclub-primary">Hackathons</h2>

                    <Tabs className="w-full max-w-6xl mx-auto" defaultValue="ongoing" onChange={handleTabChange}>
                        <TabsList className="grid grid-cols-3 gap-2 md:gap-4 border bg-hackclub-background">
                            <TabsTrigger value="past">Past</TabsTrigger>
                            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
                            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                        </TabsList>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6'>
                        {Hackathons.map((hackathon, index) => (
                            <TabsContent value={hackathon.value}>
                                    <Card className=" bg-hackclub-side">
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
                                            <h3 className="text-lg md:text-xl font-semibold">{hackathon.header}</h3>
                                            <p className="text-sm md:text-base text-gray-700 mt-2">
                                                {hackathon.description}
                                            </p>
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

function ArrowRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}


function TrophyIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
    )
}

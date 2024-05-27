"use client"
import Hackathons from "./Hackathons"
import { useState, useEffect } from "react";
import HackathonCard from "@/components/hackclub/HackathonCard";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Loading } from '@/components/Loading/loading';

import HackathonCard from "@/components/hackclub/HackathonCard"

export default function Hackathons({ hackathons }) {
    
    const [activeTab, setActiveTab] = useState('ongoing');
    const [loading, setLoading] = useState(false);

    const handleTabChange = (value) => {
        setActiveTab(value);
    };

    const filteredHackathons = hackathons ? hackathons.filter((hackathon) => hackathon.attributes.status.toLowerCase() === activeTab) : [];

    return(
        <div className="mx-auto p-5 py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
            <h2 className="mt-12 mb-4 px-4 text-4xl font-bold text-hackclub-primary">Explore Hackathons</h2>
            <Tabs className="w-full max-w-6xl mx-auto" defaultValue="ongoing" onValueChange={handleTabChange}>
                <TabsList className="grid grid-cols-3 gap-2 md:gap-4 border bg-hackclub-background">
                    <TabsTrigger value="past">Past</TabsTrigger>
                    <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                </TabsList>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6'>
                    {loading ? (
                        <Loading />
                    ) : (
                        filteredHackathons.map((hackathon) => (
                            <HackathonCard hackathon={hackathon.attributes} key={hackathon.id} />
                        ))
                    )}
                </div>
            </Tabs>
        </div>
    )
}
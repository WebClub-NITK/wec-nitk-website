"use client"
import { useState, useMemo } from "react";
import HackathonCard from "@/components/hackclub/HackathonCard";
import { TabsTrigger, TabsList, Tabs } from "@/components/ui/tabs";
import {
    FilterButton,
    FilterPanel,
    ActiveFiltersDisplay,
    filterByModeAndTheme
} from "@/components/hackclub/HackathonFilters";

export default function Hackathons({ hackathons }) {
    const [activeTab, setActiveTab] = useState('ongoing');
    const [selectedModes, setSelectedModes] = useState([]);
    const [selectedThemes, setSelectedThemes] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    const handleTabChange = (value) => {
        setActiveTab(value);
    };

    const toggleMode = (mode) => {
        setSelectedModes(prev =>
            prev.includes(mode)
                ? prev.filter(m => m !== mode)
                : [...prev, mode]
        );
    };

    const toggleTheme = (theme) => {
        setSelectedThemes(prev =>
            prev.includes(theme)
                ? prev.filter(t => t !== theme)
                : [...prev, theme]
        );
    };

    const clearAllFilters = () => {
        setSelectedModes([]);
        setSelectedThemes([]);
    };

    const hasActiveFilters = selectedModes.length > 0 || selectedThemes.length > 0;
    const activeFilterCount = selectedModes.length + selectedThemes.length;

    // Apply all filters (mode, theme, and tab)
    const filteredHackathons = useMemo(() => {
        const baseFiltered = hackathons
            ? hackathons.filter(h => h.attributes.status.toLowerCase() === activeTab)
            : [];
        return filterByModeAndTheme(baseFiltered, selectedModes, selectedThemes);
    }, [hackathons, activeTab, selectedModes, selectedThemes]);

    // Sort hackathons
    const sortedHackathons = useMemo(() => {
        return [...filteredHackathons].sort((a, b) => {
            const aStart = a.attributes.start_time ? new Date(a.attributes.start_time) : new Date();
            const bStart = b.attributes.start_time ? new Date(b.attributes.start_time) : new Date();
            const aEnd = a.attributes.end_time ? new Date(a.attributes.end_time) : new Date();
            const bEnd = b.attributes.end_time ? new Date(b.attributes.end_time) : new Date();

            if (activeTab === 'upcoming') {
                return aStart - bStart;
            } else if (activeTab === 'ongoing') {
                return aEnd - bEnd;
            } else {
                return bEnd - aEnd;
            }
        });
    }, [filteredHackathons, activeTab]);

    // Count hackathons per category (with filters applied)
    const counts = useMemo(() => {
        const filtered = filterByModeAndTheme(hackathons || [], selectedModes, selectedThemes);
        return {
            past: filtered.filter(h => h.attributes.status.toLowerCase() === 'past').length,
            ongoing: filtered.filter(h => h.attributes.status.toLowerCase() === 'ongoing').length,
            upcoming: filtered.filter(h => h.attributes.status.toLowerCase() === 'upcoming').length,
        };
    }, [hackathons, selectedModes, selectedThemes]);

    return (
        <div className="mx-auto p-5 py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
            <h2 className="mt-8 mb-4 px-4 text-4xl font-bold text-hackclub-primary">Explore Hackathons</h2>
            <p className="px-4 mb-6 text-gray-500">
                Curated hackathons from around the world, also available on our{" "}
                <a
                    href="https://x.com/HackClub_NITK"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-hackclub-primary hover:underline"
                >
                    @HackClub_NITK
                </a>
                {" "}Twitter feed.
            </p>

            <Tabs className="w-full max-w-6xl mx-auto" defaultValue="ongoing" onValueChange={handleTabChange}>
                {/* Tabs row with filter button */}
                <div className="flex items-center gap-3">
                    <TabsList className="grid grid-cols-3 gap-2 md:gap-4 border bg-hackclub-background flex-1">
                        <TabsTrigger value="past" className="flex items-center gap-2">
                            Past
                            <span className="hidden sm:inline text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                                {counts.past}
                            </span>
                        </TabsTrigger>
                        <TabsTrigger value="ongoing" className="flex items-center gap-2">
                            Ongoing
                            <span className="hidden sm:inline text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                {counts.ongoing}
                            </span>
                        </TabsTrigger>
                        <TabsTrigger value="upcoming" className="flex items-center gap-2">
                            Upcoming
                            <span className="hidden sm:inline text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                {counts.upcoming}
                            </span>
                        </TabsTrigger>
                    </TabsList>
                    <FilterButton
                        onClick={() => setShowFilters(!showFilters)}
                        hasActiveFilters={hasActiveFilters}
                        activeCount={activeFilterCount}
                        isOpen={showFilters}
                    />
                </div>

                {/* Filter Panel */}
                <FilterPanel
                    hackathons={hackathons}
                    selectedModes={selectedModes}
                    selectedThemes={selectedThemes}
                    onToggleMode={toggleMode}
                    onToggleTheme={toggleTheme}
                    onClearAll={clearAllFilters}
                    isOpen={showFilters}
                />

                {/* Active Filters Display */}
                <ActiveFiltersDisplay
                    selectedModes={selectedModes}
                    selectedThemes={selectedThemes}
                    onToggleMode={toggleMode}
                    onToggleTheme={toggleTheme}
                    onClearAll={clearAllFilters}
                    showFilters={showFilters}
                />

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 mt-6'>
                    {sortedHackathons.length > 0 ? (
                        sortedHackathons.map((hackathon) => (
                            <HackathonCard hackathon={hackathon.attributes} key={hackathon.id} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500 text-lg">
                                {hasActiveFilters
                                    ? "No hackathons match your filters. Try adjusting your selection."
                                    : activeTab === 'ongoing'
                                        ? "No ongoing hackathons at the moment. Check out upcoming ones!"
                                        : activeTab === 'upcoming'
                                            ? "No upcoming hackathons listed yet. Stay tuned!"
                                            : "No past hackathons to show."}
                            </p>
                        </div>
                    )}
                </div>
            </Tabs>
        </div>
    )
}

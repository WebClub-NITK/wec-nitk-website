import HorizontalScrollCarousel from "./HorizontalScrollCarousel"
import HackathonSection from "./Sections/HackathonSection"
import MentorShipSection from "./Sections/MentorshipSection"
import ProjectsSection from "./Sections/ProjectsSection"

export default function WhatWeDoSection() {
    return(
        <HorizontalScrollCarousel>
            <ProjectsSection/>
            <MentorShipSection/>
            <HackathonSection/>
        </HorizontalScrollCarousel>
    )
}
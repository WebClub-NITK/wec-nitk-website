"use client"

import MemberCard from "@/components/members/MemberCard"
import { useEffect, useState } from "react"
import Filters from "./Filters"

const sigs = ["", "Algorithms", "Intelligence", "GDG On Campus", "Systems & Security"]

export default function Members ({ members, getAlumni }) {
    // 0 - all
    // 1 - algo
    // 2 - intel
    // 3 - gdg
    // 4 - systems
    // 5 - alumni

    let [ selected, setSelected ] = useState(0)
    let [ alumni, setAlumni ] = useState(null)

    useEffect(() => {
        if (selected != 5 || alumni !== null) return

        getAlumni().then(data => setAlumni(data))
    }, [ selected ])

    let membersShown = members

    if (selected == 5) membersShown = alumni || []

    else if (selected != 0) {
        membersShown = members.filter(m => {
            return m.attributes.sigs.data.some(s => s.attributes.name == sigs[selected])
        })
    }

    const roleOrder = ['Convenor', 'Joint Convenor', 'Chairperson', 'Technical Coordinator', 'Algorithms Chair', 'Intelligence Chair', 'GDG On Campus Chair', 'Systems & Security Chair', 'Algorithms Co-Chair', 'Intelligence Co-Chair', 'GDG On Campus Co-Chair', 'Systems & Security Co-Chair', 'CP Community Coordinator', 'Secretary', 'Webmaster', 'Algorithms Secretary', 'Intelligence Secretary', 'GDG On Campus Secretary', 'GDG On Campus Organiser', 'Systems & Security Secretary'];

    const sortedMembers = [...membersShown].toSorted((a, b) => {
        const getPeakRole = member => member.attributes.posts.data.reduce((peakRole, post) => 
            Math.min(peakRole, roleOrder.indexOf(post.attributes.title)), roleOrder.length);
        return getPeakRole(a) - getPeakRole(b);
    });    

    membersShown = sortedMembers;

    return (
        <>
            <Filters selected={selected} select={setSelected} />
            <div className="py-5 grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
                {membersShown.map(member => <MemberCard member={member.attributes} key={member.id} />)}
            </div>
        </>
    )
}
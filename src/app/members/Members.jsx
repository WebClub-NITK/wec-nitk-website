"use client"

import MemberCard from "@/components/members/MemberCard"
import { useEffect, useState } from "react"
import Filters from "./Filters"

const sigs = ["", "Algorithms", "Intelligence", "GDSC", "Systems & Security"]

export default function Members ({ members, getAlumni }) {
    // 0 - all
    // 1 - algo
    // 2 - intel
    // 3 - gdsc
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

    return (
        <>
            <Filters selected={selected} select={setSelected} />
            <div className="py-10 grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
                {membersShown.map(member => <MemberCard member={member.attributes} key={member.id} />)}
            </div>
        </>
    )
}
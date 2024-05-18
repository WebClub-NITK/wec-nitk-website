import Members from "./Members"

export default async function MembersPage () {
    let members = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL+"/api/members?populate[posts][fields][0]=title&populate[sigs][fields][0]=name&populate=image&filters[alumni][$eq]=false", {
        headers: { Authorization: "Bearer " + process.env.STRAPI_API_KEY },
        next: { revalidate: 0 }
    })
    let membersData = (await members.json()).data
    
    return (
        <main className="bg-secondary-800 pt-32 min-h-[calc(100vh-72px)] text-white">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-bold">Our Team</h1>
                <h2 className="text-primary-300 font-semibold">The people that make us great :)</h2>

                <Members members={membersData} getAlumni={getAlumni} />

            </div>
        </main>
    )
}

async function getAlumni () {
    "use server"

    let alumni = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL+"/api/members?populate[posts][fields][0]=title&populate[sigs][fields][0]=name&populate=image&filters[alumni][$eq]=true", {
        headers: { Authorization: "Bearer " + process.env.STRAPI_API_KEY },
        next: { revalidate: 0 }
    })

    let alumniData = (await alumni.json()).data
    return alumniData
}

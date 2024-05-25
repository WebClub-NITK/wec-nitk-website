import Members from "./Members"

export default async function MembersPage () {
    let members = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL+"/api/members?populate[posts][fields][0]=title&populate[sigs][fields][0]=name&populate=image&filters[alumni][$eq]=false", {
        headers: { Authorization: "Bearer " + process.env.STRAPI_API_KEY },
        next: { revalidate: 0 }
    })
    let membersData = (await members.json()).data
    
    return (
        <main className="min-h-[calc(100vh-72px)] text-white bg-primary-50/70">
            <section className="w-full h-[45vh] pt-12 flex items-center justify-center bg-accent-900 bg-cover bg-center">
                <div className="container px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight"><span className=" text-primary-100">WebClub</span> Members</h1>
                    <p className="max-w-[600px] mx-auto text-md md:text-md text-gray-200">
                        The people that make us great :)
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4">
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

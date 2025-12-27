import Members from "./Members"

export default async function MembersPage () {
    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
    let membersData = []
    
    try {
        let members = await fetch(`${backendUrl}/api/members?populate[posts][fields][0]=title&populate[sigs][fields][0]=name&populate=image&filters[alumni][$eq]=false`, {
            headers: { Authorization: "Bearer " + process.env.STRAPI_API_KEY },
            next: { revalidate: parseInt(process.env.REVALIDATE) || 0 }
        })
        membersData = (await members.json()).data || []
    } catch (error) {
        console.error('Error fetching members:', error)
        membersData = []
    }
    
    return (
        <main className="min-h-[calc(100vh-72px)] text-white bg-primary-50/70">
            <section className="w-full h-[45vh] pt-12 flex items-center justify-center bg-cover bg-center bg-members-blur-dark">
                <div className="container px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight "><span className=" text-primary-100">WebClub</span> Members</h1>
                    <p className="max-w-[600px] mx-auto text-md md:text-md text-white ">
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

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
    
    try {
        let alumni = await fetch(`${backendUrl}/api/members?populate[posts][fields][0]=title&populate[sigs][fields][0]=name&populate=image&filters[alumni][$eq]=true`, {
            headers: { Authorization: "Bearer " + process.env.STRAPI_API_KEY },
            next: { revalidate: parseInt(process.env.REVALIDATE) || 0 }
        })

        let alumniData = (await alumni.json()).data
        return alumniData || []
    } catch (error) {
        console.error('Error fetching alumni:', error)
        return []
    }
}

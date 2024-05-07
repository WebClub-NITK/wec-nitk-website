import MemberCard from "@/components/members/MemberCard"

export default async function MembersPage () {
    let members = await fetch(process.env.STRAPI_BASE_URL+"/api/members?populate[posts][fields][0]=title&populate=image", {
        headers: { Authorization: "Bearer " + process.env.STRAPI_API_KEY },
        next: { revalidate: 0 }
    })
    let membersData = (await members.json()).data
    return (
        <main className="bg-secondary-800 pt-32 text-white">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-bold">Our Team</h1>
                <h2 className="text-primary-300 font-semibold">The people that make us great :)</h2>

                <div className="py-10 grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
                    {membersData.map(member => <MemberCard member={member.attributes} key={member.id} />)}
                </div>
            </div>
        </main>
    )
}
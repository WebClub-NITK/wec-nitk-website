import MemberCard from "@/components/members/MemberCard"
import { demoMembers } from "@/lib/memberDemoData"

export default function MembersPage () {
    return (
        <main className="bg-secondary-800 pt-32 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold">Our Team</h1>
                <h2 className="text-primary-300 font-semibold">The people that make us great :)</h2>

                <div className="py-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {demoMembers.map(member => <MemberCard member={member} key={member.id} />)}
                </div>
            </div>
        </main>
    )
}
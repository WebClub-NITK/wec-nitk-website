import Hackathons from "./Hackathons"

export default async function HackClubDashBoard() {

    const response = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/hackathons?populate=image", {
        headers: { Authorization: "Bearer " + process.env.STRAPI_API_KEY },
        next: { revalidate: parseInt(process.env.REVALIDATE) || 0 }
    })
    let hackathons = (await response.json()).data;

    const now = new Date();
    hackathons = hackathons.map(hackathon => {
        const startTime = new Date(hackathon.attributes.start_time);
        const endTime = new Date(hackathon.attributes.end_time);

        if (now >= startTime && now <= endTime) {
            hackathon.attributes.status = "Ongoing";
        } else if (now < startTime) {
            hackathon.attributes.status = "Upcoming";
        } else {
            hackathon.attributes.status = "Past";
        }

        return hackathon;
    });

    return (
        <>
            <section className="w-full h-[80vh] flex items-center justify-center bg-accent-900 bg-cover bg-center">
                <div className="container px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Hack<span className=' text-hackclub-primary'>Club</span> NITK</h1>
                    <p className="max-w-[600px] mx-auto text-lg md:text-xl text-gray-500">
                        Discover and share hackathons, connect with like-minded individuals, and form teams to bring your ideas to
                        life.
                    </p>
                </div>
            </section>

            <section className="min-h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <Hackathons hackathons={hackathons} />
            </section>
        </>
    );
}
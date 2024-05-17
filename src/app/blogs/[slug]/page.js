

export default function Page({ params }) {
    return (
        <section className="w-full h-[40vh] flex items-center justify-center bg-accent-900 bg-cover bg-center">
            <div className="container px-4 md:px-6 text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight"><span className=" text-primary-100">WebClub</span> Blogs</h1>
                <p className="max-w-[600px] mx-auto text-md md:text-md text-gray-200">
                    Blog ID - {params.slug}
                </p>
            </div>
        </section>
    )
}
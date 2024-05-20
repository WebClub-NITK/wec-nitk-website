import { Button } from "@/components/ui/button"
import { getBlog } from "@/helpers/getBlog"
import MoreBlogsSection from "@/components/blogs/MoreBlogsSection"
import { getStrapiMedia } from "@/helpers/strapi_api"
import ShareSection from "@/components/blogs/ShareSection"
import Image from "next/image"

export default async function Page({ params }) {
  
    let blog = await getBlog(params.slug)
    let {title , body , date_time , written_by , sigs} = blog.attributes

    // fetch cover_image url
    let cover_image = getStrapiMedia(blog.attributes.cover_image.data.attributes.url)
    if(cover_image === null) cover_image = '/placeholder.svg'

    // generate categories
    sigs = sigs.data
    sigs = sigs.map((sig) => {
        return <Button key={sig.id} className="text-xs py-1 px-2 rounded-3xl bg-primary-200/20" variant="ghost">
                {sig.attributes.name}
            </Button>
    })
    const date = new Date(date_time).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric'
    })

    return (
        <>
            <section className="w-full h-24 flex items-center justify-center bg-accent-900 bg-cover bg-center">
            </section>
            {/* Blog content */}
            <div key="1" className="px-4 sm:px-6 lg:px-40 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">

                            {/* BLOG TITLE */}
                            <h1 className="text-5xl font-bold leading-tight mb-4">
                                {title}
                            </h1>
                            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                                
                                {/* Published date */}
                                <time dateTime="2024-05-15">{date}</time>
                                <span>•</span>
                                
                                {/* writer names */}
                                <span>By</span>
                                <span>{written_by.data.map((writer) => {
                                    return (
                                        <a key={writer.id} href={writer.attributes.linkedin_id} target="_blank" rel="noopener noreferrer">
                                            <span>{writer.attributes.name}</span>
                                        </a>
                                    )
                                })}</span>

                            </div>
                            <div className="mb-6">
                                {/* Cover image */}
                                <Image
                                    alt="Chart"
                                    className="w-full h-auto bg-green-200"
                                    height="400"
                                    src={cover_image}
                                    style={{
                                        aspectRatio: "600/400",
                                        objectFit: "cover",
                                    }}
                                    width="600"
                                />
                            </div>
                            {/* Blog content */}
                            <p className="text-lg mb-6">
                                {body}
                            </p>
                        </div>

                        {/* Sidebar section */}
                        <div className="lg:max-w-80 md:order-last md:row-span-3">

                            {/* Share section */}
                            <div className="mb-6">
                                <ShareSection/>
                            </div>

                            {/* Categories section */}
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold">Categories</h2>
                                <div className="mt-2">
                                    {sigs}
                                </div>
                            </div>

                            {/* Related articles section */}
                            <div>
                                <MoreBlogsSection currBlogID={params.slug}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function LinkedinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}
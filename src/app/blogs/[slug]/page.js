import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getBlog } from "@/helpers/getBlog"
import MoreBlogsSection from "@/components/blogs/MoreBlogsSection"
import { getStrapiMedia } from "@/helpers/strapi_api"
import Markdown from "react-markdown"
import ShareSection from "@/components/blogs/ShareSection"
import 'highlight.js/styles/atom-one-dark.css';
import rehypeHighlight from "rehype-highlight"

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
                            <article className="prose">
                                <Markdown rehypePlugins={[rehypeHighlight]}>{body}</Markdown>
                            </article>
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
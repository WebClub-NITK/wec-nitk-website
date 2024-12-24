import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getBlog } from "@/helpers/getBlog"
import MoreBlogsSection from "@/components/blogs/MoreBlogsSection"
import { getStrapiMedia } from "@/helpers/strapi_api"
import Markdown from "react-markdown"
import ShareSection from "@/components/blogs/ShareSection"
import 'highlight.js/styles/atom-one-dark.css';
import rehypeHighlight from "rehype-highlight"
import remarkMath from "remark-math"
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"

export async function generateMetadata({ params }) {
    let blog = await getBlog(params.slug)
    const { title, body, date_time, written_by, sigs } = blog.attributes
    const cover_image = getStrapiMedia(blog.attributes.cover_image.data?.attributes.url)

    return {
        metadataBase: new URL('https://webclub.nitk.ac.in'),
        title: title,
        description: body.substring(0, 200),
        openGraph: {
          title: title,
          description: body.substring(0, 200),
          url: `https://webclub.nitk.ac.in/blogs/${params.slug}`,
          siteName: "WebClub NITK Blog",
          images: [
            {
              url: cover_image || 'https://webclub.nitk.ac.in/default-og-image.png',
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          locale: 'en_US',
          type: 'article',
          publishedTime: date_time,
          authors: written_by.data.map(writer => writer.attributes.name),
        },
      }
}

export default async function Page({ params }) {
  
    let blog = await getBlog(params.slug)
    let {title , body , date_time , written_by , sigs} = blog.attributes

    // fetch cover_image url
    let cover_image = getStrapiMedia(blog.attributes.cover_image.data?.attributes.url)
    if(cover_image === null) cover_image = '/placeholder.svg'

    // generate categories
    let categories = sigs.data
    categories = categories.map((category) => {
        return <Button key={category.id} className="text-xs py-1 px-2 rounded-3xl bg-primary-200/20" variant="ghost">
                {category.attributes.name}
            </Button>
    })
    const date = new Date(date_time).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric'
    })



    return (
        <>
            <section className="w-full lg:h-24 h-20 flex items-center justify-center bg-accent-900 bg-cover bg-center">
            </section>
            {/* Blog content */}
            <div key="1" className="px-4 sm:px-6 lg:px-40 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">

                            {/* BLOG TITLE */}
                            <h1 className="lg:text-5xl text-4xl font-bold leading-tight mb-4">
                                {title}
                            </h1>
                            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
                                
                                <div className="flex gap-2 mr-2">
                                    <time>{date}</time>
                                    <span>•</span>
                                    <span>By</span>
                                </div>
                                
                                {/* writer names */}
                                <div className="flex gap-x-2 flex-row flex-wrap">
                                        {written_by.data.map((writer, index) => {
                                            return (
                                                <span key={writer.id}>
                                                    <a href={writer.attributes.linkedin_id} target="_blank" rel="noopener noreferrer">
                                                        {writer.attributes.name}
                                                    </a>
                                                    {/* Add commas after name except the last name */}
                                                    {index < written_by.data.length - 1 ? ' , ' : ''}
                                                </span>
                                            )
                                        })}
                                </div>


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
                            <article className="prose prose-table:overflow-x-auto prose-table:w-full prose-table:block">
                                <Markdown remarkPlugins={[remarkMath,remarkGfm]} rehypePlugins={[rehypeHighlight,rehypeKatex,rehypeRaw]}>{body}</Markdown>
                            </article>
                        </div>

                        {/* Sidebar section */}
                        <div className="lg:max-w-80 md:order-last md:row-span-3">

                            {/* Share section */}
                            <div className="mb-6">
                                <ShareSection title={title}/>
                            </div>

                            {/* Categories section */}
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold">Categories</h2>
                                <div className="mt-2">
                                    {categories}
                                </div>
                            </div>

                            {/* More Blogs section */}
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
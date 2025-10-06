"use client"
import { createBlogSlug } from "@/app/blogs/blog_utils"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { getStrapiMedia } from "@/helpers/strapi_api"
import Image from "next/image"
import Link from "next/link"

export default function LatestBlogCard({latest_blog}) {

  const coverImage = getStrapiMedia(latest_blog.attributes.cover_image.data?.attributes.url)
  const title = latest_blog.attributes.title
  const body = latest_blog.attributes.body
  const date = new Date(latest_blog.attributes.date_time).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: "asia/kolkata"
  })
  const subheading = latest_blog.attributes.subheading
  const tags = latest_blog.attributes.tags.data
  const slug = createBlogSlug(title, latest_blog.id)
  
  return (
    <>
      <Link href={`/blogs/${slug}`}>
          <section className="py-12 px-4">
              <div className=" max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg border border-opacity-25">
                <div>
                  <Image
                    alt="Latest Blog Post"
                    className="md:rounded-l-lg md:rounded-tr-none rounded-t-lg object-cover w-full h-full"
                    height={400}
                    width={600}
                    src={coverImage}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <CardContent className="space-y-4 p-6">
                    <div className="">
                      <p className="text-gray-500 text-sm mb-2">
                        {date}
                      </p>
                      <hr className="border-t" />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">{title}</h2>
                      <p className="text-gray-500 line-clamp-3 mt-2">{subheading}</p>
                    </div>
                  </CardContent>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {
                        tags.map((tag) => {
                          return (
                            <Button key={tag.id} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs" variant="ghost">
                              {tag.attributes.name}
                            </Button>
                          )
                        })
                      }
                    </div>
                  </CardContent>
                </div>
              </div>
          </section>
      </Link>
    </>
  )
}

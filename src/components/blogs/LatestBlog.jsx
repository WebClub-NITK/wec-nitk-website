"use client"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { getStrapiMedia } from "@/helpers/strapi_api"
import Link from "next/link"

export default function LatestBlogCard({latest_blog}) {

  const coverImage = getStrapiMedia(latest_blog[0].attributes.cover_image.data.attributes.url)
  const title = latest_blog[0].attributes.title
  const body = latest_blog[0].attributes.body
  const date = new Date(latest_blog[0].attributes.date_time).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
  const subheading = latest_blog[0].attributes.subheading
  const tags = latest_blog[0].attributes.tags.data
  const slug = latest_blog[0].id
  
  return (
    <>
      <Link href={`/blogs/${slug}`}>
          <section className="py-12 px-4">
              <div className=" max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg border border-opacity-25">
                <div>
                  <img
                    alt="Latest Blog Post"
                    className="md:rounded-l-lg rounded-t-lg object-cover w-full h-full"
                    height={400}
                    src={coverImage}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
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

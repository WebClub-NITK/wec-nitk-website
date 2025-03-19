import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { getStrapiMedia } from "@/helpers/strapi_api"
import Link from "next/link"
import { createBlogSlug } from '@/app/blogs/blog_utils'
import { createBlogSlug } from '@/app/blogs/blog_utils'

export default function BlogCard({ slug, attributes}) {

  const cover_img = attributes.cover_image.data
  const title = attributes.title
  const body = attributes.body
  const date = new Date(attributes.date_time).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: "asia/kolkata"
  })
  const subheading = attributes.subheading
  const tags = attributes.tags.data
  const coverImage = getStrapiMedia(cover_img?.attributes.url)

  const blogSlug = createBlogSlug(title, slug)

  // Create URL-friendly title
  const urlTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim()

  const blogSlug = createBlogSlug(title, slug)

  // Create URL-friendly title
  const urlTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim()

  return (
    <Link href={`/blogs/${urlTitle}-${slug}`}>
    <Link href={`/blogs/${urlTitle}-${slug}`}>
      <Card className="w-fit h-full flex flex-col">
          <div className="relative">
              <Image
              alt="Blog image"
              className="w-full h-48 object-cover rounded-t-lg"
              height="200"
              src={coverImage}
              style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
              }}
              width="300"
              />

          </div>

          <div className="flex-grow flex flex-col justify-between">
                  <CardContent className="space-y-4 p-6">
                      <div className="space-y-1">
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
                      <div className="flex flex-row gap-2 flex-wrap">
                        {
                          tags.map((tag) => {
                            return (
                              <Button key={tag.id} className="text-xs py-1 px-2 rounded-3xl bg-primary-200/20" variant="ghost">
                                {tag.attributes.name}
                              </Button>
                            )
                          })
                        }
                      </div>
                  </CardContent>
          </div>
      </Card>
    </Link>
  )
}
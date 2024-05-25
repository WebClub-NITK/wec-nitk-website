import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { getStrapiMedia } from "@/helpers/strapi_api"
import Link from "next/link"

export default function BlogCard({ slug, attributes}) {

  const cover_img = attributes.cover_image.data
  const title = attributes.title
  const body = attributes.body
  const date = new Date(attributes.date_time).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
  const subheading = attributes.subheading
  const tags = attributes.tags.data
  const coverImage = getStrapiMedia(cover_img.attributes.url)

  return (
    <Link href={`/blogs/${slug}`}>
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

              <div className="absolute top-4 left-4 flex items-center space-x-2">
              <PodcastIcon className="h-6 w-6 text-primary-700" />
              <span className="text-sm font-semibold text-primary-700">WebClub Blogs</span>
              </div>

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

function PodcastIcon(props) {
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
      <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
      <path d="M8 14a5 5 0 1 1 8 0" />
      <circle cx="12" cy="11" r="1" />
      <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
    </svg>
  )
}
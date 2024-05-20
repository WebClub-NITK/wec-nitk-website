import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { getStrapiMedia } from "@/helpers/strapi_api"
import Link from "next/link"

export default function MinimalCard({attributes , blogID}) {

  const cover_img = attributes.cover_image.data
  const title = attributes.title
  const coverImage = getStrapiMedia(cover_img.attributes.url)

  return (
    <Link href={`/blogs/${blogID}`}>
      <Card className=" max-w-full h-full flex flex-col">
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
                      {/* <div className="space-y-1">
                          <p className="text-gray-500 text-sm mb-2">
                            {date}
                          </p>
                          <hr className="border-t" />
                      </div> */}

                      <div>
                        <h2 className="text-xl font-bold">{title}</h2>
                        {/* <p className="text-gray-500 line-clamp-3 mt-2">{body}</p> */}
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
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { getStrapiMedia } from "@/helpers/strapi_api"
import Link from "next/link"

export default function MinimalCard({ attributes, blogID }) {
    const title = attributes.title
    const date = new Date(attributes.date_time).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    })

    // Create URL-friendly title
    const urlTitle = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim()

    const cover_img = attributes.cover_image.data
    const coverImage = getStrapiMedia(cover_img.attributes.url)

    return (
        <Link href={`/blogs/${urlTitle}-${blogID}`}>
            <Card className="p-4 hover:bg-accent transition-colors">
                <div className="space-y-1">
                    <h3 className="font-medium line-clamp-2">{title}</h3>
                    <p className="text-sm text-gray-500">{date}</p>
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
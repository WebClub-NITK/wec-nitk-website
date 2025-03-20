import { redirect } from "next/navigation";
import { getEvent } from "@/helpers/getEvent";
import { getStrapiMedia } from "@/helpers/strapi_api";

export async function generateMetadata({ params }) {

    let slug = params.slug.split('-');
    let event_id = slug[slug.length-1];
    let event = await getEvent(event_id);
    const { title, body, date_time, sigs } = event.attributes
    const cover_image = getStrapiMedia(event.attributes.cover_images.data[0]?.attributes.url)

    return {
        metadataBase: new URL('https://webclub.nitk.ac.in'),
        title: title,
        description: body.substring(0, 200),
        openGraph: {
          title: title,
          description: body.substring(0, 200),
          url: `https://webclub.nitk.ac.in/events/${params.slug}`,
          siteName: "WebClub NITK Event",
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
        },
      }
}

export default async function Page({ params }) {
    redirect(`/events#${params.slug}`);
}

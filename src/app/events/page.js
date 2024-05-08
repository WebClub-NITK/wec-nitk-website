// import { demoEvents } from "@/lib/eventsDemoData";/
import ExpandableEventCard from "@/components/events/ExpandableEventCard"

/*
  const {
    id,
    sig,
    title,
    date_time,
    event_type,
    location,
    link,
    cems_link,
    body,
    cover_image,
    resources,
  } = event;
*/ 

export default async function EventsPage() {

    let events = await fetch(process.env.BACKEND_URL + "/api/events?populate=*" , {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + process.env.STRAPI_API_TOKEN
        }
    })

    events = await events.json()
    events = events.data
    // console.log(JSON.stringify(events, null, 2));

    return (
        <>
            <section className="min-h-full bg-secondary-800 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="mx-auto py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
                    <h2 className="mt-12 mb-4 px-4 text-4xl font-bold text-white">Events</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Event cards here */}
                        {events.map((event) => (
                            <ExpandableEventCard key={event.id} event={event.attributes} />
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}


/*
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "ML League 24-25",
        "date_time": "2024-05-04T12:30:00.000Z",
        "event_type": "In-Person",
        "location": "LHC-A Seminar Hall",
        "link": "https://www.google.com",
        "cems_link": "https://www.leetcode.com",
        "body": "👋 Hey everyone!\n\n🎉🔍We are thrilled to bring to you another edition of ML League, where we will conduct sessions, that will help kickstart your journey into the depths of Artificial Intelligence!\n🛣 We will be adhering to following roadmap: https://docs.google.com/document/d/1nI1xYSRa7Zn_La0MzGGAGv7ZdbvhiUsJLgEpI5-0xUM/edit?usp=sharing\n\n🔨These sessions will help streamline the learning process and make your experience with gaining knowledge much more organized and fruitful. 📊💼\n\n🧐 ATTENTION: There will be assignments released periodically, and a good performance on those assignments will result in a direct interview round for the Web Club Intelligence Sig Recruitments for the year 2024-2025! 😀\n",
        "resources": {
          "links": "['IP Strategy Workshops', 'Legal Insights', 'Networking with IP Professionals']"
        },
        "createdAt": "2024-05-06T07:29:44.687Z",
        "updatedAt": "2024-05-06T07:29:58.401Z",
        "publishedAt": "2024-05-06T07:29:58.206Z",
        "cover_images": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "name": "ml_league_cover.jpeg",
                "alternativeText": null,
                "caption": null,
                "width": 1080,
                "height": 1080,
                "formats": {
                  "large": {
                    "ext": ".jpeg",
                    "url": "/uploads/large_ml_league_cover_3f9695a233.jpeg",
                    "hash": "large_ml_league_cover_3f9695a233",
                    "mime": "image/jpeg",
                    "name": "large_ml_league_cover.jpeg",
                    "path": null,
                    "size": 85.07,
                    "width": 1000,
                    "height": 1000
                  },
                  "small": {
                    "ext": ".jpeg",
                    "url": "/uploads/small_ml_league_cover_3f9695a233.jpeg",
                    "hash": "small_ml_league_cover_3f9695a233",
                    "mime": "image/jpeg",
                    "name": "small_ml_league_cover.jpeg",
                    "path": null,
                    "size": 33.66,
                    "width": 500,
                    "height": 500
                  },
                  "medium": {
                    "ext": ".jpeg",
                    "url": "/uploads/medium_ml_league_cover_3f9695a233.jpeg",
                    "hash": "medium_ml_league_cover_3f9695a233",
                    "mime": "image/jpeg",
                    "name": "medium_ml_league_cover.jpeg",
                    "path": null,
                    "size": 57.64,
                    "width": 750,
                    "height": 750
                  },
                  "thumbnail": {
                    "ext": ".jpeg",
                    "url": "/uploads/thumbnail_ml_league_cover_3f9695a233.jpeg",
                    "hash": "thumbnail_ml_league_cover_3f9695a233",
                    "mime": "image/jpeg",
                    "name": "thumbnail_ml_league_cover.jpeg",
                    "path": null,
                    "size": 6.57,
                    "width": 156,
                    "height": 156
                  }
                },
                "hash": "ml_league_cover_3f9695a233",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "size": 93.34,
                "url": "/uploads/ml_league_cover_3f9695a233.jpeg",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "createdAt": "2024-05-06T07:24:29.313Z",
                "updatedAt": "2024-05-06T07:24:29.313Z"
              }
            }
          ]
        },
        "sigs": {
          "data": []
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
*/ 
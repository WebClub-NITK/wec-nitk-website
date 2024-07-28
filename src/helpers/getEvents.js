export async function getEvents() {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

    const params = new URLSearchParams({
        populate: "*",
        sort: "date_time:desc",
    })

    let events = await fetch(`${backendUrl}/api/events?${params}` , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
        },
        next: {
          revalidate: parseInt(process.env.REVALIDATE) || 0,
        }
      })

      events = await events.json()
      events = events.data


      return events
}
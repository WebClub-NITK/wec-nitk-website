export async function getEvent(eventID) {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
  
    const params = new URLSearchParams({
      populate: "*",
    })
  
    // revalite once in an hour
    let event = await fetch(`${backendUrl}/api/events/${eventID}?${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
      },
      next: {
        revalidate: parseInt(process.env.REVALIDATE) || 0,
      },
    })
  
    event = await event.json()
    event = event.data
    return event
  }
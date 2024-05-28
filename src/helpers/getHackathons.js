export async function getHackathons() {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

    const params = new URLSearchParams({
        populate: "*",
        sort: "date_time:desc",
    })

    let blogs = await fetch(`${backendUrl}/api/hackathons?${params}` , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
        },
        cache:'no-store'
      })

      hackathons = await hackathons.json()
      hackathons = hackathons.data


      return hackathons
}
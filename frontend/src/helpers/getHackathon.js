export async function getHackathon(hackathonID) {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
  
    const params = new URLSearchParams({
      populate: "*",
    })
  
    // revalite once in an hour
    let blog = await fetch(`${backendUrl}/api/hackathon/${blogID}?${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
      },
      next: {
        revalidate: parseInt(process.env.REVALIDATE) || 0,
      },
    })
  
    hackathon = await hackathon.json()
    hackathon = hackathon.data
    return hackathon
  }
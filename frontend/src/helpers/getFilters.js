export async function getFilters() {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

    let filters = await fetch(`${backendUrl}/api/tags` , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
        },
        next: {
          revalidate: parseInt(process.env.REVALIDATE) || 0,
        }
      })

    filters = await filters.json()
    filters = filters.data

    return filters || []
}
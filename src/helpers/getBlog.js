export async function getBlog(blogID) {

  const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

  const params = new URLSearchParams({
    populate: "*",
  })

  let blog = await fetch(`${backendUrl}/api/blogs/${blogID}?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
    },
    cache: 'no-store'
  })

  blog = await blog.json()
  blog = blog.data
  return blog
}
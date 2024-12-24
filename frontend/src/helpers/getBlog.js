export async function getBlog(blogID) {

  const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

  const params = new URLSearchParams({
    populate: "*",
  })

  // revalite once in an hour
  let blog = await fetch(`${backendUrl}/api/blogs/${blogID}?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
    },
    next: {
      revalidate: parseInt(process.env.REVALIDATE) || 0,
    },
  })

  blog = await blog.json()
  blog = blog.data
  return blog
}
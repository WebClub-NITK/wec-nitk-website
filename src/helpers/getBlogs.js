export async function getBlogs() {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

    const params = new URLSearchParams({
        populate: "*",
        sort: "date_time:desc",
    })

    let blogs = await fetch(`${backendUrl}/api/blogs?${params}` , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.STRAPI_API_TOKEN,
        },
        cache:'no-store'
      })

      blogs = await blogs.json()
      blogs = blogs.data


      return blogs
}
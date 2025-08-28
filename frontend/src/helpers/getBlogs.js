export async function getBlogs() {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

    const params = new URLSearchParams({
        populate: "*",
        sort: "date_time:desc",
        "pagination[page]": page.toString(),
        "pagination[pageSize]": process.env.PAGE_SIZE || "7",
    })

    let blogs = await fetch(`${backendUrl}/api/blogs?${params}` , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
        },
        next: {
          revalidate: parseInt(process.env.REVALIDATE) || 0,
        }
      })

      blogs = await blogs.json()
      blogs = blogs.data || []

      return blogs
}
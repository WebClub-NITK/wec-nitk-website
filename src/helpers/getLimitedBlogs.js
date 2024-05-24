export async function getLimitedBlogs(currenBlogID) {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
  
    // fetch only the first 3 blogs
    let params = new URLSearchParams({
        _limit: 3,
        'filters[id][$ne]': currenBlogID,
        populate: '*'
    });
    params = params.toString();
  
    let blogs = await fetch(`${backendUrl}/api/blogs?${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
      },
      cache: 'no-store'
    })
  
    blogs = await blogs.json()
    blogs = blogs.data
    return blogs
  }
export async function getLimitedBlogs(currenBlogID) {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
  
    // fetch only the latest 3 blogs
    let params = new URLSearchParams({
        'pagintion[page]': 1,
        'pagination[pageSize]':3,
        'filters[id][$ne]': currenBlogID,
        populate: '*',
        sort: 'date_time:desc'
    });
    params = params.toString();
  
    let blogs = await fetch(`${backendUrl}/api/blogs?${params}`, {
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
    blogs = blogs.data
    return blogs
  }
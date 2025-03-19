export async function getBlogs(page=1, filter="all") {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
    
    const params = new URLSearchParams({
        populate: "*",
        sort: "date_time:desc",
        "pagination[page]": page.toString(),
        "pagination[pageSize]": "9",

    })

    if (filter !== "all") {
      params.append("filters[tags][name][$eq]", filter);
    }

    let response = await fetch(`${backendUrl}/api/blogs?${params}` , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
        },
        next: {
          revalidate: parseInt(process.env.REVALIDATE) || 0,
        }
      });

      const data = await response.json();
      const blogs = data.data || [];
      const totalPages = data.meta?.pagination?.pageCount || 1;
  
      return { blogs, totalPages };
}
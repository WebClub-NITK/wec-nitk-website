import { getBlogs } from "@/helpers/getBlogs"
import MinimalCard from "./MinimalCard"

export default async function MoreBlogsSection({ currBlogID }) {
    let blogs = await getBlogs()
    
    // Filter out the current blog and limit to 3 blogs
    blogs = blogs
        ?.filter(blog => blog.id !== currBlogID)
        ?.slice(0, 3) || []

    if (!blogs || blogs.length === 0) {
        return null
    }

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">More Blogs</h2>
            <div className="flex flex-col gap-4 flex-grow">
                {blogs.map((blog) => (
                    <MinimalCard 
                        key={blog.id} 
                        attributes={blog.attributes} 
                        blogID={blog.id}
                    />
                ))}
            </div>
        </div>
    )
}


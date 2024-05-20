import { getLimitedBlogs } from "@/helpers/getLimitedBlogs"
import BlogCard from "./BlogCard"

export default async function({currBlogID}) {

    let blogs = await getLimitedBlogs(currBlogID)

    return(
        <>
            <h2 className="text-lg font-semibold mb-4">Related Blogs</h2>
            <div className=" flex flex-col gap-2">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} attributes={blog.attributes}/>
                ))}
            </div>
        </>
    )
}


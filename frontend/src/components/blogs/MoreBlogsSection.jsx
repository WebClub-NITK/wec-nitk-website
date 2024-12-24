import { getLimitedBlogs } from "@/helpers/getLimitedBlogs"
import MinimalCard from "./MinimalCard"

export default async function({currBlogID}) {

    let blogs = await getLimitedBlogs(currBlogID)

    return(
        <>
            <h2 className="text-lg font-semibold mb-4">More Blogs</h2>
            <div className=" flex flex-col gap-4 flex-grow">
                {blogs.map((blog) => (
                    <MinimalCard key={blog.id} attributes={blog.attributes} blogID={blog.id}/>
                ))}
            </div>
        </>
    )
}


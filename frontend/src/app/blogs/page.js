import BlogList from "@/components/blogs/BlogList"
import LatestBlogCard from "@/components/blogs/LatestBlog"
import { getBlogs } from "@/helpers/getBlogs"
import { getFilters } from "@/helpers/getFilters"

export default async function BlogsPage() {
    const blogs = await getBlogs()
    const filters = await getFilters()

    return (
        <>
            <section className="w-full h-[40vh] pt-14 flex items-center justify-center bg-accent-900 bg-cover bg-center">
                <div className="container px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight"><span className=" text-primary-100">WebClub</span> Blogs</h1>
                    <p className="max-w-[600px] mx-auto text-md md:text-md text-gray-200">
                        Insights and learnings from our members
                    </p>
                </div>
            </section>


            <section className="min-h-full">
                <div className="mx-auto py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
                    {blogs.length > 0 ? <LatestBlogCard latest_blog={blogs.slice(0,)}/> : null}
                    <BlogList blogs={blogs.slice(1, )} filters={filters}/>
                </div>
            </section>
        </>
    );
}
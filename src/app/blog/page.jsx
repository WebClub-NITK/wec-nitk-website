import Card from '@/components/blogs/Card'
import {blogs} from '@/lib/blogStaticData'
const page = () => {
  return (
    <div className="px-32 py-8 max-xl:px-8 max-xl:py-4 max-md:px-16 max-sm:px-8 m-auto">
        <h1 className="text-center text-4xl font-bold">Blog</h1>
        {/* Search bar and Tag dropdown*/}
        <h3 className="mb-3 mt-6 text-center text-2xl">Search bar and Tag dropdown</h3>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {blogs.map((blog,index)=>(
                <>
                    <Card key={index} blog={blog}/>
                </>
            ))}
        </div>
    </div>

  );
}

export default page;

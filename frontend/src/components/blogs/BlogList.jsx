"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import BlogCard from "./BlogCard";
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/pagination";

export default function BlogList({ blogs, filters, totalPages }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const currentPage = Number(searchParams.get("page")) || 1;
    const blogsRef = useRef(null);
    const selectedFilter = searchParams.get("filter") || "all";

    const handleFilterChange = (filter) => {
        
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", "1");
        params.set("filter", filter);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    // switching pages navigates back to the top of the blogs list section
    useEffect(() => {
        if (blogsRef.current) {
            blogsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [currentPage]);

    return (
        <>
            <div ref={blogsRef} className="flex justify-between items-center mb-6">
                <h1 className="font-semibold text-2xl px-4">All Blogs</h1>
                <DropdownMenu className="p-2">
                    <DropdownMenuTrigger asChild>
                        <Button className="flex items-center gap-2 m-2 hover:bg-primary-50" variant="outline">
                            <FilterIcon className="w-4 h-4" />
                            {selectedFilter === "all" ? "All" : selectedFilter}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuRadioGroup value={selectedFilter}>
                            <DropdownMenuRadioItem value="all" onClick={() => handleFilterChange("all")}>All</DropdownMenuRadioItem>
                            {filters.map(filter => (
                                <DropdownMenuRadioItem key={filter.id} value={filter.attributes.name} onClick={() => handleFilterChange(filter.attributes.name)}>
                                    {filter.attributes.name}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {blogs.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 text-gray-500">
                    No blogs found
                </div>
            ):(
            <>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-2">
                {blogs.map(blog => (
                    <div key={blog.id}>
                        <BlogCard id={blog.id} attributes={blog.attributes} />
                    </div>
                ))}
            </div>
            
            {totalPages > 1 && <Pagination totalPages={totalPages} />}
            </>

            )}
        </>
    );
}

function FilterIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    );
}

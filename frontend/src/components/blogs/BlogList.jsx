"use client"
import { useState } from "react"
import BlogCard from "./BlogCard"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function BlogList ({ blogs, filters }) {

    const [filteredBlogs, setFilteredBlogs] = useState(blogs)
    const [selectedFilter, setSelectedFilter] = useState("all")

    const filterBlogs = (filter) => {
        return () => {
            if (filter === "all") {
                setSelectedFilter("all")
                setFilteredBlogs(blogs)
            } else {
                setSelectedFilter(filter)
                setFilteredBlogs(blogs.filter((blog) => {
                    return blog.attributes.tags.data.some((tag) => tag.attributes.name === filter)
                }))
            }
        }
    }

    return (
        <>

        <div className="flex justify-between items-center mb-6">
            <h1 className=" font-semibold text-2xl px-4">All Blogs</h1>
            <DropdownMenu className="p-2">
                <DropdownMenuTrigger asChild>
                    <Button className="flex items-center gap-2 m-2 hover:bg-primary-50" variant="outline">
                    <FilterIcon className="w-4 h-4" />
                    {selectedFilter === "all" ? "All" : selectedFilter}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuRadioGroup value={selectedFilter}>
                    <DropdownMenuRadioItem value="all" onClick={filterBlogs("all")}>All</DropdownMenuRadioItem>
                        {
                            filters.map((filter) => {
                                return (
                                    <DropdownMenuRadioItem key={filter.id} value={filter.attributes.name} onClick={filterBlogs(filter.attributes.name)}>{filter.attributes.name}</DropdownMenuRadioItem>
                                )
                            })
                        }
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

            {
                !filteredBlogs.length && (
                    <div className="flex flex-col items-center justify-center h-40 text-gray-500">
                        No blogs found
                    </div>
                )
            }
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-2">
            {filteredBlogs.map((blog) => {
                return (
                    <div key={blog.id} className="">
                        <BlogCard slug={blog.id} attributes={blog.attributes}></BlogCard>
                    </div>
                )
                })
            }
        </div>

        </>
    )
}


function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}
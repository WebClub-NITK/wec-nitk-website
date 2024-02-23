"use client";
import Card from '@/components/blogs/Card'
import SearchAndFilter from '@/components/blogs/SearchAndFilter';
import Blog_Modal from '@/components/blogs/Blog_Modal'
import {Blogs} from '@/lib/blogStaticData'
import React, { useEffect, useState } from 'react';

const page = () => {
    const [modal,setModal]=useState(false)
    const [blog,setBlog]=useState('')

  const [selectedCategory,setSelectedCategory] = useState(null)
  const [typedInput,setTypedInput]=useState('')

  const [allBlogs,setAllBlogs] = useState([])
  const [blogs,setBlogs] = useState([])

  //Fetch All Blogs
  const fetchAllBlogs = ()=>{
    setAllBlogs(Blogs)
    setBlogs(Blogs)
  }

  useEffect(()=>{
    fetchAllBlogs()
  },[])

  //Fetching Blogs Based on Filter
  const fetchBlogByFilter=()=>{
    if(selectedCategory===null && typedInput===''){
      setBlogs(allBlogs)
    }
    else{
      let currBlogs=[]
      if(selectedCategory===null && typedInput!==''){
        console.log("inside")
        const matchedTitle = allBlogs.filter((blog)=>blog.title.toLowerCase().includes(typedInput.toLowerCase()))
        currBlogs=matchedTitle
      }
      else{
        if(selectedCategory.label==="All Posts"){
          currBlogs=allBlogs
        }
        else{
          const matchedCategoryBlogs = allBlogs.filter((blog)=> blog.tags === selectedCategory.label)
          currBlogs=matchedCategoryBlogs
        }

        if(typedInput!==''){
          const matchedTitle = currBlogs.filter((blog)=>blog.title.toLowerCase().includes(typedInput.toLowerCase()))
          currBlogs=matchedTitle
        }
      }
      setBlogs(currBlogs)
    }
  }

  useEffect(()=>{
    if(allBlogs.length>0)fetchBlogByFilter()
  },[selectedCategory,typedInput])

  const closeModal=()=>{
    setModal(false)
  }

  return (
    <div className={`px-32 py-8 max-xl:px-8 max-xl:py-4 max-lg:px-20 max-md:px-16 max-sm:px-8 m-auto`}>
      <div>
          {modal && 
            <Blog_Modal modal={modal} closeModal={closeModal} blog={blog}/>
            }
      </div>
      
        <h1 className="text-center text-4xl font-bold">Blog</h1>
        <SearchAndFilter 
          setSelectedCategory={setSelectedCategory} 
          typedInput={typedInput} 
          setTypedInput={setTypedInput}
        />
        <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            {blogs.map((blog)=>(
                <React.Fragment key={blog.id}>
                    <Card blog={blog} setModal={setModal} setBlog={setBlog}/>
                </React.Fragment>
            ))}
        </div>
    </div>
  );
}

export default page;
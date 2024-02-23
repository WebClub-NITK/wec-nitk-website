"use client";
import Card from '@/components/blogs/Card'
import SearchAndFilter from '@/components/blogs/SearchAndFilter';
<<<<<<< HEAD
import {blogs} from '@/lib/blogStaticData'
import Blog_Modal from '@/components/blogs/Blog_Modal'
import React,{useState} from 'react'

const page = () => {
  const [modal,setModal]=useState(false)
  const [blog,setBlog]=useState('')
  const [selectedCategory,setSelectedCategory] = useState('')
  const [typedInput,setTypedInput]=useState('')
  
  const closeModal=()=>{
    setModal(false)
  }
=======
import {Blogs} from '@/lib/blogStaticData'
import React, { useEffect, useState } from 'react';

const page = () => {

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
        const matchedTitle = allBlogs.filter((blog)=>blog.title.toLowerCase().includes(typedInput.toLowerCase()))
        currBlogs=matchedTitle
      }
      else{
        console.log(selectedCategory)
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

>>>>>>> d4087ff (Blogs: Add Search and Filter Logic)
  return (
    <div className={`py-8 m-auto`}>
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
<<<<<<< HEAD
        <div className='px-16 max-xl:px-16 max-xl:py-4 max-lg:px-4 max-sm:px-4'>
          <div className="grid grid-cols-2 max-md:grid-cols-1">
            {blogs.map((blog)=>(
                <React.Fragment key={blog.id}>
                    <Card blog={blog} setModal={setModal} setBlog={setBlog}/>
                </React.Fragment>
=======
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {blogs?.map((blog) => (
              <React.Fragment key={blog.id}>
                <Card blog={blog} />
              </React.Fragment>
>>>>>>> d4087ff (Blogs: Add Search and Filter Logic)
            ))}
          </div>
        </div>
    </div>
  );
}

export default page;

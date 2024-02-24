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
  const [message,setMessage]=useState('')

  //Fetch All Blogs
  const fetchAllBlogs = ()=>{
    setAllBlogs(Blogs)
    setBlogs(Blogs)
  }

  useEffect(()=>{
    fetchAllBlogs()
  },[])

  const hidden = selectedCategory===null && typedInput===''

  //Fetching Blogs Based on Filter
  const fetchBlogByFilter=()=>{
    let resultsText="";
    if(selectedCategory===null && typedInput===''){
      setBlogs(allBlogs)
    }
    else{
      let currBlogs=[]
      if(selectedCategory===null && typedInput!==''){
        resultsText=`Showing Results for : "${typedInput}"`
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
          resultsText=`Showing Results for : "${typedInput}" (${selectedCategory.label})`
          const matchedTitle = currBlogs.filter((blog)=>blog.title.toLowerCase().includes(typedInput.toLowerCase()))
          currBlogs=matchedTitle
        }
        else{
          resultsText=`Showing Results for the category: (${selectedCategory.label})`
        }
      }
      setBlogs(currBlogs)
    }
    setMessage(resultsText)
  }

  useEffect(()=>{
    if(allBlogs.length>0)fetchBlogByFilter()
  },[selectedCategory,typedInput])

  const closeModal=()=>{
    setModal(false)
  }

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
          hidden={hidden}
          message={message}
        />
        <div className='px-16 max-xl:px-16 max-xl:py-4 max-lg:px-4 max-sm:px-4'>
          <div className="grid grid-cols-2 max-md:grid-cols-1">
            {blogs.map((blog)=>(
                <React.Fragment key={blog.id}>
                    <Card blog={blog} setModal={setModal} setBlog={setBlog}/>
                </React.Fragment>
            ))}
          </div>
        </div>
    </div>
  );
}

export default page;
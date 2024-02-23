"use client";
import Card from '@/components/blogs/Card'
import SearchAndFilter from '@/components/blogs/SearchAndFilter';
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
  return (
    <div className={`px-32 py-8 max-xl:px-8 max-xl:py-4 max-lg:px-20 max-md:px-16 max-sm:px-8 m-auto`}>
      <div>
          {modal && 
            <Blog_Modal modal={modal} closeModal={closeModal} blog={blog}/>
            }
      </div>
      
        <h1 className="text-center text-4xl font-bold">Blog</h1>
        <SearchAndFilter 
          selectedCategory={selectedCategory}
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

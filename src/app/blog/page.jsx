"use client";
import dynamic from 'next/dynamic';
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

  const [darkMode,setDarkMode] = useState(false)

  const toggleTheme = ()=>{
    setDarkMode(!darkMode)
  }

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

  // const [isDarkMode, setIsDarkMode] = useState(
  //   window.matchMedia('(prefers-color-scheme: dark)').matches
  // );

  // useEffect(() => {
  //   const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //   console.log(darkModeMediaQuery)
  //   const handleThemeChange = (e) => {
  //     setIsDarkMode(e.matches);
  //   };

  //   // Check initial theme
  //   setIsDarkMode(darkModeMediaQuery.matches);

  //   // listener added to react to changes in the theme
  //   darkModeMediaQuery.addEventListener('change', handleThemeChange);

  //   // CleaningUp the listener 
  //   return () => {
  //     darkModeMediaQuery.removeEventListener('change', handleThemeChange);
  //   };
  // }, []);


  return (
    <section className={darkMode?"dark":""}>
        <div className={`px-32 py-8 max-xl:px-8 max-xl:py-4 max-lg:px-20 max-md:px-16 max-sm:px-8 m-auto dark:bg-darkBlack min-h-screen`}>
          <div>
              {modal && 
                <Blog_Modal modal={modal} closeModal={closeModal} blog={blog} darkMode={darkMode}/>
              }
          </div>
          
          <div className='flex items-center justify-center gap-2'>
            <h1 className="text-center text-4xl font-bold dark:text-white">Blogs</h1>
            <div>
                <button type="button" onClick={toggleTheme} className='dark:text-white text-3xl'>
                    {darkMode?"💡":"🌚"}
                </button>
            </div>
          </div>
          <SearchAndFilter 
            setSelectedCategory={setSelectedCategory} 
            typedInput={typedInput} 
            setTypedInput={setTypedInput}
            hidden={hidden}
            message={message}
            darkMode={darkMode}
          />
          {blogs.length>0?<div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
              {blogs.map((blog)=>(
                  <React.Fragment key={blog.id}>
                      <Card 
                        blog={blog} 
                        setModal={setModal} 
                        setBlog={setBlog} 
                      />
                  </React.Fragment>
              ))}
          </div>:<div className='text-center text-xl dark:text-white'>
            <p>No Posts Found 😔</p>
          </div>
          
          }
      </div>
    </section>
  );
}

export default page;
"use client";
import Card from '@/components/blogs/Card'
import SearchAndFilter from '@/components/blogs/SearchAndFilter';
import Blog_Modal from '@/components/blogs/Blog_Modal'
import {Blogs} from '@/lib/blogStaticData'
import Link from 'next/link'
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
  const [blogsLoaded,setBlogsLoaded] = useState(false)

  const toggleTheme = ()=>{
    setDarkMode(!darkMode)
  }

  //Fetch All Blogs
  const fetchAllBlogs = ()=>{
    setAllBlogs(Blogs)
    setBlogs(Blogs)
    setBlogsLoaded(true)
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
      setBlogsLoaded(true)
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

  if(!blogsLoaded){
        return (
           <div className="mx-auto text-center my-10">
                <h1 className='text-xl font-semibold'>Loading...</h1>
            </div>
        )
    }

  const light = <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="#e6970f"  class="icon icon-tabler icons-tabler-filled icon-tabler-bulb"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /><path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 0 -1.414z" /><path d="M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7z" /><path d="M14 18a1 1 0 0 1 1 1a3 3 0 0 1 -6 0a1 1 0 0 1 .883 -.993l.117 -.007h4z" /><path d="M12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1 -.471 .192l-.129 .008h-6a1 1 0 0 1 -.6 -.2a6 6 0 0 1 3.6 -10.8z" /></svg>

  const dark = <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="#700fe6"  class="icon icon-tabler icons-tabler-filled icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" /></svg>

  return (
    <section className={darkMode?"dark":""}>
        <div className={`py-8 max-xl:px-8 max-xl:py-4 max-lg:px-8 max-md:px-8 max-sm:px-8 m-auto dark:bg-gray-950 min-h-screen`}>
          <div>
              {modal && 
                <Blog_Modal modal={modal} closeModal={closeModal} blog={blog} darkMode={darkMode}/>
              }
          </div>
          
          <div className='mt-10 flex items-end justify-center gap-2'>
            <h1 className="mt-5 text-center text-4xl font-bold dark:text-white">Blogs</h1>
            <div>
                <button type="button" onClick={toggleTheme} className='dark:text-white'>
                    {darkMode?light:dark}
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
          {blogs.length>0?<div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              {blogs.map((blog)=>(
                  <React.Fragment key={blog.id}>
                    <Link href={{pathname:`/blog/${blog.id}`,query:{darkMode}}}>
                      <>
                      <Card 
                        blog={blog} 
                        // setModal={setModal}
                        setBlog={setBlog} 
                      />
                      </>
                    </Link>
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
"use client";
import Card from '@/components/blogs/Card'
import SearchAndFilter from '@/components/blogs/SearchAndFilter';
import {blogs} from '@/lib/blogStaticData'
import React, { useState } from 'react';

const page = () => {

  const [selectedCategory,setSelectedCategory] = useState('')
  const [typedInput,setTypedInput]=useState('')

  return (
    <div className="px-32 py-8 max-xl:px-8 max-xl:py-4 max-md:px-16 max-sm:px-8 m-auto flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold">Blog</h1>
        <SearchAndFilter 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} 
          typedInput={typedInput} 
          setTypedInput={setTypedInput}
        />
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {blogs.map((blog) => (
              <React.Fragment key={blog.id}>
                <Card blog={blog} />
              </React.Fragment>
            ))}
        </div>
    </div>

  );
}

export default page;

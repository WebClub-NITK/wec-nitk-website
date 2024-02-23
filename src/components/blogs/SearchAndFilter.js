"use client";
import { Categories } from '@/lib/categories'
import Select from 'react-select';

import React, { useEffect, useState } from 'react'

const SearchAndFilter = ({setSelectedCategory,typedInput,setTypedInput}) => {

    const [categories,setCategories] = useState([])
    
    const fetchAllCategories = ()=>{
        setCategories([...Categories])
    }

    useEffect(()=>{
        fetchAllCategories()
    },[])

    const options = categories.map((category) => ({
        label: category.name,
        value: category.name
    }));

  return (
    <section className="max-w-lg mx-auto my-10">
        <div className='grid grid-cols-1 gap-2 px-2 py-2 sm:grid-cols-2 sm:w-full justify-center items-center bg-light-blue'>
            <div>
                <input type='search' 
                placeholder='Search 🔍' 
                className="text-lg rounded-md p-2 focus:outline-none w-full"
                value={typedInput}
                onChange={(e)=>{setTypedInput(e.target.value)}} />
            </div>
            <div>
                <Select
                    options={options}
                    onChange={setSelectedCategory}
                    isSearchable
                    placeholder="Select Category"
                    className="react-select-container text-lg bg-gray-100 p-2 rounded-md focus:outline-none focus:border-blue-500 fixed-width"
                    classNamePrefix="react-select"
                />
            </div>
        </div>
    </section>
  )
}

export default SearchAndFilter
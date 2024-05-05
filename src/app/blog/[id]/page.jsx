"use client"

import React, { useEffect,useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Blogs } from '@/lib/blogStaticData'
import Markdown from "react-markdown";
import { FaCopy,FaCheck } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import { vsDark,ghcolors,oceanicNext,pojoaque,xonokai,vscDarkPlus,base16AteliersulphurpoolLight,materialDark
,tomorrowNightBlue,materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const page = ({params}) => {

    const [blog,setBlog]=useState({})
    const [blogLoaded,setBlogLoaded] = useState(false)
    useEffect(()=>{
        const blog_data=Blogs.find((blog)=>blog.id===parseInt(params.id))
        setBlog(blog_data)
        setBlogLoaded(true)
    },[])

    const searchParams = useSearchParams() 
    const darkMode = searchParams.get('darkMode')

    if(!blogLoaded){
        return (
           <div className="mx-auto text-center my-10">
                <h1 className='text-xl font-semibold'>Loading...</h1>
            </div>
        )
    }

  return (
    <section className={darkMode==="true"?"dark":""}>
        <div className='flex flex-col pt-20 items-center justify-center dark:bg-gray-950'>
            <h1 className='py-4 text-align text-4xl max-sm:text-xl font-bold dark:text-white'>
                {blog.title}
            </h1>

            <div className='mt-8 px-96 max-xl:px-60 max-lg:px-48 max-md:px-40 max-sm:px-20'>
                <div className='w-full p-4 border-solid border-l-2 border-secondary-blue'>
                    <p className='text-xl max-lg:text-lg max-md:text-md  dark:text-white'>{blog.subheading}</p>
                    <div className='flex align-items mt-4'>
                        <span className='mr-4  dark:text-white'>{blog.author}</span>
                        <span className='dark:text-primary-500 font-bold'>#{blog.sig}</span>
                    </div>
                </div>
            </div>


            <div className='mt-8 px-48 max-xl:px-8 max-lg:px-8 max-md:px-8 max-sm:px-4 dark:text-white'>
                <img src={blog.cover_image} className='m-auto h-96 w-2/3 rounded-xl'></img>
                <div className='mt-8 p-4 bg-light-blue w-full rounded-xl border-2 border-white dark:bg-darkCard'>
                    <Markdown
                    children={blog.body}
                    className='mt-5 px-4 text-xl max-xl:text-lg max-sm:text-md'
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                    components={{
                        code(props) {
                        const { children, className, node, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || "");
                        return match ? ( 
                    <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={materialDark}
                    />
                        
                        ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                        );
                        },
                    }}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default page
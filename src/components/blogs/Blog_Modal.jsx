"use client"
import React, { useEffect,useState } from 'react';
import Modal from 'react-modal'
import {FaTimes} from 'react-icons/fa'
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";


<<<<<<< HEAD
const Blog_Modal = ({ modal,closeModal,blog}) => {
    const [blogWidth,setBlogWidth]=useState(2000)
    const [blogHeight,setBlogHeight]=useState(2000)
    const [imgHeight,setImgHeight]=useState(1000)
    const [imgWidth,setImgWidth]=useState(1000)
    const [fontSize,setFontSize]=useState(20)
  const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    postion:'relative',
    width:`${blogWidth}px`,
    height:`${blogHeight}px`,
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
=======
const Blog_Modal = ({ modal,closeModal,blog,darkMode}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width:'60rem',
      height:'40rem',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const darkModeStyles = {
    content: {
      ...customStyles.content,
      backgroundColor: 'rgb(24, 26, 27)',
      color:'white'
    },
  };

  const styles = darkMode ? darkModeStyles : customStyles
>>>>>>> 9b6bb01 (Blogs: Add Dark Theme)

  const handleResize=()=>{
      const windowWidth=window.innerWidth
      const windowHeight=window.innerHeight
      setBlogWidth(0.7*windowWidth)
      setBlogHeight(0.7*windowHeight)
      setImgHeight(0.4*windowHeight)
      setImgWidth(0.5*windowWidth)
      if(windowWidth>=1024)
        setFontSize(0.01*windowWidth)
      else if(windowWidth>=768)
        setFontSize(0.015*windowWidth)
      else if(windowWidth>=500)
        setFontSize(0.025*windowWidth)
      else
        setFontSize(0.035*windowWidth)
  }

  useEffect(()=>{
    handleResize()
    window.addEventListener('resize',handleResize)
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[])

  return (
      <Modal isOpen={modal}
        onRequestClose={closeModal}
        style={styles}
      >
        <FaTimes className='absolute right-4 top-4 h-10'/>
        <h1 className='font-bold mb-5 text-center mt-6' style={{'font-size':`${1.5*fontSize}px`}}>{blog.title}</h1>
        <img src={blog.cover_image} className="w-2xl m-auto"
         style={{"width":`${imgWidth}px`,height:`${imgHeight}px`}}/>
        {/* <p className='mt-5 px-4' style={{'font-size':`${fontSize}px`}}>{blog.body}</p> */}

        <Markdown
      children={blog.body}
      className='mt-5 px-4'
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
              style={dark}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    />
      </Modal>
  );
};

export default Blog_Modal;

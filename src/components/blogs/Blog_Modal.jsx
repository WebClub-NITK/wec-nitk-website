"use client"
import React, { useEffect,useState } from 'react';
import Modal from 'react-modal'
import {FaTimes} from 'react-icons/fa'

const Blog_Modal = ({ modal,closeModal,blog,darkMode}) => {
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
  const darkModeStyles = {
    content: {
      ...customStyles.content,
      backgroundColor: 'rgb(24, 26, 27)',
      color:'white'
    },
  };

  const styles = darkMode ? darkModeStyles : customStyles

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
        <FaTimes className='absolute right-4 top-4 h-10 cursor-pointer' onClick={closeModal}/>
        <h1 className='font-bold mb-5 text-center mt-6' style={{'font-size':`${1.5*fontSize}px`}}>{blog.title}</h1>
        <img src={blog.cover_image} className="w-2xl m-auto"
         style={{"width":`${imgWidth}px`,height:`${imgHeight}px`}}/>
        <p className='mt-5 px-4' style={{'font-size':`${fontSize}px`}}>{blog.body}</p>
      </Modal>
  );
};

export default Blog_Modal;

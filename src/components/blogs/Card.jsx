"use client"
import {useState,useEffect} from 'react'
const Card = ({blog,setModal,setBlog}) => {
  const [cardWidth,setCardWidth]=useState('1000')
  const [fontSize,setFontSize]=useState('8')
  function truncateText(text, maxWords) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(' ');
  }

  const adjustCardWidth=()=>{
      const windowWidth=window.innerWidth
      if(windowWidth>=768)
      {
        setCardWidth(windowWidth*0.42)
      }
      else if(windowWidth>=500)
      {
        setCardWidth(windowWidth*0.8)
      }
      else{
        setCardWidth(windowWidth*0.7)
      }
  }
  useEffect(()=>{
    adjustCardWidth()
    window.addEventListener('resize', adjustCardWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', adjustCardWidth);
    };

  },[])


  return (
      <div className="h-96 mb-4 grid grid-cols-5 mx-8 max-xs:grid-cols-1 max-xs:h-96
      cursor-pointer dark:bg-darkCard" style={{'width':`${cardWidth}px`}} onClick={()=>{setModal(true);setBlog(blog)}}>
       <div className="col-span-2 max-xs:col-span-1">
        <img src={blog.cover_image} className="object-cover w-96 h-96 max-xs:h-36 rounded-tl-2xl
         rounded-bl-2xl max-xs:rounded-tl-2xl max-xs:rounded-tr-2xl max-xs:rounded-bl-none"/>
       </div>
       <div className="col-span-3 max-xs:cols-span-1 max-xs:col-span-1 max-xs:h-60 bg-light-blue dark:bg-darkCard rounded-tr-2xl rounded-br-2xl
       max-xs:rounded-bl-2xl max-xs:rounded-br-2xl max-xs:rounded-tr-none flex flex-col p-4 max-xl:pt-4 dark:text-gray">
           <div className="flex flex-row justify-between dark:text-gray">
              <div>
                <span className="max-lg:text-sm max-md:text-xs">{blog.author}</span>
              </div>
              <div>
                <span className="max-lg:text-sm max-md:text-xs font-semibold">{blog.sig}</span>
              </div>
           </div>
           <div>
              <h1 className="text-xl font-bold mt-4 mb-4 max-xl:text-lg max-sm:text-md max-sm:mt-1 max-sm:mb-1
              max-xs:text-sm dark:text-white">{blog.title}</h1>
           </div>
           <div className="pb-3 text-xl max-xl:pb-0 text-pretty max-xl:text-lg max-lg:text-sm max-md:text-lg max-sm:text-md max-xs:text-sm dark:text-grayDark">
              <p>{blog.body.slice(0,130)}...</p>
           </div>
           <div className="mt-2">
              <div className="cursor-pointer text-primary-blue font-semibold">
                # {blog.tags}
              </div>
           </div>
       </div>
      </div>
  );
}

export default Card;

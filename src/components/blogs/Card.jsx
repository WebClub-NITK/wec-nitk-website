const Card = ({blog,setModal,setBlog}) => {

  function truncateText(text, maxWords) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(' ');
  }


  return (
      <div className="h-80 mb-4 w-2xl max-xl:w-xl max-lg:w-3xl max-md:w-2xl max-sm:w-96 grid grid-cols-5 mx-8
      cursor-pointer" onClick={()=>{setModal(true);setBlog(blog)}}>
       <div className="col-span-2">
        <img src={blog.cover_image} className="object-cover w-96 h-80 rounded-tl-2xl rounded-bl-2xl"/>
       </div>
       <div className="col-span-3 bg-light-blue rounded-tr-2xl rounded-br-2xl flex flex-col p-4 pt-8
       max-xl:pt-4">
           <div className="flex flex-row justify-between">
              <div>
                <span className="max-lg:text-lg max-md:text-sm">{blog.author}</span>
              </div>
              <div>
                <span className="max-lg:text-lg max-md:text-sm">{blog.sig}</span>
              </div>
           </div>
           <div>
              <h1 className="text-xl font-bold mt-4 mb-4 max-xl:text-lg max-sm:text-md max-sm:mt-1 max-sm:mb-1">{blog.title}</h1>
           </div>
           <div className="pb-3 max-xl:pb-0 text-pretty max-xl:text-sm max-lg:text-lg max-md:text-sm">
              <p>{truncateText(blog.subheading, 25)}...</p>
           </div>
           <div className="mt-2">
              <div className="cursor-pointer text-primary-blue">
                # {blog.tags}
              </div>
           </div>
       </div>
      </div>
  );
}

export default Card;

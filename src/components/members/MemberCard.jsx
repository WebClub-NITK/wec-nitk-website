"use client"

import Link from "next/link"
import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaLink } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoMail } from "react-icons/io5"

export default function MemberCard ({ member }) {
    let { name, posts, github_id, linkedin_id, mail_id, image, alumni } = member
    
    let imagePath = image.data?.attributes.formats.thumbnail.url
    let imageURL = (process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL || "/strapi") + imagePath


    let postsArray = posts.data.length ? posts.data.map(post => post.attributes.title) : ["Member"]
    if (alumni) postsArray = ["Alumnus"]

    let [ showSocials, setShowSocials ] = useState(null)
    
    let animation = "animate-[uncrop-card_0ms]"
    // let animationBigger = "animate-[uncrop-card-bigger_0ms]"

    if (showSocials) {
        animation = "animate-[crop-card_500ms]"
        // animationBigger = "animate-[crop-card-bigger_500ms]"
    } else if (showSocials === false) {
        animation = "animate-[uncrop-card_500ms]"
        // animationBigger = "animate-[uncrop-card-bigger_500ms]"
    }

    return (
        <div className="relative h-full w-full max-w-60 mx-auto drop-shadow-md">
            <div className={`rounded-lg bg-white ${animation} fill-mode-forwards p-[1px] h-full`}>
                <div
                    className={`rounded-lg bg-white text-primary-800 overflow-hidden transition flex flex-col items-center p-6 pb-14 ${animation} fill-mode-forwards h-full`}
                >
                    {
                        imagePath ?
                        <img src={imageURL} alt="" className="rounded-lg w-full" />
                        :
                        <div className="py-4 text-gray-950">
                            <IoMdPerson size={150}/>
                        </div>
                    }
                    <h1 className="text-lg font-bold leading-5 mt-4 mb-3 text-center">{name}</h1>
                    <div>
                        {postsArray.map(post =>
                            <h2 className="text-sm font-extrabold text-center mt text-primary-500" key={post}>{post}</h2>
                        )}
                    </div>
                </div>
            </div>

            <div 
                className={`h-10 bg-gray-50 text-primary-800 absolute bottom-0 right-0 p-2 flex gap-3 items-center justify-end overflow-hidden ${showSocials ? "w-[148px]" : "w-10"} duration-500 border-[1px] border-gray-200 rounded-br-lg`}
                onMouseOver={() => setShowSocials(true)}
                onMouseOut={() => setShowSocials(false)}
            >
                { github_id ? <Link href={github_id} target="_blank"><FaGithub size={22}/></Link> : null }
                { linkedin_id ? <Link href={linkedin_id} target="_blank"><FaLinkedin size={22} /></Link> : null }
                { mail_id ? <Link href={`mailto:${mail_id}`}><IoMail size={25} /></Link> : null }
                {/* { twitter_id ? <Link href={twitter_id} target="_blank"><FaXTwitter size={22} /></Link> : null } */}
                <FaLink size={24} className={`${showSocials ? "rotate-90 scale-[1.15]" : ""} duration-500 shrink-0 cursor-pointer`} />
            </div>
        </div>
    )
}
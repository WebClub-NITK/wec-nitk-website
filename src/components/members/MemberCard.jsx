"use client"

import Link from "next/link"
import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter, FaLink } from "react-icons/fa6";
import { IoMail } from "react-icons/io5"

export default function MemberCard ({ member }) {
    let { name, sig, role, github_id, linkedin_id, mail_id, twitter_id, image } = member

    let [ showSocials, setShowSocials ] = useState(null)
    
    let animation = "animate-[uncrop-card_0ms]"
    let animationBigger = "animate-[uncrop-card-bigger_0ms]"

    if (showSocials) {
        animation = "animate-[crop-card_500ms]"
        animationBigger = "animate-[crop-card-bigger_500ms]"
    } else if (showSocials === false) {
        animation = "animate-[uncrop-card_500ms]"
        animationBigger = "animate-[uncrop-card-bigger_500ms]"
    }

    return (
        <div className="relative">
            <div className={`rounded-lg bg-primary-200 ${animationBigger} fill-mode-forwards p-[1px]`}>
                <div
                    className={`rounded-lg bg-gray-950 overflow-hidden transition cursor-pointer flex flex-col items-center p-6 pt-14 ${animation} fill-mode-forwards`}
                >
                    <img src={image} alt="" className="rounded-full h-40 w-40" />
                    <h1 className="text-2xl font-medium mt-4">{name}</h1>
                    <h2 className="text-sm font-extrabold text-primary-300">{role}</h2>
                </div>
            </div>

            <div 
                className={`h-10 text-primary-100 absolute top-0 right-0 p-2 flex gap-3 items-center justify-end overflow-hidden ${showSocials ? "w-[180px]" : "w-10"} duration-500 border-[1px] border-primary-200 rounded-tr`}
                onMouseOver={() => setShowSocials(true)}
                onMouseOut={() => setShowSocials(false)}
            >
                { github_id ? <Link href={github_id} target="_blank"><FaGithub size={22}/></Link> : null }
                { linkedin_id ? <Link href={linkedin_id} target="_blank"><FaLinkedin size={22} /></Link> : null }
                { mail_id ? <Link href={`mailto:${mail_id}`}><IoMail size={25} /></Link> : null }
                { twitter_id ? <Link href={twitter_id} target="_blank"><FaXTwitter size={22} /></Link> : null }
                <FaLink size={24} className={`${showSocials ? "rotate-90 scale-[1.15]" : ""} duration-500 shrink-0 cursor-pointer`} />
            </div>
        </div>
    )
}
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5"

export default function MemberCard ({ member }) {
    let { name, sig, role, github_id, linkedin_id, mail_id, twitter_id, image } = member

    return (
        <div className="rounded-lg overflow-hidden shadow-secondary-300 shadow transition hover:shadow-secondary-200 hover:-translate-y-2 duration-300 m-4 bg-secondary-600 cursor-pointer flex flex-col items-center p-6">
            <img src={image} alt="" className="rounded-full h-40 w-40" />
            <h1 className="text-2xl font-medium mt-4">{name}</h1>
            <h2 className="text-sm font-extrabold text-primary-300">{role}</h2>
            <div className="h-8 mt-4 flex gap-2 text-primary-100 items-center">
                { github_id ? <Link href={github_id} target="_blank"><FaGithub size={22}/></Link> : null }
                { linkedin_id ? <Link href={linkedin_id} target="_blank"><FaLinkedin size={22} /></Link> : null }
                { mail_id ? <Link href={`mailto:${mail_id}`}><IoMail size={25} /></Link> : null }
                { twitter_id ? <Link href={twitter_id} target="_blank"><FaXTwitter size={22} /></Link> : null }
            </div>
        </div>
    )
}
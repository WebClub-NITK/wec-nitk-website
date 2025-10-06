"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X_icon } from "../icons/X_twitter";
import { FacebookIcon } from "../icons/facebook";
import { Linkedin } from "lucide-react";

export default function ShareSection({title}) {
    const pathname = usePathname();
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.origin + pathname);
        }
    }, [pathname]);

    const shareText = 
    `Check out this blog from WebClub NITK\n${title}\n`;

    return (
        <>
            <h2 className="text-lg font-semibold">Share</h2>
            <div className="flex space-x-2 mt-2">
                <a href={`https://twitter.com/share?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer">
                    <X_icon className="bg-blue-500 text-white p-2 rounded-full h-10 w-10 " />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer">
                    <FacebookIcon className="bg-blue-700 text-white p-2 rounded-full h-10 w-10" />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2">
                    <Linkedin className="h-6 w-6"/>
                </a>
            </div>
        </>
    );
}

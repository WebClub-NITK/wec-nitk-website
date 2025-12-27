"use client"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { ArrowRightIcon } from '@/components/icons/arrow';
import { TrophyIcon } from '@/components/icons/trophy'
import { CalendarClock } from "lucide-react";
import Image from "next/image"
import { useState, useEffect } from "react"
import { fetchLinkPreview } from "@/lib/hackathonUtils"

export default function HackathonCard({ hackathon }) {
    const { title, description, prizes, mode, start_time, end_time, link, image, previewUrl } = hackathon;
    const [previewImage, setPreviewImage] = useState(null);

    // Check if we have Strapi image or need to fetch preview
    let imagePath = image?.data?.attributes?.formats?.thumbnail?.url
    let imageURL = imagePath ? (process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL || "/strapi") + imagePath : null

    // Fetch link preview if no Strapi image is available
    useEffect(() => {
        if (!imageURL && previewUrl) {
            fetchLinkPreview(previewUrl)
                .then(preview => {
                    setPreviewImage(preview.image);
                })
                .catch(error => {
                    console.error('Error fetching preview:', error);
                    setPreviewImage('/placeholder.svg');
                });
        }
    }, [imageURL, previewUrl]);

    // Determine which image to use
    const displayImage = imageURL || previewImage || '/placeholder.svg';

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };
    
    const formatTimeline = (start, end) => {
        const startDate = formatDate(start);
        const endDate = formatDate(end);
        
        const startMonth = startDate.split(' ')[0];
        const endMonth = endDate.split(' ')[0];
        const startDay = startDate.split(' ')[1];
        const endDay = endDate.split(' ')[1];
        const startYear = startDate.split(' ')[2];
        const endYear = endDate.split(' ')[2];
        
        return `${startMonth} ${startDay} ${startYear} - ${endMonth} ${endDay} ${endYear}`;
    };
    
    const timeline = formatTimeline(start_time, end_time);

    return (
        <Card className="relative bg-hackclub-side">
            <div className="absolute top-4 left-4 bg-secondary-900 text-gray-50 px-3 py-1 rounded-t-md rounded-bl-md text-xs font-medium">
                {mode}
            </div>

            <CardHeader>
                <Image
                    src={displayImage}
                    alt={title || "Hackathon"}
                    className="rounded-t-lg object-cover w-full"
                    height="200"
                    width="300"
                    style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                    }}
                    unoptimized={!imageURL}
                />
            </CardHeader>
            <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                <p className="text-sm md:text-base text-gray-700 mt-2">
                    {description}
                </p>
                <div className="flex items-center gap-2 mt-4">
                <CalendarClock size={22} className="inline" /><span className="text-sm md:text-base font-medium">{timeline}</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <TrophyIcon className="w-5 h-5 text-[#F59E0B]" />
                    <span className="text-sm md:text-base font-medium">{prizes}</span>
                </div>
                <a
                    className="inline-flex items-center gap-2 text-sm md:text-base font-medium mt-4 text-hackclub-primary-dark hover:underline"
                    href={link}
                    _target="blank"
                    rel='noreferrer noopener'
                >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                </a>
            </CardContent>
        </Card>
    );
}
"use client"
import { useState, useEffect } from "react";
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { ArrowRightIcon } from '@/components/icons/arrow';
import { TrophyIcon } from '@/components/icons/trophy'
import { CalendarClock } from "lucide-react";
import Image from "next/image"

const DEFAULT_HACKATHON_IMAGE =
    "https://cdn.dorahacks.io/static/files/189f8f1398ad4732d09ce824ea48afa3.png";

export default function HackathonCard({ hackathon }) {
    const { title, prizes, mode, start_time, end_time, link, theme } = hackathon;
    const [imageUrl, setImageUrl] = useState(DEFAULT_HACKATHON_IMAGE);
    const [imageLoading, setImageLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const fetchLinkPreview = async () => {
            if (!link) {
                setImageLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `https://api.microlink.io/?url=${encodeURIComponent(link)}`
                );
                const data = await response.json();

                if (data.status === "success") {
                    const previewImage =
                        data.data.image?.url ||
                        data.data.logo?.url ||
                        null;
                    
                    // Only set the image if we got a valid URL
                    if (previewImage && previewImage.startsWith('https')) {
                        setImageUrl(previewImage);
                    } else {
                        setImageUrl(getFallbackImage(link));
                    }
                } else {
                    setImageUrl(getFallbackImage(link));
                }
            } catch (error) {
                setImageUrl(getFallbackImage(link));
            }
            setImageLoading(false);
        };

        fetchLinkPreview();
    }, [link]);

    const getDomain = (url) => {
        try {
            const domain = new URL(url).hostname;
            return domain.replace("www.", "");
        } catch {
            return url;
        }
    };

    const getFallbackImage = (url) => {
        if (!url) return DEFAULT_HACKATHON_IMAGE;
        
        const domain = getDomain(url);

        if (domain.includes("dorahacks")) {
            return DEFAULT_HACKATHON_IMAGE;
        } else if (domain.includes("devpost")) {
            return "https://images.icon-icons.com/2699/PNG/512/devpost_logo_icon_169280.png";
        } else if (domain.includes("mlh")) {
            return "https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png";
        } else if (domain.includes("devfolio")) {
            return "https://cdn.iconscout.com/icon/free/png-256/free-devfolio-logo-icon-svg-download-png-1399882.png";
        } else if (domain.includes("ethglobal")) {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFoCD1TcZC2HkxRCuGMrjeZW7ZimBjve5BcQ&s";
        } else {
            return DEFAULT_HACKATHON_IMAGE;
        }
    };

    // Handle image load error by falling back to default
    const handleImageError = () => {
        if (!imageError) {
            setImageError(true);
            setImageUrl(DEFAULT_HACKATHON_IMAGE);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "";
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const formatTimeline = (start, end) => {
        const startDate = formatDate(start);
        const endDate = formatDate(end);

        if (!startDate && !endDate) return "TBA";
        if (!startDate) return `Until ${endDate}`;
        if (!endDate) return `From ${startDate}`;

        const startParts = startDate.split(' ');
        const endParts = endDate.split(' ');

        const startMonth = startParts[0];
        const endMonth = endParts[0];
        const startDay = startParts[1];
        const endDay = endParts[1];
        const startYear = startParts[2];
        const endYear = endParts[2];

        return `${startMonth} ${startDay} ${startYear} - ${endMonth} ${endDay} ${endYear}`;
    };

    const timeline = formatTimeline(start_time, end_time);

    // Truncate prizes text if too long
    const truncatePrizes = (prizesText, maxLength = 60) => {
        if (!prizesText) return "Check details";
        if (prizesText.length <= maxLength) return prizesText;
        return prizesText.substring(0, maxLength) + "...";
    };

    return (
        <Card className="relative bg-hackclub-side hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 left-4 z-10 bg-secondary-900 text-gray-50 px-3 py-1 rounded-t-md rounded-bl-md text-xs font-medium capitalize">
                {mode || "virtual"}
            </div>

            <CardHeader className="p-0">
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg bg-gray-100">
                    {imageLoading ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                            <div className="w-12 h-12 rounded-full border-2 border-hackclub-primary border-t-transparent animate-spin" />
                        </div>
                    ) : (
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            unoptimized
                            onError={handleImageError}
                        />
                    )}
                </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold line-clamp-2">{title}</h3>
                {theme && (
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {theme}
                    </p>
                )}
                <div className="flex items-center gap-2 mt-4">
                    <CalendarClock size={22} className="inline flex-shrink-0" />
                    <span className="text-sm font-medium">{timeline}</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <TrophyIcon className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium line-clamp-1">
                        {truncatePrizes(prizes)}
                    </span>
                </div>
                <a
                    className="inline-flex items-center gap-2 text-sm md:text-base font-medium mt-4 text-hackclub-primary-dark hover:underline"
                    href={link}
                    target="_blank"
                    rel='noreferrer noopener'
                >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                </a>
            </CardContent>
        </Card>
    );
}

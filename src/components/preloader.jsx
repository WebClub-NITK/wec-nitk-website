"use client"
import { FlipWords } from "./ui/flip-words";
import { useState, useRef, useEffect } from "react";

export const Preloader = ({ children, onFinish }) => {

    const [loading, setLoading] = useState(true);
    const [firstVisit, setFirstVisit] = useState(true);
  
  
    const handlePreloaderFinish = () => {
      setLoading(false);
      setFirstVisit(false);
    }

    const preloaderRef = useRef();

    useEffect(() => {
        const preloaderElement = preloaderRef.current;
        const handleAnimationEnd = () => {
          onFinish();
        };
    
        preloaderElement.addEventListener("animationend", handleAnimationEnd);
    
        return () => {
          preloaderElement.removeEventListener("animationend", handleAnimationEnd);
        };
      }, [onFinish]);

    const wecHeroWords = [
        "We Are Passionate about Computer Science",
        "We Promote Open Source",
        "We Foster Competitive Programming Culture",
        "We Build Solutions to Existing Problems",
        "We Help the community around us",
        "We are Web Enthusiasts' Club NITK"
    ];

    return (
        <div className="relative w-screen h-screen bg-secondary-800 flex justify-center items-center z-20">
            <div ref={preloaderRef} className="text-primary-50 text-4xl font-bold"><FlipWords words={wecHeroWords} /></div>
        </div>
    );
};
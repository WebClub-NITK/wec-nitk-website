"use client"
import { FlipWords } from "./ui/flip-words";
import { useState, useRef, useEffect } from "react";

export const Preloader = ({ children, onFinish }) => {

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
        "Websites are the only thing",
        "we are enthusiastic about",
        "Systems",
        "Algorithms",
        "Intelligence",
        "Development",
    ];

    return (
        <div className=" w-screen h-screen bg-secondary-800 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-3xl bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6]">
            <div ref={preloaderRef} className="text-primary-50 md:text-[100px] text-xl font-bold"><FlipWords words={wecHeroWords} /></div>
        </div>
    );
};



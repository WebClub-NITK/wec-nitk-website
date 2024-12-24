"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 2400,
  className,
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [alreadyAnimated, setAlreadyAnimated] = useState([]);
  const [abbreviation, setAbbreviation] = useState("");
  const [showFinalString, setShowFinalString] = useState(false);

  const startAnimation = useCallback(() => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = currentIndex + 1;
    const word = nextIndex < words.length ? words[nextIndex] : null;
    
    if (word) {
      setCurrentWord(word);
      setAlreadyAnimated([...alreadyAnimated, currentWord]);

      if (["Systems", "Algorithms", "Intelligence", "Development"].includes(word)) {
        setAbbreviation((prev) => prev + word[0]);
      }

      if (nextIndex < words.length) {
        setIsAnimating(true);
      }

      if (currentWord in alreadyAnimated) {
        setIsAnimating(false);
      }
      setIsAnimating(nextIndex < words.length);
    } else {
      // All words are done, show final string
      setShowFinalString(true);
    }
  }, [currentWord, words, alreadyAnimated]);

  useEffect(() => {
    if (!isAnimating && !showFinalString) {
      setTimeout(() => {
        startAnimation();
      }, duration);
    }
  }, [isAnimating, duration, startAnimation, showFinalString]);

  const transitionDuration = ["Systems", "Algorithms", "Intelligence", "Development"].includes(currentWord) ? 0.3 : 1;

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        {!showFinalString ? (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: transitionDuration,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            exit={{
              opacity: 0,
              y: -40,
              x: 40,
              filter: "blur(8px)",
              scale: 2,
              position: "absolute",
            }}
            className={cn(
              "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
              className
            )}
            key={currentWord}
          >
            {currentWord.split("").map((letter, index) => (
              <motion.span
                key={currentWord + index}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: index * 0.08,
                  duration: transitionDuration,
                }}
                className="inline-block "
              >
                {letter + (letter === " " ? "\u00A0" : "")}
              </motion.span>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className={cn(
              "z-10 inline-block relative text-left text-secondary-900 px-2",
              className
            )}
          >
            {abbreviation+ " no one EVER"}
          </motion.div>
        )}
      </AnimatePresence>
      {!showFinalString && (
        <div className="mt-4 text-xl font-bold text-neutral-900 dark:text-neutral-100">
          {abbreviation}
        </div>
      )}
    </div>
  );
};
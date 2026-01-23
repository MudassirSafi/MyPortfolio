import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Reset when text changes
        setDisplayText("");
        setCurrentIndex(0);
        setIsComplete(false);
    }, [text]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(text.substring(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else if (currentIndex === text.length && text.length > 0) {
            setIsComplete(true);
        }
    }, [currentIndex, text]);

    return (
        <span className={className}>
            {displayText}
            {!isComplete && (
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block w-[4px] h-[0.85em] bg-gradient-to-b from-red-500 to-blue-500 ml-2 translate-y-1"
                />
            )}
        </span>
    );
};

export default Typewriter;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay + 100);

            return () => clearTimeout(timeout);
        } else {
            setIsComplete(true);
        }
    }, [currentIndex, delay, text]);

    return (
        <>
            {displayText}
            {!isComplete && (
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block w-[4px] h-[0.85em] bg-red-500 ml-1 translate-y-1"
                />
            )}
        </>
    );
};

export default Typewriter;

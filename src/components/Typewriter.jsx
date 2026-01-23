import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ phrases, start = true, loop = true }) => {
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        if (!start) return;

        const fullText = phrases.map(p => p.text).join("");

        const handleTyping = () => {
            if (!isDeleting) {
                if (charIndex < fullText.length) {
                    setCharIndex(prev => prev + 1);
                    setTypingSpeed(100);
                } else {
                    if (loop) {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                }
            } else {
                if (charIndex > 0) {
                    setCharIndex(prev => prev - 1);
                    setTypingSpeed(50);
                } else {
                    setIsDeleting(false);
                    setTypingSpeed(500);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, phrases, start, typingSpeed, loop]);

    const Cursor = () => (
        <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-[4px] h-[0.85em] bg-red-500 ml-1 translate-y-1"
        />
    );

    const renderText = () => {
        let currentCount = 0;
        const totalChars = phrases.reduce((acc, p) => acc + p.text.length, 0);

        return phrases.map((phrase, idx) => {
            const phraseText = phrase.text;
            const visiblePart = phraseText.substring(0, Math.max(0, charIndex - currentCount));
            const phraseLength = phraseText.length;
            const isCurrentlyTyping = charIndex > currentCount && charIndex <= currentCount + phraseLength;
            const isLastPhrase = idx === phrases.length - 1;
            const isFinished = charIndex === totalChars;

            currentCount += phraseLength;

            if (visiblePart.length === 0 && !isCurrentlyTyping) return null;

            return (
                <span key={idx} className={`${phrase.className} ${phrase.block ? 'block' : 'inline'}`}>
                    {visiblePart}
                    {/* Show cursor if this is the currently typing phrase OR if it's the last phrase and we're finished typing (and not deleting) */}
                    {(isCurrentlyTyping || (isLastPhrase && isFinished && !isDeleting)) && <Cursor />}
                </span>
            );
        });
    };

    return (
        <div className="flex flex-col items-center lg:items-start transition-all duration-300">
            {renderText()}
        </div>
    );
};

export default Typewriter;

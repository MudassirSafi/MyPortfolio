import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Typewriter = ({ phrases, start = true, loop = true }) => {
    const [displayText, setDisplayText] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        if (!start) return;

        const handleTyping = () => {
            // For this specific use case, we are typing multiple segments of ONE phrase
            // phrases = [{text: "SOFTWARE", class: "..."}, {text: " ENGINEER", class: "..."}]

            const currentPhraseSegments = phrases;
            const fullText = currentPhraseSegments.map(p => p.text).join("");

            if (!isDeleting) {
                // Typing logic
                if (charIndex < fullText.length) {
                    setCharIndex(prev => prev + 1);
                    setTypingSpeed(100);
                } else {
                    // Pause at end
                    if (loop) {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                }
            } else {
                // Deleting logic
                if (charIndex > 0) {
                    setCharIndex(prev => prev - 1);
                    setTypingSpeed(50);
                } else {
                    setIsDeleting(false);
                    // If we had multiple phrases to cycle through, we'd increment phraseIndex here
                    // For now, we just loop the same "SOFTWARE ENGINEER" phrase
                    setTypingSpeed(500);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, phrases, start, typingSpeed, loop]);

    // Helper to render segments based on current charIndex
    const renderText = () => {
        let currentCount = 0;
        return phrases.map((phrase, idx) => {
            const phraseText = phrase.text;
            const visiblePart = phraseText.substring(0, Math.max(0, charIndex - currentCount));
            currentCount += phraseText.length;

            if (visiblePart.length === 0) return null;

            return (
                <span key={idx} className={phrase.className}>
                    {visiblePart}
                </span>
            );
        });
    };

    return (
        <div className="inline-flex items-center">
            {renderText()}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[4px] h-[0.9em] bg-red-500 ml-1 translate-y-1"
            />
        </div>
    );
};

export default Typewriter;

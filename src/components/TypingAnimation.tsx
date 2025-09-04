import { useState, useEffect } from 'react';
import type { TypingAnimationProps } from '../types';

export default function TypingAnimation({ 
  text, 
  speed = 150, 
  delay = 0, 
  className = '', 
  showCursor = true 
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursorBlink(prev => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span 
          className="typing-cursor"
          style={{ 
            opacity: showCursorBlink ? 1 : 0,
            transition: 'opacity 0.1s'
          }}
        >
          |
        </span>
      )}
    </span>
  );
}

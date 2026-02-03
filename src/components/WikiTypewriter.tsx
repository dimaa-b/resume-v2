import { useState, useEffect, type ReactNode } from 'react';
import { useWikiEdit } from '../context';

interface WikiTypewriterProps {
  children: ReactNode;
  sectionIndex: number;
  delay?: number;
}

export default function WikiTypewriter({ children, sectionIndex, delay = 0 }: WikiTypewriterProps) {
  const { currentSection, phase, isComplete } = useWikiEdit();
  const [displayedContent, setDisplayedContent] = useState<ReactNode>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const shouldReveal = isComplete || currentSection >= sectionIndex;

  useEffect(() => {
    if (shouldReveal && !isRevealed) {
      const timer = setTimeout(() => {
        setDisplayedContent(children);
        setIsRevealed(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [shouldReveal, isRevealed, children, delay]);

  // Show cursor during editing phase for current section
  const showCursor = phase === 'editing' && currentSection === sectionIndex;

  return (
    <span className={`wiki-typewriter ${isRevealed ? 'revealed' : 'hidden'}`}>
      {isRevealed ? displayedContent : null}
      {showCursor && <span className="wiki-cursor">|</span>}
    </span>
  );
}

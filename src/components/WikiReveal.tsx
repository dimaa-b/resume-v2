import { type ReactNode } from 'react';
import { useWikiEdit } from '../context';

interface WikiRevealProps {
  children: ReactNode;
  sectionIndex: number;
  className?: string;
}

export default function WikiReveal({ children, sectionIndex, className = '' }: WikiRevealProps) {
  const { currentSection, isComplete } = useWikiEdit();
  
  const isVisible = isComplete || currentSection >= sectionIndex;
  
  return (
    <div 
      className={`wiki-reveal ${isVisible ? 'visible' : 'pending'} ${className}`}
      style={{
        '--reveal-delay': `${sectionIndex * 0.1}s`
      } as React.CSSProperties}
    >
      {children}
      {!isVisible && (
        <div className="wiki-redacted">
          <span className="wiki-redacted-text">[citation needed]</span>
        </div>
      )}
    </div>
  );
}

import "../styles/WikipediaResume.css";
import { useWikiEdit } from '../context';
import type { ResumeSectionProps } from "../types";

interface WikiResumeSectionProps extends ResumeSectionProps {
  revealIndex: number;
}

export default function ResumeSection({ id, title, className = '', children, revealIndex }: WikiResumeSectionProps) {
  const { currentSection, isComplete, phase } = useWikiEdit();
  const isRevealed = isComplete || currentSection >= revealIndex;

  return (
    <section 
      id={id} 
      className={`wiki-resume-section ${isRevealed ? 'wiki-revealed' : 'wiki-pending'} ${className}`.trim()}
    >
      <h3 className={isRevealed ? 'wiki-section-title-revealed' : 'wiki-section-title-pending'}>
        {isRevealed ? (
          <>
            <span className="wiki-bracket">[</span>
            <a href={`#${id}`} className="wiki-edit-link">edit</a>
            <span className="wiki-bracket">]</span>
            {' '}{title}
          </>
        ) : (
          <>
            <span className="wiki-skeleton-title"></span>
            {phase === 'editing' && (
              <span className="wiki-typing-indicator">
                <span>.</span><span>.</span><span>.</span>
              </span>
            )}
          </>
        )}
      </h3>
      <div className="wiki-section-content">
        {isRevealed ? children : (
          <div className="wiki-content-skeleton">
            <div className="wiki-skeleton-line" style={{ width: '90%' }}></div>
            <div className="wiki-skeleton-line" style={{ width: '75%' }}></div>
            <div className="wiki-skeleton-line" style={{ width: '85%' }}></div>
          </div>
        )}
      </div>
    </section>
  );
}

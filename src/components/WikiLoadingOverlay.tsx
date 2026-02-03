import { useWikiEdit } from '../context';
import '../styles/WikipediaResume.css';

export default function WikiLoadingOverlay() {
  const { phase, editProgress } = useWikiEdit();

  if (phase === 'published') return null;

  return (
    <div className={`wiki-overlay ${phase}`}>
      <div className="wiki-overlay-content">
        {phase === 'loading' && (
          <>
            <div className="wiki-globe-loader">
              <img 
                src="https://en.wikipedia.org/static/images/icons/wikipedia.png" 
                alt="Wikipedia"
                className="wiki-globe-spin"
              />
            </div>
            <p className="wiki-loading-text">Loading article...</p>
          </>
        )}
        
        {phase === 'editing' && (
          <>
            <div className="wiki-edit-indicator">
              <span className="wiki-edit-icon">✎</span>
              <span className="wiki-blink">|</span>
            </div>
            <p className="wiki-loading-text">
              Editing article<span className="wiki-dots"></span>
            </p>
          </>
        )}
        
        {phase === 'saving' && (
          <>
            <div className="wiki-save-bar">
              <div 
                className="wiki-save-progress" 
                style={{ width: `${editProgress}%` }}
              />
            </div>
            <p className="wiki-loading-text">
              Publishing changes... {editProgress}%
            </p>
          </>
        )}
      </div>
    </div>
  );
}

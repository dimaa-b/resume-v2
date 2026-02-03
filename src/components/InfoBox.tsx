import "../styles/WikipediaResume.css";
import { useWikiEdit } from '../context';

export default function InfoBox() {
  const { currentSection, isComplete, phase } = useWikiEdit();
  const isRevealed = isComplete || currentSection >= 1;

  return (
    <div className={`info-box ${isRevealed ? 'revealed' : 'pending'}`}>
      <h4 className={isRevealed ? '' : 'wiki-skeleton'}>
        {isRevealed ? 'Dmitry Baryshnikov' : ''}
      </h4>
      <div className={`info-box-image ${isRevealed ? 'revealed' : 'loading'}`}>
        {isRevealed ? (
          <img src="/profile.jpeg" alt="Dmitry Baryshnikov" />
        ) : (
          <div className="wiki-image-placeholder">
            <span>📷</span>
            <span className="wiki-upload-text">Upload image</span>
          </div>
        )}
      </div>
      <div className={`info-row ${isRevealed ? 'revealed' : 'pending'}`}>
        <span className="info-label">Education</span>
        <span>{isRevealed ? <>Baruch College, CUNY<br />B.S. Mathematics<br />Expected May 2027</> : <span className="wiki-redact-line"></span>}</span>
      </div>
      <div className={`info-row ${isRevealed ? 'revealed' : 'pending'}`}>
        <span className="info-label">Based in</span>
        <span>{isRevealed ? 'New York City, New York' : <span className="wiki-redact-line"></span>}</span>
      </div>
      <div className={`info-row ${isRevealed ? 'revealed' : 'pending'}`}>
        <span className="info-label">GPA</span>
        <span>{isRevealed ? '3.9 (Dean\'s List)' : <span className="wiki-redact-line"></span>}</span>
      </div>
      {phase === 'editing' && !isRevealed && (
        <div className="wiki-edit-notice">
          <span className="wiki-edit-icon-small">✎</span> Being edited...
        </div>
      )}
    </div>
  );
}

import { useWikiEdit } from '../context';

export default function ScrollProgress() {
  const { editProgress, phase } = useWikiEdit();
  
  // Only show during saving phase
  if (phase !== 'saving') return null;
  
  return (
    <div className="wiki-publish-bar">
      <div 
        className="wiki-publish-progress"
        style={{ width: `${editProgress}%` }}
      />
    </div>
  );
}

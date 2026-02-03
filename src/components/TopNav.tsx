import "../styles/WikipediaResume.css";
import { useWikiEdit } from '../context';

interface TopNavProps {
  isNightMode: boolean;
  onToggleTheme: () => void;
}

export default function TopNav({ isNightMode, onToggleTheme }: TopNavProps) {
  const { phase, isComplete } = useWikiEdit();
  
  return (
    <nav className={`top-nav ${isComplete ? 'published' : phase}`}>
      <img 
        src="https://en.wikipedia.org/static/images/icons/wikipedia.png" 
        alt="Wikipedia Logo" 
        className={`logo ${phase === 'loading' ? 'spinning' : ''}`}
      />
      <ul className="nav-tabs">
        <li>
          <a href="#" className={phase === 'editing' ? 'editing' : 'active'}>
            {phase === 'editing' ? 'Editing' : 'Article'}
          </a>
        </li>
        {phase === 'editing' && (
          <li className="wiki-tab-fade-in">
            <a href="#" className="wiki-unsaved">
              (unsaved changes)
            </a>
          </li>
        )}
      </ul>
      <div className="search-box">
        <input 
          type="search" 
          placeholder="Search Wikipedia" 
          className="search-input"
        />
      </div>
      <div className="user-tools">
        <a href="#" onClick={(e) => { e.preventDefault(); onToggleTheme(); }} title={isNightMode ? 'Switch to light mode' : 'Switch to dark mode'}>
          {isNightMode ? '☀️' : '🌙'}
        </a>
        <a href="#">Create account</a>
        <a href="#">Log in</a>
      </div>
    </nav>
  );
}

import "../styles/WikipediaResume.css";
import { useWikiEdit } from '../context';
import { NAVIGATION_LINKS } from "../utils";

export default function Sidebar() {
  const { currentSection, isComplete } = useWikiEdit();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sidebar">
      <h3>Contents</h3>
      <ul>
        {NAVIGATION_LINKS.map((link, index) => {
          const isRevealed = isComplete || currentSection >= index + 1;
          return (
            <li 
              key={link.href}
              className={`wiki-sidebar-item ${isRevealed ? 'revealed' : 'pending'}`}
              style={{ '--item-index': index } as React.CSSProperties}
            >
              <a 
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={isRevealed ? '' : 'disabled'}
              >
                {isRevealed ? link.text : '█'.repeat(link.text.length)}
              </a>
            </li>
          );
        })}
      </ul>
      <h3>Tools</h3>
      <ul>
        <li className="wiki-sidebar-item revealed">
          <a href="#" className="wiki-tool-link">
            View history
          </a>
        </li>
      </ul>
    </div>
  );
}

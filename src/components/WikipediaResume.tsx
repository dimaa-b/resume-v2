import "../styles/WikipediaResume.css";
import { WikiEditProvider } from '../context';
import { TopNav, Sidebar, MainContent, WikiLoadingOverlay } from './';

interface WikipediaResumeProps {
  isNightMode: boolean;
  onToggleTheme: () => void;
}

export default function WikipediaResume({ isNightMode, onToggleTheme }: WikipediaResumeProps) {
  return (
    <WikiEditProvider totalSections={8}>
      <div className="wikipedia-body">
        <WikiLoadingOverlay />
        <TopNav isNightMode={isNightMode} onToggleTheme={onToggleTheme} />
        <div className="page-container">
          <div className="container">
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    </WikiEditProvider>
  );
}

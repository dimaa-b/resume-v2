import "../styles/WikipediaResume.css";
import { WikiEditProvider } from '../context';
import { TopNav, Sidebar, MainContent, WikiLoadingOverlay } from './';

export default function WikipediaResume() {
  return (
    <WikiEditProvider totalSections={8}>
      <div className="wikipedia-body">
        <WikiLoadingOverlay />
        <TopNav />
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

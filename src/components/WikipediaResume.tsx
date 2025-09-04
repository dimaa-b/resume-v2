import "../styles/WikipediaResume.css";
import { TopNav, Sidebar, MainContent } from './';

export default function WikipediaResume() {
  return (
    <div className="wikipedia-body">
      <TopNav />
      <div className="page-container">
        <div className="container">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

import "./WikipediaResume.css";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

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

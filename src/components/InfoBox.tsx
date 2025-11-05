import "../styles/WikipediaResume.css";

export default function InfoBox() {
  return (
    <div className="info-box">
      <h4>Dmitry Baryshnikov</h4>
      {/* Use a local image file. Put `profile.jpeg` in the project's `public/` folder so it's available at `/profile.jpeg`. */}
      <img src="/profile.jpeg" alt="Dmitry Baryshnikov" />
      <div className="info-row">
        <span className="info-label">Education</span>
        <span>Baruch College, CUNY<br />B.S. Mathematics<br />Expected May 2027</span>
      </div>
      <div className="info-row">
        <span className="info-label">Based in</span>
        <span>New York City, New York</span>
      </div>
      <div className="info-row">
        <span className="info-label">GPA</span>
        <span>3.9 (Dean's List)</span>
      </div>
    </div>
  );
} 
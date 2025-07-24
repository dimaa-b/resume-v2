import "./WikipediaResume.css";

export default function InfoBox() {
  return (
    <div className="info-box">
      <h4>Dmitry Baryshnikov</h4>
      <img src="https://media.licdn.com/dms/image/v2/D4D03AQEt1HJQrR2fzg/profile-displayphoto-shrink_800_800/B4DZZ.xIGEHIAk-/0/1745883530704?e=1758153600&v=beta&t=1ckgpX-DLgJ-NIE8Jbx1oyIW605M9pP--ObpJJUGj80" alt="Dmitry Baryshnikov" />
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
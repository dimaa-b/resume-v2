import "./WikipediaResume.css";

export default function WikipediaResume() {
  return (
    <div className="wikipedia-body">
      <nav className="top-nav">
        <img src="https://en.wikipedia.org/static/images/icons/wikipedia.png" alt="Wikipedia Logo" className="logo" />
        <ul className="nav-tabs">
          <li><a href="#" className="active">Article</a></li>
        </ul>
        <div className="search-box">
          <input type="search" placeholder="Search Wikipedia" className="search-input" />
        </div>
        <div className="user-tools">
          <a href="#">Create account</a>
          <a href="#">Log in</a>
        </div>
      </nav>
      <div className="page-container">
        <div className="container">
          <div className="sidebar">
            <h3>Contents</h3>
            <ul>
              <li><a href="#education">1 Education</a></li>
              <li><a href="#projects">2 Projects</a></li>
              <li><a href="#experience">3 Experience</a></li>
              <li><a href="#contact">4 Contact Information</a></li>
            </ul>
            <h3>Tools</h3>
            <ul>
            </ul>
          </div>
          <div className="main-content">
            <div className="title-area">
              <h1>Dmitry Baryshnikov</h1>
              <div className="language-selector">
                <a href="#" className="language-selector">10 languages</a>
                <div className="language-menu">
                  <div className="language-search">
                    <input type="text" placeholder="Search language" />
                  </div>
                  <div className="language-list">
                    <div className="language-item"><span>English</span><span>English</span></div>
                    <div className="language-item"><span>Spanish</span><span>Español</span></div>
                    <div className="language-item"><span>French</span><span>Français</span></div>
                    <div className="language-item"><span>German</span><span>Deutsch</span></div>
                    <div className="language-item"><span>Hindi</span><span>हिन्दी</span></div>
                    <div className="language-item"><span>Chinese (Simplified)</span><span>简体中文</span></div>
                    <div className="language-item"><span>Chinese (Traditional)</span><span>繁體中文</span></div>
                    <div className="language-item"><span>Arabic</span><span>العربية</span></div>
                    <div className="language-item"><span>Korean</span><span>한국어</span></div>
                    <div className="language-item"><span>Japanese</span><span>日本語</span></div>
                  </div>
                </div>
              </div>
            </div>
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
            <p>i build cool stuff</p>
            <section id="education" className="fade-in visible">
              <h3>education</h3>
              <strong>baruch college, cuny</strong>
              <p>bachelors in computer science & mathematics</p>
              <p>expected may 2027</p>
              <p>gpa: 3.9</p>
            </section>
            <section id="experience" className="fade-in visible">
              <h3>Work</h3>
              <strong>summer 25</strong>
              <p>software engineering intern @ nyc department of environmental protection </p>
              <div className="indent">
                <p>developed and maintained features for paris (permit and request information system)</p>
              </div>
              <strong>summer 24</strong>
              <p>application development intern @ nyc department of environmental protection</p>
              <div className="indent">
                <p>developed a mold inspection tracking system to help plan, assign, and route inspectors</p>
              </div>
              <strong>other</strong>
              <p>freelance software engineer<br />jan 2020 – present</p>
              <div className="indent">
                <p>designed and developed custom web applications for businesses, focusing on user experience and functionality</p>
              </div>
            </section>
            <section id="projects" className="fade-in visible">
              <h3>Projects</h3>
              <div className="indent">
                <p><strong>Frontier Flight Search</strong> | React, Flask, SQLite | <a href="https://gowilder.net" target="_blank" rel="noopener noreferrer">gowilder.net</a></p>
                <ul>
                  <li>Production SaaS travel search serving 150+ daily active users with subscription-based revenue model</li>
                  <li>Developed web scraping infrastructure collecting real-time flight data from Frontier Airlines with concurrent processing to scrape all pricing and destinations; processed 500k+ requests per day</li>
                  <li>Built responsive React frontend with TypeScript featuring interactive calendar components, geolocation-based airport suggestions, and real-time seat availability tracking</li>
                  <li>Designed scalable backend architecture handling multi-fare comparisons with automated booking link generation and deployed on Vercel with serverless functions</li>
                </ul>
                <p><strong>Baruch Study Room Booker</strong> | Vite, Python, MongoDB</p>
                <ul>
                  <li>Developed a full-stack application used by 100+ Baruch College students to automatically book study rooms, increasing booking success rates by over 70%</li>
                  <li>Implemented a "watch" feature allowing users to monitor for open study rooms and automatically reserve them within seconds of availability, reducing manual checking time by 90%</li>
                  <li>Built the frontend with Vite, achieving sub-second page load times and a modern user experience</li>
                  <li>Designed and implemented a Python backend with a MongoDB database, managing real-time room availability for 20+ study rooms and automating the booking process</li>
                </ul>
                <p><strong>Sports Betting Analytics Platform</strong> | React, Express.js, MongoDB</p>
                <ul>
                  <li>Full-stack sports betting analytics application providing tools to identify profitable betting opportunities</li>
                  <li>Developed infrastructure for collecting live odds from 10+ sportsbooks with sub-1-second latency</li>
                  <li>Built analytics tools detecting low-hold betting markets (&lt;3% profit margins) using expected value calculations</li>
                  <li>Designed scalable backend architecture handling thousands of concurrent odds updates with automated optimal stake calculations and deployed on Vercel with CI/CD pipeline</li>
                </ul>
              </div>
            </section>
            <section id="contact" className="fade-in visible">
              <h3>Contact Information</h3>

              <p className="email">dmitry.baryshnikov [@] baruch [dot] cuny [dot] edu</p>
              <p><strong>External links:</strong></p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/dmitry-baryshnikov-326382156/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/dimaa-b" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

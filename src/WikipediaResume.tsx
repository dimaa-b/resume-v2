import React from "react";
import "./WikipediaResume.css";

export default function WikipediaResume() {
  return (
    <div className="wikipedia-body">
      <nav className="top-nav">
        <img src="https://en.wikipedia.org/static/images/icons/wikipedia.png" alt="Wikipedia Logo" className="logo" />
        <ul className="nav-tabs">
          <li><a href="#" className="active">Article</a></li>
          <li><a href="https://calendly.com/rkanaparti3-gatech/30min" target="_blank">Talk</a></li>
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
              <li><a href="#current">1 Current Work</a></li>
              <li><a href="#education">2 Education</a></li>
              <li><a href="#projects">3 Notable Projects</a></li>
              <li><a href="#experience">4 Professional Experience</a></li>
              <li><a href="#skills">5 Technical Skills</a></li>
              <li><a href="#contact">6 Contact Information</a></li>
              <li><a href="#references">7 References</a></li>
            </ul>
            <h3>Tools</h3>
            <ul>
              <li><a href="https://calendly.com/rkanaparti3-gatech/30min" target="_blank" rel="noopener noreferrer">Schedule Meeting</a></li>
              <li><a href="https://scholar.google.com/citations?user=FZc7hOoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
              <li><a href="https://orion-sms.org/" target="_blank" rel="noopener noreferrer">Orion Project</a></li>
              <li><a href="https://collegedao.io/" target="_blank" rel="noopener noreferrer">CollegeDAO</a></li>
              <li><a href="https://www.midwestblockchain.org/" target="_blank" rel="noopener noreferrer">MBC 2025</a></li>
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
              <img src="/screencapture-rishi-wiki-2025-07-02-22_00_01.png" alt="Dmitry Baryshnikov" />
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
              <div className="info-row">
                <span className="info-label">Occupation</span>
                <span>Software Engineer,<br />Mathematics Student</span>
              </div>
              <div className="info-row">
                <span className="info-label">Known for</span>
                <span>Full-Stack Development,<br />Data Analytics</span>
              </div>
            </div>
            <p><strong>Dmitry Baryshnikov</strong> is an American software engineer and mathematics student at Baruch College, CUNY. He is known for his work in full-stack development, data analytics, and automation solutions.</p>
            <p>Baryshnikov has demonstrated excellence in both academic and professional settings, maintaining a 3.9 GPA while working as an Application Development Intern at the NYC Department of Environmental Protection and building custom solutions for clients as a freelance software engineer.</p>
            <section id="current" className="fade-in visible">
              <h3>Current Work</h3>
              <p>Kanaparti is currently focused on building and shipping technology solutions across multiple domains.</p>
              <p>He is working on creating a second brain for human AI interactions at <a href="https://orion-sms.org/" target="_blank" rel="noopener noreferrer">Orion</a>, a platform designed to enhance human-AI collaboration through advanced interaction paradigms.</p>
              <p>As a leader in research development and liquid fund management at <a href="https://collegedao.io/" target="_blank" rel="noopener noreferrer">CollegeDAO</a>, he focuses on decentralized autonomous organization initiatives within the educational sector.</p>
              <p>Kanaparti is also involved in organizing <a href="https://www.midwestblockchain.org/" target="_blank" rel="noopener noreferrer">MBC 2025</a>, which is positioned to become the largest student blockchain conference, expecting over 700 students from more than 50 universities.</p>
            </section>
            <section id="previous" className="fade-in visible">
              <h3>Previous Work</h3>
              <p>Kanaparti co-founded <a href="https://www.stride-labs.com/" target="_blank" rel="noopener noreferrer">Stride Labs</a>, where he developed innovative solutions for orthotic manufacturing:</p>
              <div className="indent">
                <p>• Created custom orthotic insoles using proprietary AI technology, reducing production time from 4 hours to one-click generation</p>
                <p>• Developed a patent-pending AI model for automated orthotic design</p>
                <p>• Established partnerships with two of the largest orthotic and prosthetic manufacturers in the United States</p>
              </div>
              <p>As Chief Operating Officer at <a href="https://ngresearch.org/" target="_blank" rel="noopener noreferrer">NextGen Research Institute</a>, he worked to democratize research access:</p>
              <div className="indent">
                <p>• Made research opportunities accessible to high school students through affordable mentorship and publishing support</p>
                <p>• Operated a high school research journal</p>
                <p>• Generated five-figure revenue for the organization</p>
                <p>• Processed applications from over 1,000 students</p>
              </div>
            </section>
            <section id="awards" className="fade-in visible">
              <h3>Awards and Recognition</h3>
              <p>Kanaparti has received several notable awards and recognitions:</p>
              <ul className="awards-list">
                <li><strong>AIME Qualifier</strong> (2× recipient) - Achieved top 2% performance in the American Invitational Mathematics Examination</li>
                <li><strong>USACO Platinum Division</strong> - Reached the National Platinum Division, representing 0.0086% of U.S. high school students in competitive programming</li>
                <li><strong>HOSA Competition</strong> - Secured 2nd place in state-level competition</li>
                <li><strong>"Teen Entrepreneur of the Year"</strong> - Recognized for outstanding entrepreneurial achievements</li>
              </ul>
            </section>
            <section id="thinking" className="fade-in visible">
              <h3>Areas of Interest</h3>
              <p>Kanaparti's current research and business interests include:</p>
              <ul className="awards-list">
                <li><strong>AI Agents</strong> - Development and implementation of autonomous artificial intelligence systems</li>
                <li><strong>Web2/Web3 Integration</strong> - The future convergence of traditional and decentralized web technologies</li>
                <li><strong>Biotechnology</strong> - Applications of technology in biological and medical fields</li>
              </ul>
            </section>
            <section id="contact" className="fade-in visible">
              <h3>Contact Information</h3>
              <p>For professional inquiries, Kanaparti can be reached at:</p>
              <p className="email">rkanaparti3 [@] gatech [dot] edu</p>
              <p><strong>External links:</strong></p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/rishi-kanaparti123/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/rishi1123d" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://x.com/0x_rxkvys" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
              </div>
            </section>
            
            <section id="references" className="fade-in visible">
              <h3>References</h3>
              <ol className="references-list">
                <li><a href="https://scholar.google.com/citations?user=FZc7hOoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar Profile</a></li>
                <li><a href="https://orion-sms.org/" target="_blank" rel="noopener noreferrer">Orion Project Official Website</a></li>
                <li><a href="https://collegedao.io/" target="_blank" rel="noopener noreferrer">CollegeDAO Official Website</a></li>
                <li><a href="https://www.midwestblockchain.org/" target="_blank" rel="noopener noreferrer">Midwest Blockchain Conference 2025</a></li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

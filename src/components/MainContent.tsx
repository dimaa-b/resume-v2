import { TitleArea, InfoBox, ResumeSection } from './';
import { SOCIAL_LINKS } from '../utils';
import { useWikiEdit } from '../context';

export default function MainContent() {
  const { currentSection, isComplete } = useWikiEdit();
  const introRevealed = isComplete || currentSection >= 2;

  return (
    <div className="main-content">
      <TitleArea />
      <InfoBox />
      
      <p className={`wiki-intro ${introRevealed ? 'revealed' : 'pending'}`}>
        {introRevealed ? (
          'i build cool stuff'
        ) : (
          <span className="wiki-skeleton-text"></span>
        )}
      </p>

      <ResumeSection id="education" title="Education" revealIndex={3}>
        <strong>baruch college, cuny</strong>
        <p>bachelors in computer science & mathematics</p>
        <p>expected may 2027</p>
        <p>gpa: 3.9</p>
      </ResumeSection>

      <ResumeSection id="leadership" title="Leadership" revealIndex={4}>
        <strong>sept 2025 – present</strong>
        <p>peer mentor @ cuny baruch college</p>
        <div className="indent">
          <p>led freshman seminar for 30+ students and presented to 100+ at convocation while providing 1-on-1 cs mentoring and academic planning</p>
        </div>
        <strong>january 2025 – present</strong>
        <p>tutor @ cuny baruch college</p>
        <div className="indent">
          <p>provide small group and one-on-one tutoring sessions to help students understand course material and develop academic strategies</p>
        </div>
      </ResumeSection>

      <ResumeSection id="experience" title="Work" revealIndex={5}>
        <strong>summer 25</strong>
        <p>software engineering intern @ nyc department of environmental protection </p>
        <div className="indent">
          <p>developed and maintained features for paris (permit and request information system)</p>
        </div>
        <br/>
        <strong>summer 24</strong>
        <p>application development intern @ nyc department of environmental protection</p>
        <div className="indent">
          <p>developed a mold inspection tracking system to help plan, assign, and route inspectors</p>
        </div>
        <br/>
        <strong>2022 – present</strong>
        <p>Founder &amp; Lead Engineer @ Gowild Frontier (SaaS) — <a href="https://gowilder.net" target="_blank" rel="noopener noreferrer">gowilder.net</a></p>
        <div className="indent">
          <p>Built and scaled a production SaaS travel search platform serving 150+ daily users. Implemented real-time flight data collection, subscription billing, and analytics to drive recurring revenue.</p>
        </div>
        <br/>
        <strong>other</strong>
        <p>freelance software engineer<br />jan 2020 – present</p>
        <div className="indent">
          <p>designed and developed custom web applications for businesses, focusing on user experience and functionality</p>
        </div>
      </ResumeSection>

      <ResumeSection id="projects" title="Projects" revealIndex={6}>
        <strong>baruch study room booker</strong>
        <p>vite, python, mongodb</p>
        <div className="indent">
          <p>automated study room booking system used by 100+ students with real-time monitoring and 70% booking success rate improvement</p>
        </div>
        <strong>sports betting analytics platform</strong>
        <p>react, express.js, mongodb</p>
        <div className="indent">
          <p>full-stack analytics platform that collects live odds from 10+ sportsbooks to identify profitable betting opportunities with sub-1-second latency</p>
        </div>
      </ResumeSection>

      <ResumeSection id="contact" title="Contact Information" revealIndex={7}>
        <p className="email">dmitry.baryshnikov [@] baruch [dot] cuny [dot] edu</p>
        <p><strong>External links:</strong></p>
        <div className="social-links">
          {SOCIAL_LINKS.map((link, index) => {
            const linkRevealed = isComplete || currentSection >= 8;
            return (
              <a 
                key={link.platform}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`wiki-social-link ${linkRevealed ? 'revealed' : 'pending'}`}
                style={{ '--link-index': index } as React.CSSProperties}
              >
                {linkRevealed ? link.platform : '████'}
              </a>
            );
          })}
        </div>
      </ResumeSection>

      {isComplete && (
        <div className="wiki-published-notice">
          <span className="wiki-check">✓</span> This article was last edited just now
        </div>
      )}
    </div>
  );
}

import React from "react";
import TitleArea from "./TitleArea";
import InfoBox from "./InfoBox";
import ResumeSection from "./ResumeSection";

export default function MainContent() {
  return (
    <div className="main-content">
      <TitleArea />
      <InfoBox />
      <p>i build cool stuff</p>
      <ResumeSection id="education" title="education">
        <strong>baruch college, cuny</strong>
        <p>bachelors in computer science & mathematics</p>
        <p>expected may 2027</p>
        <p>gpa: 3.9</p>
      </ResumeSection>
      <ResumeSection id="experience" title="Work">
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
      </ResumeSection>
      <ResumeSection id="projects" title="Projects">
        <div className="project-card">
          <div className="project-title">Frontier Flight Search</div>
          <span className="project-tech">React, Flask, SQLite | <a href="https://gowilder.net" target="_blank" rel="noopener noreferrer">gowilder.net</a></span>
          <p>Production SaaS travel search platform for Frontier Airlines data</p>
          <ul>
            <li>Serves 150+ daily active users with subscription-based revenue model</li>
            <li>Web scraping infrastructure collects real-time flight data; processed 500k+ requests per day</li>
            <li>Responsive React frontend with interactive calendar and geolocation-based airport suggestions</li>
            <li>Scalable backend for multi-fare comparisons and automated booking link generation</li>
          </ul>
        </div>
        <div className="project-card">
          <div className="project-title">Baruch Study Room Booker</div>
          <span className="project-tech">Vite, Python, MongoDB</span>
          <p>Automated study room booking system for Baruch College students</p>
          <ul>
            <li>Used by 100+ students, increasing booking success rates by over 70%</li>
            <li>"Watch" feature monitors and reserves open rooms within seconds of availability</li>
            <li>Frontend built with Vite for sub-second load times</li>
            <li>Python backend with MongoDB manages real-time room availability and automation</li>
          </ul>
        </div>
        <div className="project-card">
          <div className="project-title">Sports Betting Analytics Platform</div>
          <span className="project-tech">React, Express.js, MongoDB</span>
          <p>Full-stack analytics platform for identifying profitable sports betting opportunities</p>
          <ul>
            <li>Collects live odds from 10+ sportsbooks with sub-1-second latency</li>
            <li>Analytics tools detect low-hold betting markets (&lt;3% profit margins) using expected value calculations</li>
            <li>Scalable backend handles thousands of concurrent odds updates and automated stake calculations</li>
            <li>Deployed on Vercel with CI/CD pipeline</li>
          </ul>
        </div>
      </ResumeSection>
      <ResumeSection id="contact" title="Contact Information">
        <p className="email">dmitry.baryshnikov [@] baruch [dot] cuny [dot] edu</p>
        <p><strong>External links:</strong></p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/dmitry-baryshnikov-326382156/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/dimaa-b" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </ResumeSection>
    </div>
  );
} 
import React from "react";
import "./WikipediaResume.css";

export default function TitleArea() {
  return (
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
  );
} 
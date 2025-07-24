import React from "react";
import "./WikipediaResume.css";

export default function TopNav() {
  return (
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
  );
} 
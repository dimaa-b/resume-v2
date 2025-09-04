import "../styles/WikipediaResume.css";
import { NAVIGATION_LINKS } from "../utils";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Contents</h3>
      <ul>
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
      <h3>Tools</h3>
      <ul>
      </ul>
    </div>
  );
} 
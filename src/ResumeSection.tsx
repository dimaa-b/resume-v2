import React from "react";

interface ResumeSectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default function ResumeSection({ id, title, className = '', children }: ResumeSectionProps) {
  return (
    <section id={id} className={`fade-in visible ${className}`.trim()}>
      <h3>{title}</h3>
      {children}
    </section>
  );
} 
import { useIntersectionObserver } from "../hooks";
import type { ResumeSectionProps } from "../types";
import { INTERSECTION_OBSERVER_DEFAULTS } from "../utils";

export default function ResumeSection({ id, title, className = '', children }: ResumeSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: INTERSECTION_OBSERVER_DEFAULTS.THRESHOLD,
    rootMargin: INTERSECTION_OBSERVER_DEFAULTS.ROOT_MARGIN
  });

  return (
    <section 
      ref={elementRef}
      id={id} 
      className={`resume-section ${isIntersecting ? 'visible' : 'hidden'} ${className}`.trim()}
    >
      <h3>{title}</h3>
      {children}
    </section>
  );
} 
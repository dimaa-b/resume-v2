// Component prop interfaces
export interface ResumeSectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

export interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

export interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

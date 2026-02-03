import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

interface WikiEditContextType {
  phase: 'loading' | 'editing' | 'saving' | 'published';
  currentSection: number;
  totalSections: number;
  editProgress: number;
  isComplete: boolean;
  triggerNextSection: () => void;
}

const WikiEditContext = createContext<WikiEditContextType | null>(null);

export function useWikiEdit() {
  const context = useContext(WikiEditContext);
  if (!context) {
    throw new Error('useWikiEdit must be used within WikiEditProvider');
  }
  return context;
}

interface WikiEditProviderProps {
  children: ReactNode;
  totalSections?: number;
}

export function WikiEditProvider({ children, totalSections = 6 }: WikiEditProviderProps) {
  const [phase, setPhase] = useState<'loading' | 'editing' | 'saving' | 'published'>('loading');
  const [currentSection, setCurrentSection] = useState(0);
  const [editProgress, setEditProgress] = useState(0);

  // Quick loading then straight to saving
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      // Skip editing, go straight to saving
      setCurrentSection(totalSections); // Reveal all sections immediately
      setPhase('saving');
    }, 400);

    return () => clearTimeout(loadingTimer);
  }, [totalSections]);

  // Fast saving phase
  useEffect(() => {
    if (phase === 'saving') {
      const progress = setInterval(() => {
        setEditProgress(prev => {
          if (prev >= 100) {
            clearInterval(progress);
            setPhase('published');
            return 100;
          }
          return prev + 50; // Faster progress (50% jumps)
        });
      }, 50); // Faster interval

      return () => clearInterval(progress);
    }
  }, [phase]);

  const triggerNextSection = useCallback(() => {
    setCurrentSection(prev => Math.min(prev + 1, totalSections));
  }, [totalSections]);

  return (
    <WikiEditContext.Provider
      value={{
        phase,
        currentSection,
        totalSections,
        editProgress,
        isComplete: phase === 'published',
        triggerNextSection,
      }}
    >
      {children}
    </WikiEditContext.Provider>
  );
}

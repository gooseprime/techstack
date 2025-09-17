import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProgressData } from '../types';

interface ProgressContextType {
  progressData: ProgressData;
  getStackProgress: (stackId: string) => number;
  completeStep: (stackId: string, sectionId: string, stepId: string) => void;
  isStepCompleted: (stackId: string, stepId: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progressData, setProgressData] = useState<ProgressData>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('dev-stack-progress');
    if (saved) {
      try {
        setProgressData(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading progress data:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dev-stack-progress', JSON.stringify(progressData));
  }, [progressData]);

  const getStackProgress = (stackId: string): number => {
    const stackProgress = progressData[stackId];
    if (!stackProgress) return 0;

    // Import techStacks here to avoid circular dependency
    const { techStacks } = require('../data/techStacks');
    const stack = techStacks.find((s: any) => s.id === stackId);
    if (!stack) return 0;

    const totalSteps = stack.sections.reduce((acc: number, section: any) => acc + section.steps.length, 0);
    const completedSteps = stackProgress.completedSteps.length;
    
    return Math.round((completedSteps / totalSteps) * 100);
  };

  const completeStep = (stackId: string, sectionId: string, stepId: string) => {
    setProgressData(prev => {
      const stackProgress = prev[stackId] || {
        completedSections: [],
        completedSteps: [],
        lastUpdated: new Date().toISOString()
      };

      const updatedSteps = stackProgress.completedSteps.includes(stepId)
        ? stackProgress.completedSteps.filter(id => id !== stepId)
        : [...stackProgress.completedSteps, stepId];

      return {
        ...prev,
        [stackId]: {
          ...stackProgress,
          completedSteps: updatedSteps,
          lastUpdated: new Date().toISOString()
        }
      };
    });
  };

  const isStepCompleted = (stackId: string, stepId: string): boolean => {
    const stackProgress = progressData[stackId];
    return stackProgress?.completedSteps.includes(stepId) || false;
  };

  return (
    <ProgressContext.Provider value={{
      progressData,
      getStackProgress,
      completeStep,
      isStepCompleted
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
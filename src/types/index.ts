export interface TechStack {
  id: string;
  name: string;
  description: string;
  type: 'fullstack' | 'frontend' | 'backend' | 'jamstack';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  technologies: string[];
  estimatedTime: string;
  popularity: string;
  rating: number;
  trending?: boolean;
  tags: string[];
  overview: string;
  prerequisites: string[];
  useCases: string[];
  pros: string[];
  cons: string[];
  sections: TutorialSection[];
}

export interface TutorialSection {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  steps: TutorialStep[];
}

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  language?: string;
  completed?: boolean;
}

export interface ProgressData {
  [stackId: string]: {
    completedSections: string[];
    completedSteps: string[];
    lastUpdated: string;
  };
}
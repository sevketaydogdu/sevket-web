export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'mobile' | 'design' | 'tools';
}

export const skills: Skill[] = [
  // Mobile
  { name: 'React Native', level: 95, category: 'mobile' },
  { name: 'Expo', level: 95, category: 'mobile' },

  // Frontend
  { name: 'React.js', level: 80, category: 'frontend' },
  { name: 'Next.js', level: 70, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },

  // Design
  { name: 'UI/UX Design', level: 80, category: 'design' },
  { name: 'Figma', level: 80, category: 'design' },

  // Tools
  { name: 'Git', level: 80, category: 'tools' },
  { name: 'CI/CD', level: 65, category: 'tools' },
  { name: 'Testing', level: 60, category: 'tools' },
];

export type SkillCategory = {
  id: string
  name: string
  icon: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    id: 'design',
    name: 'Design Thinking',
    icon: 'Layers',
    skills: [
      'Systems Thinking',
      'Spatial Reasoning',
      'Visual Communication',
      'Problem Framing',
      'Iterative Design',
      'Technical Documentation',
    ],
  },
  {
    id: 'business',
    name: 'Business Acumen',
    icon: 'TrendingUp',
    skills: [
      'Brand Strategy',
      'Market Analysis',
      'Strategic Planning',
      'Stakeholder Management',
      'Project Management',
      'Growth Thinking',
    ],
  },
  {
    id: 'leadership',
    name: 'Leadership',
    icon: 'Users',
    skills: [
      'Team Building',
      'Cross-functional Coordination',
      'Communication',
      'Decision Making',
      'Conflict Resolution',
      'Execution Under Pressure',
    ],
  },
]

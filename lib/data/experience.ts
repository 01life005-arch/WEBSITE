export type ExperienceItem = {
  id: string
  role: string
  organization: string
  period: string
  description: string
  tags: string[]
  type: 'work' | 'project' | 'event' | 'achievement'
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Architecture Intern',
    organization: 'Studio 8 Design',
    period: '2022',
    description: 'Collaborated on schematic design and documentation for civic projects, helping the team translate design intent into buildable drawings.',
    tags: ['Systems Thinking', 'Technical Rigor'],
    type: 'work',
  },
  {
    id: 'exp2',
    role: 'Event Coordinator',
    organization: 'Campus Leadership Forum',
    period: '2021–2023',
    description: 'Organized stakeholder-facing events with clear operational frameworks, improving participant experience while keeping delivery timelines intact.',
    tags: ['Execution', 'Stakeholder Management'],
    type: 'event',
  },
]
export type TimelineItem = {
  id: string
  year: string
  title: string
  subtitle: string
  body: string
  tags: string[]
  type: 'education' | 'work' | 'leadership' | 'event'
}

export const timelineData: TimelineItem[] = [
  {
    id: 'arch',
    year: '2018–2023',
    title: 'Bachelor of Architecture',
    subtitle: 'School of Planning and Architecture',
    body: 'Five years spent learning to translate abstract ideas into concrete outcomes. Architecture sharpened systems thinking, precise execution, and a discipline for clarity under constraint.',
    tags: ['Systems Thinking', 'Design Logic', 'Technical Rigor'],
    type: 'education',
  },
  {
    id: 'events',
    year: '2020–2023',
    title: 'Event Organizer & Coordinator',
    subtitle: 'Campus events and academic forums',
    body: 'Managed multi-stakeholder programs from planning through delivery, aligning teams, vendors, and schedules to create focused, memorable experiences.',
    tags: ['Stakeholder Alignment', 'Execution', 'Communication'],
    type: 'event',
  },
  {
    id: 'leadership',
    year: '2021–2023',
    title: 'Student Team Lead',
    subtitle: 'Academic and extracurricular leadership roles',
    body: 'Led cross-functional peers through complex projects, learning that the most important work is often the work of helping others move clearly and confidently.',
    tags: ['Leadership', 'Collaboration', 'Empathy'],
    type: 'leadership',
  },
  {
    id: 'mba',
    year: '2025–Present',
    title: 'MBA Candidate',
    subtitle: 'Xavier Institute of Management, Bhubaneswar',
    body: 'At XIMB, architecture’s attention to detail meets business frameworks. I am building a more strategic lens on brand, growth, and cross-disciplinary leadership.',
    tags: ['Strategy', 'Business', 'Leadership'],
    type: 'education',
  },
]

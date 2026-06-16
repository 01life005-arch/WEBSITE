import { SkillChip } from './SkillChip'
import { ExperienceItem } from '@/lib/data/experience'

interface ExperienceCardProps {
  experience: ExperienceItem
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
            {experience.role}
          </p>
          <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">
            {experience.organization}
          </p>
        </div>
        <time className="text-sm text-[var(--text-muted)]">{experience.period}</time>
        <p className="text-base leading-7 text-[var(--text-primary)]">{experience.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <SkillChip key={tag} label={tag} />
          ))}
        </div>
      </div>
    </article>
  )
}

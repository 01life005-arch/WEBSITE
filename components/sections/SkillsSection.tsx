import * as Icons from 'lucide-react'
import { ChapterBreak } from '@/components/ui/ChapterBreak'
import { SkillChip } from '@/components/ui/SkillChip'
import { skillsData } from '@/lib/data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-[var(--bg-base)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ChapterBreak ghost="SKILLS" title="Skills" subtitle="Three categories that reflect the combined rigour of design, business, and leadership." />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {skillsData.map((category) => {
            const Icon = (Icons as Record<string, any>)[category.icon] ?? Icons.CreditCard
            return (
              <div key={category.id} className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] p-8">
                <div className="flex items-center gap-3 text-[var(--accent)]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-light)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">{category.name}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <SkillChip key={skill} label={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

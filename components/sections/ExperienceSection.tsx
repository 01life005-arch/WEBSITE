import { ChapterBreak } from '@/components/ui/ChapterBreak'
import { ExperienceCard } from '@/components/ui/ExperienceCard'
import { experienceData } from '@/lib/data/experience'

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-[var(--bg-subtle)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ChapterBreak ghost="EXPERIENCE" title="Experience" subtitle="Concrete roles and projects that demonstrate the work behind the story." />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {experienceData.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

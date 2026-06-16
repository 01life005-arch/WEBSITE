import { ChapterBreak } from '@/components/ui/ChapterBreak'
import { ValueCard } from '@/components/ui/ValueCard'
import { valuesData } from '@/lib/data/values'

export default function DrivesMeSection() {
  return (
    <section id="drives-me" aria-labelledby="drives-me-heading" className="bg-[var(--bg-base)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ChapterBreak ghost="DRIVES" title="What drives me" subtitle="Values that guide how I work, lead, and learn." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {valuesData.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { ChapterBreak } from '@/components/ui/ChapterBreak'
import { TimelineNode } from '@/components/ui/TimelineNode'
import { timelineData } from '@/lib/data/timeline'

export default function JourneySection() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="relative bg-[var(--bg-base)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ChapterBreak ghost="JOURNEY" title="My journey" subtitle="A sequence of experiences that shaped the transition from architecture into business." />
        <div role="list" className="mt-14 space-y-8">
          {timelineData.map((item, index) => (
            <TimelineNode key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

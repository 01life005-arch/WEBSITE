import { ChapterBreak } from '@/components/ui/ChapterBreak'
import { visionData } from '@/lib/data/vision'

export default function VisionSection() {
  return (
    <section id="vision" aria-labelledby="vision-heading" className="bg-[var(--bg-subtle)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ChapterBreak ghost="VISION" title="Future direction" subtitle="How I see the next phase of my work and leadership." />
        <div className="mt-14 space-y-10">
          {visionData.map((item) => (
            <div key={item.id} className="space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{item.label}</p>
              <h3 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">{item.title}</h3>
              <p className="text-base leading-8 text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

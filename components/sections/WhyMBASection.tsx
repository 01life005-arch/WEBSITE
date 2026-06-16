import { ChapterBreak } from '@/components/ui/ChapterBreak'
import { PullQuote } from '@/components/ui/PullQuote'

export default function WhyMBASection() {
  return (
    <section id="why-mba" aria-labelledby="why-mba-heading" className="bg-[var(--bg-subtle)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ChapterBreak ghost="WHY" title="Why MBA" subtitle="The decision that turned one discipline into a broader strategic practice." />
        <div className="mt-12 space-y-8 text-[var(--text-primary)]">
          <p className="text-base leading-8 text-[var(--text-secondary)]">
            Architecture taught me to see problems as systems: how a roof, a room, and a city block influence one another. The precision of that practice also highlighted a gap — the moment the design stopped at a drawing and the business around it kept moving.
          </p>
          <PullQuote quote="I did not abandon architecture. I evolved beyond it." />
          <p className="text-base leading-8 text-[var(--text-secondary)]">
            XIMB offered the framework to translate those skills into strategy, brand, and organizational clarity. It is where structured analysis met the instinct to make things feel coherent and intentional.
          </p>
          <p className="text-base leading-8 text-[var(--text-secondary)]">
            The next chapter is about shaping decisions that are as disciplined as architecture and as forward-looking as business leadership.
          </p>
        </div>
      </div>
    </section>
  )
}

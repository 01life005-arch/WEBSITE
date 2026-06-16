import { cn } from '@/lib/utils/cn'

interface ChapterBreakProps {
  ghost: string
  title: string
  subtitle?: string
}

export function ChapterBreak({ ghost, title, subtitle }: ChapterBreakProps) {
  return (
    <div className="relative overflow-hidden py-12">
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 flex items-center justify-center text-[clamp(4.5rem,10vw,8rem)] font-display font-normal uppercase tracking-[0.02em] opacity-10',
          'text-[var(--chapter-ghost)]'
        )}
      >
        {ghost}
      </span>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-2xl mx-auto text-base leading-7 text-[var(--text-secondary)]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  )
}

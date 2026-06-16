'use client'

import { useMemo } from 'react'
import { useInView } from '@/lib/hooks/useInView'
import { SkillChip } from './SkillChip'
import { TimelineItem } from '@/lib/data/timeline'

interface TimelineNodeProps {
  item: TimelineItem
  index: number
}

export function TimelineNode({ item, index }: TimelineNodeProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 })
  const delay = useMemo(() => `${index * 80}ms`, [index])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-sm transition-all duration-500 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      role="listitem"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
          <span className="inline-flex h-3 w-3 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          <time>{item.year}</time>
        </div>
        <div>
          <p className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">{item.title}</p>
          <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">{item.subtitle}</p>
        </div>
        <p className="text-base leading-7 text-[var(--text-primary)]">{item.body}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <SkillChip key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

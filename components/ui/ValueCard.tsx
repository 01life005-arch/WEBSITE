import { ValueItem } from '@/lib/data/values'
import * as Icons from 'lucide-react'

interface ValueCardProps {
  value: ValueItem
}

export function ValueCard({ value }: ValueCardProps) {
  const Icon = (Icons as Record<string, any>)[value.icon] ?? Icons.Circle

  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 transition-all duration-300 hover:bg-[var(--bg-subtle)]">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-light)] text-[var(--accent)]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--text-primary)]">{value.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{value.description}</p>
    </div>
  )
}

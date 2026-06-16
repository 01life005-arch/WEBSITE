import { cn } from '@/lib/utils/cn'

interface SkillChipProps {
  label: string
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
        'border-[var(--border)] bg-transparent text-[var(--text-secondary)]',
        'hover:border-[var(--accent)] hover:bg-[var(--accent-light)] hover:text-[var(--text-primary)]'
      )}
    >
      {label}
    </span>
  )
}

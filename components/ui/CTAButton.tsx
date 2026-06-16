import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function CTAButton({ href, children, variant = 'primary' }: CTAButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--accent)] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[color:var(--accent)_/_0.9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]'
      : 'border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  )
}

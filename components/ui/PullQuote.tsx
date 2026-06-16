interface PullQuoteProps {
  quote: string
}

export function PullQuote({ quote }: PullQuoteProps) {
  return (
    <blockquote className="rounded-3xl border-l-4 border-[var(--accent)] bg-[var(--bg-subtle)] px-6 py-5 text-[var(--text-primary)] sm:px-8">
      <p className="text-lg leading-8">“{quote}”</p>
    </blockquote>
  )
}

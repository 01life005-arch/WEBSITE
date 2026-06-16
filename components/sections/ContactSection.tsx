import { CTAButton } from '@/components/ui/CTAButton'
import { ChapterBreak } from '@/components/ui/ChapterBreak'

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-[var(--bg-base)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ChapterBreak ghost="CONTACT" title="Contact" subtitle="A low-friction invitation for the right conversations." />
        <div className="mt-12 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Let's connect</p>
          <h2 id="contact-heading" className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            If you think we should talk, I’d be glad to hear from you.
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
            I am selective about the work I take on. If your opportunity needs thoughtful strategy, clear storytelling, and disciplined execution, please get in touch.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href="mailto:hello@example.com">Email me →</CTAButton>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] bg-transparent px-6 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--bg-subtle)]"
              aria-label="Open LinkedIn profile"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

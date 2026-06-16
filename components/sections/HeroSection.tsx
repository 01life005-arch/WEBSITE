'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CTAButton } from '@/components/ui/CTAButton'
import { ProfileImage } from '@/components/ui/ProfileImage'

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const motionProps = shouldReduceMotion
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative overflow-hidden bg-[var(--bg-base)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-24 lg:px-8">
        <motion.div
          {...motionProps}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">Personal brand</p>
          <h1 id="hero-heading" className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-6xl">
            Architect turned strategist, building clarity for the next chapter.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            I bridge architecture and business through precise storytelling, systems thinking, and a commitment to outcomes that feel both elegant and usable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-2 text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">
              Architect
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-2 text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">
              Strategist
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-2 text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">
              MBA Candidate
            </span>
          </div>
          <div className="mt-10">
            <CTAButton href="#journey">See my journey →</CTAButton>
          </div>
        </motion.div>
        <div className="flex-1">
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}

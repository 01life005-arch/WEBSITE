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
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">MBA-BM at XIMB | Architect </p>
          <h1 id="hero-heading" className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-6xl">
            MBA Candidate at XIMB, combining leadership, strategy, and execution.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            Currently pursuing MBA-BM at Xavier Institute of Management, Bhubaneswar. With professional experience across architecture, project execution, and stakeholder management, I bring a blend of analytical thinking, leadership, and problem-solving to business challenges. Beyond academics, I actively engage in sports, event management, marketing initiatives, and community-building activities.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-2 text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">
              MBA-BM
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-2 text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">
              Architect
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-2 text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">
              Project Management
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

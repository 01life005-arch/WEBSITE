'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'

interface MobileMenuProps {
  open: boolean
  onToggle: () => void
  activeSection: string
}

const items = [
  { id: 'hero', label: 'Home' },
  { id: 'journey', label: 'Journey' },
  { id: 'why-mba', label: 'Why MBA' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'drives-me', label: 'Drives' },
  { id: 'vision', label: 'Vision' },
  { id: 'contact', label: 'Contact' },
]

export function MobileMenu({ open, onToggle, activeSection }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onToggle()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onToggle])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={onToggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition hover:bg-[var(--bg-subtle)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>
      {open ? (
        <div className="fixed inset-0 z-40 bg-[rgba(15,15,14,0.88)] backdrop-blur-sm px-6 py-8">
          <nav aria-label="Mobile navigation" className="flex h-full flex-col justify-center gap-6 text-center text-xl font-semibold text-white">
            {items.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={onToggle}
                className={open && activeSection === item.id ? 'text-[var(--accent)]' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  )
}

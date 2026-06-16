'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'
import { useActiveSection } from '@/lib/hooks/useActiveSection'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'journey', label: 'Journey' },
  { id: 'why-mba', label: 'Why MBA' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'drives-me', label: 'Drives' },
  { id: 'vision', label: 'Vision' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const activeSection = useActiveSection()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 80)
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[var(--border)] bg-[rgba(247,247,245,0.92)] backdrop-blur-md dark:bg-[rgba(15,15,14,0.88)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          A.B.
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition ${
                activeSection === link.id
                  ? 'text-[var(--accent)] underline decoration-[var(--accent)] underline-offset-8'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MobileMenu open={menuOpen} onToggle={() => setMenuOpen((value) => !value)} activeSection={activeSection} />
        </div>
      </div>
    </header>
  )
}

'use client'

import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'journey', 'why-mba', 'skills', 'experience', 'drives-me', 'vision', 'contact']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observers = SECTION_IDS.map((id) => {
      const element = document.getElementById(id)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
      )

      observer.observe(element)
      return observer
    })

    return () => observers.forEach((observer) => observer?.disconnect())
  }, [])

  return activeSection
}

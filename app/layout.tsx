import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'A.B. — Architect Turned Strategist | XIMB MBA',
  description:
    'Personal brand site of an architect turned MBA candidate. Narrative storytelling that connects design, leadership, and strategy.',
  keywords: ['MBA', 'XIMB', 'Brand Strategy', 'Architecture', 'Leadership'],
  authors: [{ name: 'A.B.' }],
  openGraph: {
    title: 'A.B. — From Architecture to Strategy',
    description: 'A personal brand site built around clarity, intentionality, and strategic growth.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A.B. — From Architecture to Strategy',
    description: 'Architecture. Leadership. MBA. A journey converging.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'A.B.',
  jobTitle: 'MBA Candidate',
  alumniOf: 'Xavier Institute of Management Bhubaneswar',
  url: 'https://example.com',
  sameAs: ['https://linkedin.com/in/yourprofile'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--bg-base)] font-sans text-[var(--text-primary)]">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}

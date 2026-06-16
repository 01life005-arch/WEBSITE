import ContactSection from '@/components/sections/ContactSection'
import DrivesMeSection from '@/components/sections/DrivesMeSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import HeroSection from '@/components/sections/HeroSection'
import JourneySection from '@/components/sections/JourneySection'
import SkillsSection from '@/components/sections/SkillsSection'
import VisionSection from '@/components/sections/VisionSection'
import WhyMBASection from '@/components/sections/WhyMBASection'

export default function Home() {
  return (
    <main className="pt-24">
      <HeroSection />
      <JourneySection />
      <WhyMBASection />
      <SkillsSection />
      <ExperienceSection />
      <DrivesMeSection />
      <VisionSection />
      <ContactSection />
    </main>
  )
}

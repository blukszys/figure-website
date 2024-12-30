import { HeroSection } from '@/components/hero-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsSection } from '@/components/skills-section'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
    </div>
  )
}


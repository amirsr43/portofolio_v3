import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import MobileTabBar from './components/MobileTabBar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import ContactSection from './sections/ContactSection'

const sections = ['home', 'about', 'projects', 'skills', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observers = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="relative bg-[#f8fafc] min-h-screen selection:bg-blue-600/10 selection:text-blue-600 overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 noise-overlay opacity-15" />

      {/* Desktop Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main className="pb-28 md:pb-0">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Mobile Bottom Tab Bar */}
      <MobileTabBar activeSection={activeSection} />
    </div>
  )
}

export default App

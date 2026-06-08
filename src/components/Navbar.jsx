import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/85 backdrop-blur-md border-b border-slate-250/50 shadow-sm' 
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-base">B</span>
            </div>
            <span className="text-slate-900 font-extrabold text-lg sm:text-xl font-display tracking-tight">
              Bochi<span className="text-blue-600">blox</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 bg-white/80 border border-slate-200/80 px-6 py-2 rounded-full shadow-sm shadow-slate-100/50 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold tracking-wide transition-colors relative py-1 uppercase ${
                  activeSection === link.label.toLowerCase()
                    ? 'text-blue-600'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
                {activeSection === link.label.toLowerCase() && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-all shadow-md shadow-blue-600/10 hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Get in touch
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-sm`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-5 shadow-2xl shadow-slate-200/50"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold px-4 py-2.5 rounded-xl transition-all ${
                    activeSection === link.label.toLowerCase()
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

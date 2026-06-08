import { motion } from 'framer-motion'

const tabs = [
  { id: 'home', label: 'Home', href: '#home', faIcon: 'fa-house' },
  { id: 'about', label: 'About', href: '#about', faIcon: 'fa-user' },
  { id: 'projects', label: 'Projects', href: '#projects', faIcon: 'fa-laptop-code' },
  { id: 'skills', label: 'Skills', href: '#skills', faIcon: 'fa-gears' },
  { id: 'contact', label: 'Contact', href: '#contact', faIcon: 'fa-envelope' },
]

export default function MobileTabBar({ activeSection }) {
  return (
    <div className="fixed bottom-5 left-4 right-4 z-50 md:hidden">
      <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl px-2 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const isActive = activeSection === tab.id
            return (
              <a
                key={tab.id}
                href={tab.href}
                className="relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveIndicator"
                    className="absolute inset-0 bg-blue-600/10 border border-blue-500/10 rounded-xl"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                
                <i className={`fa-solid ${tab.faIcon} text-base mb-0.5 transition-colors duration-200 ${
                  isActive ? 'text-blue-600' : 'text-slate-400'
                }`}></i>
                
                <span className={`text-[9px] font-semibold tracking-wider transition-colors duration-200 uppercase ${
                  isActive ? 'text-blue-600 font-bold' : 'text-slate-400'
                }`}>
                  {tab.label}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

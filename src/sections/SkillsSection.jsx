import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend Development',
    faIcon: 'fa-code',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'TailwindCSS', level: 95 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    category: 'Backend & Services',
    faIcon: 'fa-server',
    skills: [
      { name: 'Node.js / Express', level: 78 },
      { name: 'PostgreSQL', level: 72 },
      { name: 'MongoDB', level: 75 },
      { name: 'REST APIs & GraphQL', level: 88 },
    ],
  },
  {
    category: 'Design & Tools',
    faIcon: 'fa-compass-drafting',
    skills: [
      { name: 'Figma Prototyping', level: 90 },
      { name: 'UI/UX Principles', level: 88 },
      { name: 'Design Systems', level: 82 },
      { name: 'Git & Agile CI/CD', level: 85 },
    ],
  },
]

const techIcons = [
  { name: 'React', faIcon: 'fa-brands fa-react' },
  { name: 'JavaScript', faIcon: 'fa-brands fa-js' },
  { name: 'Node.js', faIcon: 'fa-brands fa-node-js' },
  { name: 'Git', faIcon: 'fa-brands fa-git-alt' },
  { name: 'Docker', faIcon: 'fa-brands fa-docker' },
  { name: 'Figma', faIcon: 'fa-brands fa-figma' },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-20 bg-[#f8fafc] relative overflow-hidden" ref={ref}>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12">
          <span className="text-blue-600 text-xs font-bold font-mono tracking-widest uppercase block mb-2">
            TECH EXPERTISE & STACK
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Capabilities</span>
          </h2>
        </div>

        {/* Tech Badges Horizontal Showcase */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-slate-200 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 transition-colors cursor-default shadow-sm"
            >
              <i className={`${tech.faIcon} text-lg text-blue-600`}></i>
              <span className="text-xs sm:text-sm font-bold text-slate-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Skill Groups Progress Bars */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 hover:border-blue-400/40 transition-colors shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-lg">
                  <i className={`fa-solid ${group.faIcon}`}></i>
                </div>
                <h3 className="text-slate-800 font-bold text-sm sm:text-base tracking-tight">{group.category}</h3>
              </div>

              {/* Progress bars list */}
              <div className="flex flex-col gap-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-slate-600 text-xs font-semibold">{skill.name}</span>
                      <span className="text-blue-600 text-xs font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Track */}
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/40">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-450 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: gi * 0.1 + si * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

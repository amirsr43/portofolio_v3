import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projectsList = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Development',
    description: 'A robust online shopping application with real-time stock sync and payment integrations.',
    tags: ['React', 'NodeJS', 'PostgreSQL', 'TailwindCSS'],
    link: '#',
    github: '#',
    faIcon: 'fa-cart-shopping'
  },
  {
    id: 2,
    title: 'Custom Dashboard',
    category: 'UI/UX',
    description: 'A customizable analytics panel showing operational stats with deep filter controls.',
    tags: ['Next.js', 'Framer Motion', 'ChartJS'],
    link: '#',
    github: '#',
    faIcon: 'fa-chart-line'
  },
  {
    id: 3,
    title: 'Collaborative Workspace',
    category: 'Design System',
    description: 'A clean Kanban workspace with team alignment, notifications, and board views.',
    tags: ['React', 'Framer Motion', 'MongoDB'],
    link: '#',
    github: '#',
    faIcon: 'fa-list-check'
  },
  {
    id: 4,
    title: 'Premium SaaS Landing',
    category: 'Development',
    description: 'A landing page focused on high speed, custom animations, and interactive forms.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    link: '#',
    github: '#',
    faIcon: 'fa-rocket'
  },
  {
    id: 5,
    title: 'Healthcare App Design',
    category: 'UI/UX',
    description: 'Clean medical consultations client portal design featuring dashboard widgets.',
    tags: ['Figma', 'UI/UX Research'],
    link: '#',
    github: '#',
    faIcon: 'fa-heart-pulse'
  },
  {
    id: 6,
    title: 'API Microservices Gateway',
    category: 'Design System',
    description: 'Optimized developer portal layout showing server status, metrics, and API routes.',
    tags: ['Node.js', 'Swagger', 'Docker'],
    link: '#',
    github: '#',
    faIcon: 'fa-network-wired'
  }
]

const categories = ['All', 'Development', 'UI/UX', 'Design System']

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filteredProjects = selectedCategory === 'All' 
    ? projectsList 
    : projectsList.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-[#f8fafc]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <span className="text-blue-600 text-xs font-bold font-mono tracking-widest uppercase block mb-2">
              MY DIGITAL WORKS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Projects</span>
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-sm">
            Check out some of my recent web builds and layouts crafted for optimal speed and visual aesthetics.
          </p>
        </div>

        {/* Categories Selector */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/10'
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-350'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  {/* Custom Icon Box */}
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-lg group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <i className={`fa-solid ${project.faIcon}`}></i>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-1.5">
                    <a 
                      href={project.github} 
                      className="w-8 h-8 rounded-full border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all bg-slate-50"
                      title="View Source Code"
                    >
                      <i className="fa-brands fa-github text-xs"></i>
                    </a>
                    <a 
                      href={project.link} 
                      className="w-8 h-8 rounded-full border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all bg-slate-50"
                      title="Live Demo"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                    </a>
                  </div>
                </div>

                {/* Tag/Category */}
                <span className="text-[9px] font-bold font-mono text-blue-600 uppercase tracking-widest">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-slate-800 text-base sm:text-lg font-bold mt-1.5 mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs leading-relaxed mb-5 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

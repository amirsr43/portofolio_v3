import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const brands = [
  { name: 'Supa Blox', icon: 'fa-solid fa-circle-notch' },
  { name: 'Hype Blox', icon: 'fa-solid fa-hourglass-half' },
  { name: 'Frame Blox', icon: 'fa-solid fa-square' },
  { name: 'Ultra Blox', icon: 'fa-solid fa-circle' },
  { name: 'Quantum Labs', icon: 'fa-solid fa-atom' },
  { name: 'Pixel Craft', icon: 'fa-solid fa-cubes' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden" ref={ref}>
      
      {/* Brands Logo Bar - Marquee Effect (Light Theme) */}
      <div className="border-y border-slate-200 py-6 bg-white/60 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-slate-400 text-[10px] font-bold font-mono tracking-widest uppercase mb-4 text-center">
            TRUSTED BY BRANDS I'VE HELPED SHAPE
          </p>
          
          <div className="relative w-full overflow-hidden flex whitespace-nowrap">
            <div className="flex gap-12 sm:gap-16 animate-marquee py-1">
              {[...brands, ...brands].map((brand, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wide text-xs sm:text-sm hover:text-blue-600 transition-colors"
                >
                  <i className={`${brand.icon} text-sm text-slate-400`}></i>
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Section Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Info Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 md:mb-20">
          <div className="lg:col-span-6">
            <span className="text-blue-600 text-xs font-bold font-mono tracking-widest uppercase block mb-2">
              BEHIND THE DESIGNS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
              Shaping Experiences<br className="hidden sm:block" />
              That Make Life Simpler
            </h2>
          </div>
          
          <div className="lg:col-span-6 lg:pl-6 flex flex-col items-start gap-4 sm:gap-5">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-semibold">
              I'm a designer & developer focused on building clean, intuitive interfaces that solve real-world problems.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Every detail matters. By combining functional design principles with modern web architectures, I build websites and web apps that perform smoothly, load instantly, and feel incredible to interact with.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-bold text-xs tracking-wider uppercase mt-2 group"
            >
              LET'S TALK
              <i className="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>

        {/* 3 Premium Image Cards Grid (Matching reference layout) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
              <img 
                src="/project_jacket.png" 
                alt="Product Mockup" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[9px] font-bold font-mono text-blue-400 uppercase tracking-widest">FASHION PORTAL</span>
              <h3 className="text-white font-bold text-base sm:text-lg mt-0.5">Supa Fashion</h3>
              <p className="text-slate-300 text-xs">E-Commerce Landing Page</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
              <img 
                src="/project_headphones.png" 
                alt="Audio Web Concept" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[9px] font-bold font-mono text-blue-400 uppercase tracking-widest">AUDIO HUB</span>
              <h3 className="text-white font-bold text-base sm:text-lg mt-0.5">Pulse Audio</h3>
              <p className="text-slate-300 text-xs">Custom Product Showcase</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 sm:col-span-2 md:col-span-1"
          >
            <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
              <img 
                src="/project_bottle.png" 
                alt="Cosmetics Concept" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[9px] font-bold font-mono text-blue-400 uppercase tracking-widest">SKINCARE CARE</span>
              <h3 className="text-white font-bold text-base sm:text-lg mt-0.5">Aura Skin</h3>
              <p className="text-slate-300 text-xs">Sleek Cosmetic Portal</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

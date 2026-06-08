import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 sm:pt-28 pb-10 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Premium Hero Card */}
      <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-br from-white via-[#fafbfe] to-[#f3f6fc] border border-slate-200 p-6 sm:p-10 md:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
        
        {/* Soft colorful glowing backgrounds */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 to-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-blue-300/10 to-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Decorative Grid Patterns (Behind content) */}
        <div className="absolute inset-0 opacity-[0.25] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />

        {/* Top Status Bar */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span className="text-slate-500 text-xs font-bold tracking-widest uppercase font-mono">Located in Jakarta, ID</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-blue-600/5 border border-blue-500/20 px-4 py-2 rounded-full shadow-sm shadow-blue-500/5"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
            <span className="text-blue-700 text-xs font-extrabold font-mono uppercase tracking-wider">Available for Work</span>
          </motion.div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Panel: Big Titles & Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-blue-600 text-sm sm:text-base font-extrabold uppercase tracking-widest mb-3 font-mono"
              >
                Creative Developer & Designer
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-slate-900 mb-6 sm:mb-8"
              >
                Designing for<br />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-650 via-blue-500 to-indigo-650">
                  Experiences
                  {/* Styled Underline Highlight */}
                  <span className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-30" />
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-8"
              >
                I partner with progressive brands to craft clean, fast-loading interfaces. Focused on bringing logic and aesthetics together.
              </motion.p>
            </div>

            {/* Specialties Interactive Cards Grid */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { num: '01', title: 'Brand Strategy', icon: 'fa-chess-knight' },
                { num: '02', title: 'UI/UX Design', icon: 'fa-pen-ruler' },
                { num: '03', title: 'Frontend Dev', icon: 'fa-code' },
                { num: '04', title: 'Interaction', icon: 'fa-wand-magic-sparkles' }
              ].map((spec, idx) => (
                <motion.div 
                  key={spec.num}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
                  className="group cursor-pointer bg-white hover:bg-blue-50/30 border border-slate-200/80 hover:border-blue-500/30 rounded-2xl p-4 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <i className={`fa-solid ${spec.icon}`}></i>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold font-mono text-slate-400 block">#{spec.num}</span>
                      <p className="text-slate-800 text-xs sm:text-sm font-bold group-hover:text-blue-600 transition-colors">
                        {spec.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Panel: Layered Visual Cards */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-8 relative mt-10 lg:mt-0">
            <div className="relative">
              
              {/* Background decorative dots */}
              <div className="absolute -top-6 -left-6 w-24 h-24 opacity-30 pointer-events-none z-0" style={{
                backgroundImage: `radial-gradient(circle, #3b82f6 2px, transparent 2px)`,
                backgroundSize: '12px 12px'
              }} />

              {/* Main Portrait Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-10 w-full max-w-[280px] sm:max-w-[310px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl group cursor-pointer"
              >
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-85 z-10" />
                
                <img 
                  src="/hero_portrait.jpg" 
                  alt="Portrait Image" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating identity bar on portrait bottom */}
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <span className="text-[9px] font-bold font-mono text-blue-400 uppercase tracking-widest">CREATIVE SOUL</span>
                  <h3 className="text-white text-base font-extrabold mt-0.5">Ryo Y.</h3>
                  <p className="text-slate-300 text-xs font-semibold">Designer & Code specialist</p>
                </div>
              </motion.div>

              {/* Floating Badge Top Right */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-6 z-20 bg-white border border-slate-200/80 rounded-2xl px-3.5 py-2 shadow-lg flex items-center gap-2.5"
              >
                <div className="w-6 h-6 rounded-lg bg-yellow-50 border border-yellow-200 flex items-center justify-center text-yellow-500 text-xs">
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-800">UI Specialist</p>
                  <p className="text-[8px] font-semibold text-slate-400">User Focused</p>
                </div>
              </motion.div>

              {/* Floating Badge Bottom Left */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-6 z-20 bg-white border border-slate-200/80 rounded-2xl px-3.5 py-2 shadow-lg flex items-center gap-2.5"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 text-xs">
                  <i className="fa-solid fa-hourglass-start"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-800">Experience</p>
                  <p className="text-[8px] font-semibold text-slate-400">3+ Years Exp</p>
                </div>
              </motion.div>

            </div>

            {/* Testimonial Quote & CTAs */}
            <div className="w-full max-w-[280px] sm:max-w-[310px] text-left lg:text-right">
              <h4 className="text-slate-800 font-extrabold text-base sm:text-lg leading-snug mb-2 font-display">
                "Great design should feel invisible."
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                I design clean interfaces and turn them into modular React structures that provide flawless interactions.
              </p>
              
              {/* CTAs & Social Icons Row */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 mt-6">
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-2.5">
                  <a 
                    href="#projects" 
                    className="px-4 py-2.5 rounded-full border border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-bold text-xs tracking-wider transition-all"
                  >
                    VIEW PROJECTS
                  </a>
                  <a 
                    href="#contact" 
                    className="px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wider transition-all shadow-md shadow-blue-500/10"
                  >
                    GET IN TOUCH
                  </a>
                </div>

                {/* Social Icons Link Bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest mr-1">Social:</span>
                  {[
                    { icon: 'fa-github', link: 'https://github.com' },
                    { icon: 'fa-linkedin-in', link: 'https://linkedin.com' },
                    { icon: 'fa-x-twitter', link: 'https://twitter.com' }
                  ].map((social, sIdx) => (
                    <a 
                      key={sIdx}
                      href={social.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-7 h-7 rounded-lg border border-slate-200 hover:border-blue-500 text-slate-400 hover:text-blue-600 flex items-center justify-center bg-white transition-all hover:-translate-y-0.5"
                    >
                      <i className={`fa-brands ${social.icon} text-xs`}></i>
                    </a>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

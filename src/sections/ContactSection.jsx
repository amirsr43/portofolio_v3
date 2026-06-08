import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSent(true)
    setTimeout(() => setIsSent(false), 3500)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-[#f8fafc] relative overflow-hidden" ref={ref}>
      
      {/* Background radial light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12 md:mb-16">
          <span className="text-blue-600 text-xs font-bold font-mono tracking-widest uppercase block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Work Together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Panel: Contact info */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Have a project in mind, want to discuss layout designs, or simply want to say hello? Drop me a line, and let's make it happen.
            </p>
            
            <div className="flex flex-col gap-4">
              {[
                { label: 'Email Me', value: 'hello@bochiblox.dev', icon: 'fa-envelope' },
                { label: 'My Location', value: 'Jakarta, Indonesia', icon: 'fa-location-dot' },
                { label: 'Call Me', value: '+62 812 3456 7890', icon: 'fa-phone' },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-sm flex-shrink-0 shadow-sm">
                    <i className={`fa-solid ${info.icon}`}></i>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">{info.label}</span>
                    <span className="text-slate-800 text-xs sm:text-sm font-semibold">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 mt-2">
              {[
                { name: 'Github', icon: 'fa-brands fa-github', href: 'https://github.com' },
                { name: 'Linkedin', icon: 'fa-brands fa-linkedin-in', href: 'https://linkedin.com' },
                { name: 'Twitter', icon: 'fa-brands fa-x-twitter', href: 'https://twitter.com' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 flex items-center justify-center text-slate-500 transition-all hover:-translate-y-0.5 shadow-sm"
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 flex flex-col gap-4 shadow-sm">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-600 text-xs font-bold mb-1.5 block">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="text-slate-600 text-xs font-bold mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@example.com"
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-600 text-xs font-bold mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me more about your project goals..."
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 text-xs sm:text-sm rounded-xl px-4 py-3.5 outline-none transition-all resize-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-550 text-white text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 cursor-pointer"
              >
                {isSent ? (
                  <>
                    <i className="fa-solid fa-check"></i>
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-[10px] font-bold font-mono tracking-wide">
            © {new Date().getFullYear()} BOCHIBLOX. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            <span className="text-slate-400 text-[10px] font-bold font-mono">React + Tailwind + Framer Motion</span>
          </div>
        </div>

      </div>
    </section>
  )
}

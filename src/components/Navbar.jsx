import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Palvelut',    href: '#palvelut' },
  { label: 'Tulokset',    href: '#referenssit' },
  { label: 'Hinnasto',    href: '#hinnasto' },
  { label: 'Prosessi',    href: '#prosessi' },
  { label: 'UKK',         href: '#ukk' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/snake-icon-64.png"
              alt="SnakeByte"
              className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]"
            />
            <span className="font-display font-bold text-xl text-white tracking-tight">
              Snake<span className="gradient-text">Byte</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-snake-green group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav('#yhteydenotto')}
              className="btn-primary text-sm"
            >
              Pyydä tarjous
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 bg-dark-900/95 backdrop-blur-xl border-b border-white/[0.08] lg:hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-base font-medium text-slate-300 hover:text-white py-2 border-b border-white/[0.05] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#yhteydenotto')}
                className="btn-primary mt-2 justify-center"
              >
                Pyydä tarjous
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Moon, Sparkles, Sun, Sunrise, Sunset, X } from 'lucide-react'

const navLinks = [
  { label: 'Palvelut',    href: '#palvelut' },
  { label: 'Hinnasto',    href: '#hinnasto' },
  { label: 'Prosessi',    href: '#prosessi' },
]

const themeOptions = [
  { id: 'auto', label: 'Auto', title: 'Automaattinen päivänajan mukaan', Icon: Sparkles },
  { id: 'morning', label: 'Aamu', title: 'Aamu: minttu ja taivaansininen', Icon: Sunrise },
  { id: 'day', label: 'Päivä', title: 'Päivä: lämmin keltainen ja vihreä', Icon: Sun },
  { id: 'evening', label: 'Ilta', title: 'Ilta: koralli, violetti ja navy', Icon: Sunset },
  { id: 'night', label: 'Yö', title: 'Yö: tumma neon', Icon: Moon },
]

function ThemeSwitcher({ themeMode, activeTheme, onThemeChange, compact = false }) {
  return (
    <div
      className={`theme-switcher ${compact ? 'w-full justify-between' : ''}`}
      aria-label={`Teema: ${themeMode === 'auto' ? `auto, nyt ${activeTheme}` : themeMode}`}
    >
      {themeOptions.map(({ id, label, title, Icon }) => {
        const selected = themeMode === id

        return (
          <button
            key={id}
            type="button"
            title={title}
            aria-label={title}
            aria-pressed={selected}
            onClick={() => onThemeChange(id)}
            className={`theme-switcher__button ${selected ? 'theme-switcher__button--active' : ''}`}
          >
            <Icon size={compact ? 17 : 15} />
            {compact && <span>{label}</span>}
          </button>
        )
      })}
    </div>
  )
}

export default function Navbar({ themeMode = 'auto', activeTheme = 'night', onThemeChange = () => {} }) {
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
        className={`site-nav fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'site-nav--scrolled' : ''
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
            <span className="font-display font-bold text-xl tracking-tight">
              Snake<span className="gradient-text">Byte</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="site-nav__link text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-snake-green group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeSwitcher
              themeMode={themeMode}
              activeTheme={activeTheme}
              onThemeChange={onThemeChange}
            />
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
            className="site-nav__icon lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border transition-all"
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
            className="site-nav__mobile fixed inset-x-0 top-16 z-40 backdrop-blur-xl border-b lg:hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              <ThemeSwitcher
                compact
                themeMode={themeMode}
                activeTheme={activeTheme}
                onThemeChange={onThemeChange}
              />
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="site-nav__link text-left text-base font-medium py-2 border-b transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#yhteydenotto')}
                className="btn-primary mt-1 justify-center"
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

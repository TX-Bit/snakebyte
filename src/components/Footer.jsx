import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'

const footerLinks = {
  Palvelut: [
    { label: 'Kotisivu',           href: '#palvelut' },
    { label: 'Mobiilisovellus',    href: '#palvelut' },
  ],
  Sivusto: [
    { label: 'Hinnasto',    href: '#hinnasto' },
    { label: 'Prosessi',    href: '#prosessi' },
  ],
}

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Twitter,   href: '#', label: 'Twitter / X' },
  { icon: Github,    href: '#', label: 'GitHub' },
]

export default function Footer() {
  const handleNav = (href) => {
    if (href.startsWith('#') && href.length > 1) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-950 border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 mb-4 group"
            >
              <img
                src="/snake-icon-64.png"
                alt="SnakeByte"
                className="w-7 h-7 object-contain group-hover:scale-110 transition-transform drop-shadow-[0_0_6px_rgba(0,255,136,0.35)]"
              />
              <span className="font-display font-bold text-lg text-white">
                Snake<span className="gradient-text">Byte</span>
              </span>
            </button>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Näyttävät ja modernit nettisivut sekä mobiilisovellukset suomalaisille yrityksille.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-white text-sm font-semibold mb-4">{group}</div>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => handleNav(href)}
                      className="text-slate-500 text-sm hover:text-slate-300 transition-colors text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} SnakeByte. Kaikki oikeudet pidätetään.
          </p>
          <div className="flex items-center gap-5 text-slate-600 text-xs">
            <a href="#" className="hover:text-slate-400 transition-colors">Tietosuoja</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Ehdot</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Evästeet</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

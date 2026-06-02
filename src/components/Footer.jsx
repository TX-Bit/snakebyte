import { Link } from 'react-router-dom'
import { solutionLinks } from '../content/siteContent'

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/[0.06] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-4">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link to="/" className="text-slate-500 hover:text-white text-xs transition-colors">
            Etusivu
          </Link>
          {solutionLinks.map((link) => (
            <Link key={link.href} to={link.href} className="text-slate-500 hover:text-white text-xs transition-colors">
              {link.title}
            </Link>
          ))}
          <Link to="/hinnasto" className="text-slate-500 hover:text-white text-xs transition-colors">
            Hinnasto
          </Link>
        </nav>
        <p className="text-slate-600 text-xs text-center">
          © {new Date().getFullYear()} SnakeByte. Kaikki oikeudet pidätetään.
        </p>
      </div>
    </footer>
  )
}

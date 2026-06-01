import { Link } from 'react-router-dom'

const localLinks = [
  { to: '/nettisivut-kuopio', label: 'Nettisivut Kuopio' },
  { to: '/nettisivut-siilinjarvi', label: 'Nettisivut Siilinjärvi' },
  { to: '/nettisivut-maaninka', label: 'Nettisivut Maaninka' },
  { to: '/nettisivut-pohjois-savo', label: 'Nettisivut Pohjois-Savo' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/[0.06] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {localLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-slate-700 hover:text-slate-500 text-xs transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-slate-600 text-xs text-center">
            © {new Date().getFullYear()} SnakeByte. Kaikki oikeudet pidätetään.
          </p>
        </div>
      </div>
    </footer>
  )
}

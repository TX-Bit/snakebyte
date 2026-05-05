export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/[0.06] py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-slate-600 text-xs text-center">
          © {new Date().getFullYear()} SnakeByte. Kaikki oikeudet pidätetään.
        </p>
      </div>
    </footer>
  )
}

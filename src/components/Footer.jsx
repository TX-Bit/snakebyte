export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/[0.06] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-2">
        <p className="text-slate-700 text-xs text-center">
          Palvelu onnistuu etänä koko Suomeen – myös Kuopio, Siilinjärvi, Maaninka ja Pohjois-Savo.
        </p>
        <p className="text-slate-600 text-xs text-center">
          © {new Date().getFullYear()} SnakeByte. Kaikki oikeudet pidätetään.
        </p>
      </div>
    </footer>
  )
}

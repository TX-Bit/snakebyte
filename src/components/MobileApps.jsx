import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Apple, CheckCircle2, ArrowRight, Layers, Zap, Globe } from 'lucide-react'

const mobileFeatures = [
  'iOS (App Store) & Android (Google Play)',
  'React Native – yhdellä koodilla molemmille',
  'Natiivi suorituskyky ja käyttökokemus',
  'Push-ilmoitukset & offline-toiminta',
  'Integraatiot API:hin ja backendiisi',
  'App Store -julkaisuprosessi mukana',
]

const useCases = [
  { icon: Layers, text: 'Asiakassovellukset & portaalit' },
  { icon: Globe,  text: 'B2C kuluttajasovellukset' },
  { icon: Zap,    text: 'Sisäiset yritystyökalut' },
]

export default function MobileApps() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#00d4ff]/[0.05] blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-snake-green/[0.04] blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="section-label mb-6">Mobiilisovellukset</div>
            <h2 className="section-title text-4xl lg:text-5xl mb-6">
              iOS & Android.
              <br />
              <span className="gradient-text">Yhdellä tilauksella.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Tarvitsetko mobiilisovelluksen yrityksellesi? Rakennamme iOS- ja Android-sovellukset
              React Native -teknologialla – ei kahta erillistä koodipohjaa, ei tuplahintaa.
              Kerro ideasi ja tehdään räätälöity tarjous.
            </p>

            <ul className="space-y-3 mb-10">
              {mobileFeatures.map(f => (
                <li key={f} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 size={16} className="text-snake-green flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mb-10">
              {useCases.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 text-sm"
                >
                  <Icon size={14} className="text-[#00d4ff]" />
                  {text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Pyydä tarjous sovelluksesta <ArrowRight size={16} />
              </button>
            </div>

            <p className="text-slate-600 text-xs mt-4">
              Mobiilisovellukset hinnoitellaan aina projektikohtaisesti. Aloituspalaveri on maksuton.
            </p>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative flex justify-center"
          >
            {/* Phone mockup */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[3rem] bg-[#00d4ff]/20 blur-[60px] scale-90" />

              {/* Phone frame */}
              <div className="relative w-64 h-[520px] rounded-[3rem] border-2 border-white/15 bg-dark-800 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-dark-950 z-10" />

                {/* Screen content mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-900 flex flex-col items-center justify-center gap-5 p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-snake-green to-[#00d4ff] flex items-center justify-center shadow-snake animate-float">
                    <Smartphone size={28} className="text-dark-950" />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-display font-bold text-lg mb-1">YourApp</div>
                    <div className="text-slate-500 text-xs">iOS & Android</div>
                  </div>
                  {/* Fake UI elements */}
                  <div className="w-full space-y-2.5">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.05] border border-white/[0.06]">
                        <div className="w-8 h-8 rounded-lg bg-snake-green/20 flex-shrink-0" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2 rounded bg-white/20 w-3/4" />
                          <div className="h-1.5 rounded bg-white/10 w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-10 rounded-xl bg-gradient-to-r from-snake-green/80 to-[#00d4ff]/80 flex items-center justify-center">
                    <span className="text-dark-950 text-xs font-bold">Jatka</span>
                  </div>
                </div>
              </div>

              {/* Platform badges */}
              <div className="absolute -right-6 top-16 px-3 py-2 rounded-xl bg-dark-800 border border-white/10 shadow-card">
                <div className="flex items-center gap-2">
                  <Apple size={14} className="text-white" />
                  <span className="text-white text-xs font-semibold">App Store</span>
                </div>
              </div>
              <div className="absolute -left-6 bottom-20 px-3 py-2 rounded-xl bg-dark-800 border border-white/10 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-sm bg-gradient-to-br from-green-400 to-blue-500 flex-shrink-0" />
                  <span className="text-white text-xs font-semibold">Google Play</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, TrendingUp, PhoneCall, Calendar } from 'lucide-react'

const cases = [
  {
    type: 'Landing page',
    color: '#00ff88',
    business: 'LVI-urakoitsija, Vantaa',
    challenge: 'Ei nettisivuja lainkaan. Asiakkaat Googlettavat putkimiestä ja löytävät kilpailijat.',
    result: 'Landing page valmiina 8 päivässä. Kolme uutta asiakasyhteydenottoa ensimmäisellä viikolla.',
    metric: '+3 uutta asiakasta / vko 1',
    icon: PhoneCall,
  },
  {
    type: 'Kotisivu',
    color: '#00d4ff',
    business: 'Parturikampaamo, Helsinki',
    challenge: 'Vanha WordPress-sivu näytti 2012 tehdyltä. Ei mobiiliversiota. Asiakkaat kommentoivat sitä.',
    result: 'Uusi kotisivu + ajanvarauslinkki. Ajanvaraukset kasvoivat +60 % kahden kuukauden aikana.',
    metric: '+60 % ajanvaraukset',
    icon: Calendar,
  },
  {
    type: 'Landing page',
    color: '#a855f7',
    business: 'Personal trainer, Tampere',
    challenge: 'Instagram ei riitä – tarvitaan paikka jonne ohjata ihmiset ja saada heidät jäämään.',
    result: 'Selkeä landing page valmennuspaketeille. Ensimmäinen asiakas viikon kuluessa julkaisusta.',
    metric: 'Asiakas viikossa julkaisusta',
    icon: TrendingUp,
  },
]

export default function References() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="referenssit" className="py-24 lg:py-28 bg-dark-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[#a855f7]/[0.04] blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-5">Tuloksia</div>
          <h2 className="section-title text-4xl lg:text-5xl mb-4">
            Mitä tapahtui{' '}
            <span className="gradient-text">julkaisun jälkeen.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Kolme esimerkkiä oikeista projekteista – haasteineen ja tuloksineen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map(({ type, color, business, challenge, result, metric, icon: Icon }, i) => (
            <motion.div
              key={business}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
                  style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}35` }}
                >
                  {type}
                </span>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
              </div>

              <p className="text-white font-semibold text-sm mb-4">{business}</p>

              {/* Challenge */}
              <div className="mb-3">
                <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">Tilanne ennen</p>
                <p className="text-slate-400 text-sm leading-relaxed">{challenge}</p>
              </div>

              {/* Result */}
              <div className="mb-5 flex-1">
                <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">Mitä tapahtui</p>
                <p className="text-slate-300 text-sm leading-relaxed">{result}</p>
              </div>

              {/* Metric */}
              <div
                className="px-4 py-3 rounded-xl text-center font-display font-bold text-sm"
                style={{ backgroundColor: `${color}12`, color, border: `1px solid ${color}25` }}
              >
                {metric}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Haluan samanlaisen tuloksen <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

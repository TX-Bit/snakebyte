import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'

const plans = [
  {
    name: 'Landing page',
    for: 'Yrittäjälle joka tarvitsee laadun nopeasti',
    price: '599',
    delivery: 'Valmis 7–10 päivässä',
    color: '#00d4ff',
    popular: false,
    features: [
      'Yksi näyttävä sivu',
      'Yhteydenottolomake tai ajanvarauslinkki',
      'Toimii täydellisesti puhelimella',
      'Perustiedot Googleen (otsikot, kuvaukset)',
      'Julkaisu omalle domainillesi',
      '30 pv ilmainen tuki julkaisun jälkeen',
    ],
    cta: 'Tilaa landing page',
    note: null,
  },
  {
    name: 'Kotisivu',
    for: 'Yritykselle joka haluaa erottua',
    price: '1 490',
    delivery: 'Valmis 2–3 viikossa',
    color: '#00ff88',
    popular: true,
    features: [
      'Kaikki mitä landing pagessa +',
      '4–8 sivua (etusivu, palvelut, meistä, yhteystiedot…)',
      'Animaatiot ja premium-ilme',
      'Voit päivittää tekstit ja kuvat itse',
      'Google-löydettävyyden perusteet',
      '60 pv ilmainen tuki julkaisun jälkeen',
    ],
    cta: 'Tilaa kotisivu',
    note: null,
  },
]

const maintenance = [
  {
    name: 'Rauhallinen mieli',
    price: '49 €/kk',
    description: 'Sivustosi pysyy käynnissä, turvallisena ja ajan tasalla. Et tarvitse tehdä mitään.',
    features: [
      'Sivusto toimii – me valvomme',
      'Tietoturva kunnossa',
      'Pienet tekstimuutokset mukana',
    ],
  },
  {
    name: 'Jatkuva kehitys',
    price: '129 €/kk',
    description: 'Sivusto kasvaa liiketoimintasi mukana. Muutostöitä kuukausittain, ilman erillistä laskutusta.',
    features: [
      'Kaikki yllä +',
      'Muutokset ja päivitykset (3 h/kk)',
      'Kerran kuussa lyhyt tilannekatsaus',
    ],
  },
]

function PlanCard({ plan, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative glass-card p-7 flex flex-col ${
        plan.popular
          ? 'border-snake-green/40 bg-snake-green/[0.05] shadow-snake'
          : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-gradient-to-r from-snake-green to-[#00d4ff] text-dark-950 text-[11px] font-bold tracking-wide whitespace-nowrap">
          YLEISIN VALINTA
        </div>
      )}

      <p
        className="text-xs font-medium mb-4"
        style={{ color: plan.color }}
      >
        {plan.for}
      </p>

      <h3 className="font-display font-bold text-2xl text-white mb-2">{plan.name}</h3>

      <div className="flex items-end gap-1.5 mb-1">
        <span className="font-display font-bold text-5xl text-white">{plan.price} €</span>
      </div>
      <p className="text-slate-500 text-sm mb-7">{plan.delivery}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map(f => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle2 size={15} className="text-snake-green flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
        className={plan.popular ? 'btn-primary justify-center py-4' : 'btn-outline justify-center py-4'}
      >
        {plan.cta} <ArrowRight size={15} />
      </button>
    </motion.div>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="hinnasto" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-snake-green/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-5">Hinnasto</div>
          <h2 className="section-title text-4xl lg:text-5xl mb-4">
            Kaksi pakettia.{' '}
            <span className="gradient-text">Kiinteä hinta.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Kerrot mitä haluat, me toimitamme. Hinta on aina selvillä ennen kuin
            aloitetaan – ei tuntilaskutusta, ei yllätyksiä.
          </p>
        </motion.div>

        {/* Main plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} inView={inView} />
          ))}
        </div>

        {/* Custom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="glass-card p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">Tarvitset jotain muuta?</p>
              <p className="text-slate-500 text-sm">Verkkokauppa, mobiilisovellus tai erikoistoteutus → pyydä tarjous.</p>
            </div>
            <button
              onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-sm flex-shrink-0 flex items-center gap-2"
            >
              <MessageCircle size={14} /> Pyydä tarjous
            </button>
          </div>
        </motion.div>

        {/* Maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-display font-semibold text-2xl text-white mb-2">
              Ylläpito – sivusto kunnossa ilman vaivaa
            </h3>
            <p className="text-slate-500 text-sm">Valinnainen lisä. Voit ottaa käyttöön koska tahansa julkaisun jälkeen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {maintenance.map(({ name, price, description, features }) => (
              <div key={name} className="glass-card p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-display font-semibold text-white text-base">{name}</h4>
                  <span className="text-snake-green font-bold text-sm flex-shrink-0">{price}</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
                <ul className="space-y-1.5">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-400 text-sm">
                      <CheckCircle2 size={13} className="text-snake-green flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

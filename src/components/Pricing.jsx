import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'

const plans = [
  {
    name: 'Landing page',
    label: 'Kevyt aloitus',
    price: 'alk. 250 € + alv',
    description: 'Yhden sivun selkeä myyntisivu kampanjaan, palveluun tai uuden yrityksen ensinäkyvyyteen.',
    color: 'var(--color-primary)',
    popular: false,
    features: [
      '1 sivu',
      'moderni responsiivinen design',
      'yrityksen perustiedot',
      'yhteydenottolomake',
      'kevyt hakukoneoptimointi',
      'sivuston julkaisu',
    ],
    cta: 'Valitse paketti',
  },
  {
    name: 'Perussivusto',
    label: 'Laajempi kokonaisuus',
    price: 'alk. 450 € + alv',
    description: 'Useampisivuinen sivusto yritykselle, joka haluaa esitellä palvelut selkeästi ja kerätä yhteydenottoja.',
    color: 'var(--color-secondary)',
    popular: false,
    features: [
      '2–4 sivua',
      'muokkauspaneeli teksteille',
      'palveluiden tai referenssien osio',
      'yhteydenottolomake',
      'perus hakukoneoptimointi',
      'sivuston julkaisu',
    ],
    cta: 'Valitse paketti',
  },
]

function PlanCard({ plan, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative glass-card p-7 md:p-8 flex flex-col min-h-full ${
        ''
      }`}
    >
      <div className="mb-5">
        <p
          className="text-xs font-semibold uppercase tracking-[0.24em] mb-4"
          style={{ color: plan.color }}
        >
          {plan.label}
        </p>

        <h3 className="font-display font-bold text-2xl text-white mb-3">{plan.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
      </div>

      <div className="flex items-end gap-1.5 mb-6">
        <span className="font-display font-bold text-4xl lg:text-5xl text-white">{plan.price}</span>
      </div>

      <ul className="space-y-3.5 mb-8 flex-1">
        {plan.features.map(feature => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle2 size={15} className="text-snake-green flex-shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      {plan.exclusions && (
        <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4 mb-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-3">Ei sisällä</p>
          <ul className="space-y-2.5">
            {plan.exclusions.map(item => (
              <li key={item} className="text-sm text-slate-400">
                ei {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
        className="btn-outline justify-center py-4"
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

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-stretch max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} inView={inView} />
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">Tarvitset jotain muuta?</p>
              <p className="text-slate-500 text-sm">
                Myös laajemmat verkkosivustot sekä iOS- ja Android-sovellukset onnistuvat projektikohtaisena toteutuksena.
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-sm flex-shrink-0 flex items-center gap-2"
            >
              <MessageCircle size={14} /> Pyydä tarjous
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

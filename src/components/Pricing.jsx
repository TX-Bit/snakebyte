import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Landing page',
    price: '250 €',
    priceNote: '+ alv',
    description: 'Nopea aloitus pienelle yritykselle tai palvelulle.',
    color: 'var(--color-primary)',
    features: [
      { text: '1 sivu' },
      { text: 'Moderni responsiivinen design' },
      { text: 'Yrityksen perustiedot' },
      { text: 'Yhteydenottolomake' },
      { text: 'Kevyt hakukoneoptimointi' },
      { text: 'Ei omatoimista sisällönhallintaa', minus: true },
    ],
    cta: 'Aloita pienesti',
  },
  {
    name: 'Perussivusto',
    price: '500 €',
    priceNote: '+ alv',
    description: 'Laajempi sivusto yritykselle, joka haluaa esitellä palvelut selkeästi ja kasvattaa näkyvyyttä.',
    color: 'var(--color-secondary)',
    features: [
      { text: '2–4 sivua' },
      { text: 'Moderni responsiivinen design' },
      { text: 'Palvelut / yritysesittely / yhteystiedot' },
      { text: 'Yhteydenottolomake' },
      { text: 'Voit päivittää tekstit ja kuvat itse' },
      { text: 'Perus hakukoneoptimointi' },
    ],
    cta: 'Valitse perussivusto',
  },
]

function PlanCard({ plan, index, inView, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative glass-card p-7 md:p-8 flex flex-col group"
    >
      <h3 className="font-display font-bold text-2xl text-white mb-3">{plan.name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{plan.description}</p>

      <div className="flex items-baseline gap-1.5 mb-7">
        <span
          className="font-display font-bold text-4xl lg:text-5xl"
          style={{ color: plan.color }}
        >
          {plan.price}
        </span>
        <span className="text-slate-400 text-sm">{plan.priceNote}</span>
      </div>

      <ul className="space-y-3.5 mb-8 flex-1">
        {plan.features.map(({ text, minus }) => (
          <li key={text} className={`flex items-start gap-2.5 text-sm ${minus ? 'text-slate-500' : 'text-slate-300'}`}>
            {minus
              ? <XCircle size={15} className="text-slate-600 flex-shrink-0 mt-0.5" />
              : <CheckCircle2 size={15} style={{ color: plan.color }} className="flex-shrink-0 mt-0.5" />
            }
            {text}
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          onSelect(plan.name)
          document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="btn-outline justify-center py-4"
        style={{ borderColor: `color-mix(in srgb, ${plan.color} 30%, transparent)`, color: plan.color }}
      >
        {plan.cta} <ArrowRight size={15} />
      </button>

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: `linear-gradient(90deg, ${plan.color}, transparent)` }}
      />
    </motion.div>
  )
}

export default function Pricing({ onSelectPlan }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="hinnasto" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-snake-green/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-5">Hinnasto</div>
          <h2 className="section-title text-4xl lg:text-5xl mb-4">
            Kaksi selkeää{' '}
            <span className="gradient-text">vaihtoehtoa.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Ei turhia lisäpalveluita. Valitset mitä tarvitset – me teemme sen kunnolla.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} inView={inView} onSelect={onSelectPlan} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-5">
            Voit aloittaa landing-sivulla ja päivittää myöhemmin perussivustoksi –{' '}
            <span className="text-white">hyvitämme 50 € laajennuksen hinnasta.</span>
          </p>
          <button
            onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-slate-400 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-slate-600 hover:decoration-slate-400"
          >
            Aloita pienesti – päivitä myöhemmin
          </button>
        </motion.div>
      </div>
    </section>
  )
}

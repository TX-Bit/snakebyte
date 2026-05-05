import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const packages = [
  {
    color: '#00d4ff',
    title: 'Landing page',
    price: '250 €',
    priceNote: '+ alv',
    description: 'Nopea aloitus pienelle yritykselle tai palvelulle.',
    features: [
      '1 sivu',
      'Moderni responsiivinen design',
      'Yrityksen perustiedot',
      'Yhteydenottolomake',
      'Kevyt hakukoneoptimointi',
      'Sivuston julkaisu',
    ],
    cta: 'Aloita pienesti',
  },
  {
    color: '#a855f7',
    title: 'Perussivusto',
    price: '600 €',
    priceNote: '+ alv',
    description: 'Laajempi sivusto yritykselle, joka haluaa esitellä palvelut selkeästi ja kasvattaa näkyvyyttä.',
    features: [
      '2–4 sivua',
      'Moderni responsiivinen design',
      'Palvelut / yritysesittely / yhteystiedot',
      'Yhteydenottolomake',
      'Perus hakukoneoptimointi',
      'Sivuston julkaisu',
      'Mahdollisuus myöhempiin laajennuksiin',
    ],
    cta: 'Valitse perussivusto',
  },
]

function PackageCard({ pkg, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="relative glass-card p-7 flex flex-col group"
    >
      <h3 className="font-display font-bold text-xl text-white mb-3">{pkg.title}</h3>

      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-3xl font-bold" style={{ color: pkg.color }}>{pkg.price}</span>
        <span className="text-slate-400 text-sm">{pkg.priceNote}</span>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-6 mt-2">{pkg.description}</p>

      <ul className="space-y-2.5 mb-8 flex-1">
        {pkg.features.map(f => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle2 size={14} style={{ color: pkg.color }} className="flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
        className="btn-outline justify-center text-sm"
        style={{ borderColor: `${pkg.color}40`, color: pkg.color }}
      >
        {pkg.cta} <ArrowRight size={14} />
      </button>

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: `linear-gradient(90deg, ${pkg.color}, transparent)` }}
      />
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="palvelut" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00d4ff]/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.title} pkg={pkg} index={i} inView={inView} />
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

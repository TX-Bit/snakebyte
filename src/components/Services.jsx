import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Globe, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Globe,
    color: '#00d4ff',
    tag: 'Suosituin',
    title: 'Kotisivu yritykselle',
    price: 'alk. 450 € + alv',
    description:
      'Useampisivuinen kotisivu yritykselle, joka haluaa näyttää ammattimaiselta ja erottua kilpailijoista. Sisältää kaiken mitä hyvä yrityssivusto tarvitsee.',
    features: [
      '4–8 sivua (etusivu, palvelut, meistä, yhteystiedot…)',
      'Voit päivittää sisältöjä itse',
      'Löydettävyys Googlesta (perusteet)',
      'Valmis 2–3 viikossa',
    ],
    cta: 'Tilaa kotisivu',
  },
  {
    icon: Smartphone,
    color: '#a855f7',
    tag: 'Kysy tarjous',
    title: 'Mobiilisovellus',
    price: 'tarjous pyydettäessä',
    description:
      'Tarvitsetko iOS- tai Android-sovelluksen? Rakennamme ne samalla kertaa yhdellä koodilla – ei tuplahintaa kahdelle alustalle. Kerro ideasi, tehdään tarjous.',
    features: [
      'Toimii iPhonella ja Androidilla',
      'Julkaisu App Storeen & Google Playhin',
      'Hinnoittelu aina projektikohtaisesti',
      'Aloituspalaveri maksuton',
    ],
    cta: 'Kerro ideasi',
  },
]

function ServiceCard({ service, index, inView }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="relative glass-card p-7 flex flex-col group"
    >
      {service.tag && (
        <div
          className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
          style={{
            backgroundColor: `${service.color}20`,
            color: service.color,
            border: `1px solid ${service.color}40`,
          }}
        >
          {service.tag}
        </div>
      )}

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}30` }}
      >
        <Icon size={22} style={{ color: service.color }} />
      </div>

      <h3 className="font-display font-bold text-xl text-white mb-1">{service.title}</h3>
      <p className="text-snake-green text-sm font-semibold mb-4">{service.price}</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>

      <ul className="space-y-2.5 mb-7">
        {service.features.map(f => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle2 size={14} className="text-snake-green flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
        className="btn-outline justify-center text-sm"
      >
        {service.cta} <ArrowRight size={14} />
      </button>

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
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

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-5">Mitä teemme</div>
          <h2 className="section-title text-4xl lg:text-5xl mb-4">
            Kolme selkeää{' '}
            <span className="gradient-text">vaihtoehtoa.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Ei turhia lisäpalveluita. Valitset mitä tarvitset – me teemme sen kunnolla.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

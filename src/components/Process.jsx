import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Pencil, Rocket, HeartHandshake } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    color: '#00ff88',
    title: 'Soitetaan tai jutellaan',
    duration: 'Päivä 1',
    description:
      'Kerrot mitä tarvitset – ei powerpoint-esityksiä, ei muodollisuuksia. Lyhyt puhelu tai viesti riittää. Saat tarjouksen saman päivän aikana.',
  },
  {
    number: '02',
    icon: Pencil,
    color: '#00d4ff',
    title: 'Näytän miltä näyttää',
    duration: 'Päivä 2–4',
    description:
      'Suunnittelen sivustosi ulkoasun etukäteen ja näytän sen sinulle. Voit kommentoida vapaasti ennen kuin rakennetaan mitään.',
  },
  {
    number: '03',
    icon: Rocket,
    color: '#a855f7',
    title: 'Rakennetaan ja julkaistaan',
    duration: 'Päivä 5–10',
    description:
      'Kun design on hyväksytty, rakennan sivuston valmiiksi. Julkaistaan sovittuna päivänä omalle domainillesi.',
  },
  {
    number: '04',
    icon: HeartHandshake,
    color: '#f59e0b',
    title: 'Et jää yksin',
    duration: 'Julkaisun jälkeen',
    description:
      'Saat 30–60 päivää ilmaista tukea julkaisun jälkeen. Jos jotain pitää muuttaa tai jokin ei toimi, hoidan sen.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="prosessi" className="py-24 lg:py-28 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-[#a855f7]/[0.04] blur-[90px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-5">Miten se toimii</div>
          <h2 className="section-title text-4xl lg:text-5xl mb-4">
            Neljä askelta{' '}
            <span className="gradient-text">valmiiseen sivustoon.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Sinun ei tarvitse tietää mitään nettisivujen tekemisestä.
            Hoidan kaiken.
          </p>
        </motion.div>

        <div className="relative space-y-5">
          {/* Connector line */}
          <div className="hidden md:block absolute left-[27px] top-14 bottom-14 w-px bg-gradient-to-b from-snake-green/40 via-[#00d4ff]/20 to-transparent" />

          {steps.map(({ number, icon: Icon, color, title, duration, description }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 group"
            >
              <div
                className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${color}15`, border: `1px solid ${color}35` }}
              >
                <Icon size={20} style={{ color }} />
              </div>

              <div className="glass-card px-6 py-5 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-display font-bold text-xl" style={{ color }}>{number}</span>
                  <h3 className="font-display font-semibold text-white text-lg">{title}</h3>
                  <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-slate-500">
                    {duration}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Aloitetaan tänään →
          </button>
        </motion.div>
      </div>
    </section>
  )
}

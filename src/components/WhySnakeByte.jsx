import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Euro, Phone, Star } from 'lucide-react'

const points = [
  {
    icon: Clock,
    color: '#00ff88',
    title: 'Valmis nopeasti',
    description: 'Ei kuukausien odottelua. Kotisivu toimitetaan yleensä 2–3 viikossa. Aikataulu pidetään.',
  },
  {
    icon: Euro,
    color: '#00d4ff',
    title: 'Tiedät hinnan etukäteen',
    description: 'Kiinteä hinta sovitaan ennen kuin aloitetaan. Ei tuntihinnoittelua, ei yllättäviä lisälaskuja.',
  },
  {
    icon: Phone,
    color: '#a855f7',
    title: 'Suora yhteys tekijään',
    description: 'Ei tikettejä tai asiakaspalvelukeskusta. Puhut suoraan sen henkilön kanssa joka sivustosi tekee.',
  },
]

const testimonials = [
  {
    quote: 'Sivusto oli valmis ajallaan ja näyttää täsmälleen siltä mitä halusin. Yhteydenotot kasvoivat selvästi heti ensimmäisellä kuukaudella.',
    name: 'Matti V.',
    role: 'Putkimies, yrittäjä',
    avatar: 'MV',
  },
  {
    quote: 'Vihdoin sivusto jota ei tarvitse hävetä. Prosessi oli selkeä ja hinta oli se mitä sovittiin – ei mitään yllätyksiä.',
    name: 'Anna K.',
    role: 'Parturikampaaja',
    avatar: 'AK',
  },
  {
    quote: 'Helppo tapa saada ammattimainen verkkonäkyvyys. Suosittelen jokaiselle yrittäjälle joka haluaa kasvaa.',
    name: 'Pekka L.',
    role: 'Personal trainer',
    avatar: 'PL',
  },
]

export default function WhySnakeByte() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-28 bg-dark-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-snake-green/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Three points */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-5">Miksi SnakeByte</div>
          <h2 className="section-title text-4xl lg:text-5xl mb-4">
            Nopea. Selkeä.{' '}
            <span className="gradient-text">Laadukas.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {points.map(({ icon: Icon, color, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map(({ quote, name, role, avatar }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="glass-card p-5"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={11} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">"{quote}"</p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-snake-green to-[#00d4ff] flex items-center justify-center text-dark-950 text-[10px] font-bold flex-shrink-0">
                  {avatar}
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{name}</div>
                  <div className="text-slate-500 text-xs">{role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

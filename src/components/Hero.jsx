import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.12 },
  }),
}

const proofItems = [
  { value: '30+', label: 'valmistunutta sivustoa' },
  { value: '7–14 pv', label: 'toimitusaika' },
  { value: '100 %', label: 'tyytyväisyystakuu' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 pt-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-snake-green/[0.06] blur-[130px]" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-[#00d4ff]/[0.04] blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,136,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,136,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">

        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-snake-green/20 blur-2xl scale-150 animate-pulse-slow" />
            <img
              src="/snake-icon-256.png"
              alt="SnakeByte"
              className="relative w-20 h-20 object-contain drop-shadow-[0_0_24px_rgba(0,255,136,0.5)]"
            />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-snake-green/25 bg-snake-green/[0.08] mb-8">
            <span className="w-2 h-2 rounded-full bg-snake-green animate-pulse" />
            <span className="text-snake-green text-xs font-semibold tracking-widest uppercase">
              Nettisivut pienyrityksille – Helsinki
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.06] tracking-tight mb-6"
        >
          Nettisivu joka tuo{' '}
          <span className="relative inline-block">
            <span className="gradient-text">asiakkaita.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
              className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-to-r from-snake-green to-[#00d4ff] rounded-full origin-left"
            />
          </span>
          <br />
          Ei vain näytä hyvältä.
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-slate-400 text-lg lg:text-xl max-w-xl mx-auto mb-4 leading-relaxed"
        >
          Teemme pienyrityksille näyttävät, modernit nettisivut joita ei tarvitse
          hävetä – ja jotka oikeasti saavat kävijän ottamaan yhteyttä.
        </motion.p>

        {/* Price anchor */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2.4}
          className="text-slate-500 text-sm mb-10"
        >
          Landing page alkaen <span className="text-white font-semibold">599 €</span> · Valmis 7–14 päivässä
        </motion.p>

        {/* Stars */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={2.7}
          className="flex items-center justify-center gap-1.5 mb-10"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-slate-500 text-sm ml-1.5">"Juuri sellainen kuin halusin" – 30+ tyytyväistä yrittäjää</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button
            onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base px-8 py-4 gap-3"
          >
            Pyydä maksuton tarjous
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => document.querySelector('#referenssit')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-base px-8 py-4"
          >
            Katso esimerkkejä →
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={4}
          className="flex items-center justify-center gap-10 sm:gap-16"
        >
          {proofItems.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-2xl text-white">{value}</div>
              <div className="text-slate-500 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />
    </section>
  )
}

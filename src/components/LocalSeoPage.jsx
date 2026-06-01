import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { localPages } from '../data/localSeoContent'
import Contact from './Contact'
import FAQ from './FAQ'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 },
  }),
}

const services = [
  { name: 'Landing page', price: '250 €', desc: 'Yhden sivun selkeä sivusto – nopea aloitus pienyritykselle tai uudelle palvelulle.' },
  { name: 'Perussivusto', price: '500 €', desc: '2–4 sivua: etusivu, palvelut, yhteystiedot. Mukana mahdollisuus päivittää tekstit itse.' },
]

const steps = [
  { n: '01', title: 'Kerrot tarpeesta', body: 'Lähetät viestin tai soitat. Ei tarvitse tietää tarkalleen mitä haluat – jutellaan yhdessä.' },
  { n: '02', title: 'Saat designin', body: 'Näytän miltä sivusto tulee näyttämään ennen kuin rakennan mitään. Voit muuttaa vapaasti.' },
  { n: '03', title: 'Sivusto julkaistaan', body: 'Kun olet tyytyväinen, julkaistaan. Prosessi kestää yleensä 2–3 viikkoa.' },
]

function ServicesSection({ inView }) {
  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-snake-green/[0.04] blur-[100px]" />
      </div>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="section-label mb-4">Palvelut</div>
          <h2 className="section-title text-3xl lg:text-4xl mb-3">
            Kaksi selkeää <span className="gradient-text">vaihtoehtoa.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-md mx-auto">
            Voit aloittaa landing-sivulla ja laajentaa myöhemmin perussivustoksi –{' '}
            <span className="text-white">50 € hyvitys laajennuksesta.</span>
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display font-bold text-lg text-white">{s.name}</h3>
                <span className="font-display font-bold text-snake-green text-xl whitespace-nowrap">{s.price} <span className="text-slate-500 text-xs font-normal">+ alv</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <a
            href="#yhteydenotto"
            onClick={e => { e.preventDefault(); document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 text-sm text-snake-green hover:underline underline-offset-4"
          >
            Kysy maksuton tarjous <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProcessSection({ inView }) {
  return (
    <section className="py-20 bg-dark-950 relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="section-label mb-4">Prosessi</div>
          <h2 className="section-title text-3xl lg:text-4xl">
            Näin se <span className="gradient-text">etenee.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="font-display font-bold text-3xl text-snake-green/30 mb-3">{s.n}</div>
              <h3 className="font-display font-bold text-white text-base mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function LocalSeoPage({ city }) {
  const content = localPages[city]
  const [selectedPlan, setSelectedPlan] = useState('')
  const introRef = useRef(null)
  const introInView = useInView(introRef, { once: true, margin: '-60px' })

  useMeta({
    title: content.title,
    description: content.metaDescription,
    canonical: content.canonical,
  })

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-dark-950 pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-snake-green/[0.06] blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(var(--color-grid) 1px, transparent 1px),
                linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="mb-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              <ArrowLeft size={14} /> Takaisin etusivulle
            </Link>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-5"
          >
            {content.h1.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{content.h1.split(' ').slice(-1)[0]}</span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed"
          >
            {content.heroSub}
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <button
              onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary py-3.5 px-8 text-base"
            >
              Kysy maksuton tarjous <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Paikallinen intro */}
      <section ref={introRef} className="py-16 bg-dark-950">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display font-bold text-2xl text-white mb-5">{content.intro.heading}</h2>
            {content.intro.body.map((para, i) => (
              <p key={i} className="text-slate-400 text-base leading-relaxed mb-4 last:mb-0">{para}</p>
            ))}
            <div className="mt-6 flex items-start gap-2.5 text-slate-500 text-sm">
              <CheckCircle2 size={15} className="text-snake-green flex-shrink-0 mt-0.5" />
              <span>{content.localNote}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesSection inView={introInView} />
      <ProcessSection inView={introInView} />
      <FAQ />
      <Contact selectedPlan={selectedPlan} />
    </>
  )
}

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Kuinka nopeasti sivu on valmis?',
    a: 'Kotisivu on valmis yleensä 2–3 viikossa. Aikataulu sovitaan etukäteen ja siitä pidetään kiinni. Jos sinulla on kiire, kerro se – katsotaan mitä on mahdollista.',
  },
  {
    q: 'Mitä minulta vaaditaan? Pitääkö minulla olla tekstit ja kuvat valmiina?',
    a: 'Ei välttämättä. Jos sinulla on tekstit, hyvä – se nopeuttaa. Jos ei, autan sisällön kanssa. Kuvat voidaan ottaa ilmaisista kuvapalveluista tai voit lähettää omia. Kerro missä olet menossa ja mietitään yhdessä.',
  },
  {
    q: 'Paljonko tämä maksaa ja onko piilokuluja?',
    a: 'Landing page alk. 250 € + alv ja perussivusto alk. 450 € + alv. Hinta sovitaan etukäteen, eikä se muutu kesken työn. Domain ja hosting laskutetaan erikseen, mutta nekin kerrotaan selkeästi tarjouksessa.',
  },
  {
    q: 'Voinko muokata sivua itse julkaisun jälkeen?',
    a: 'Perussivustoon voidaan rakentaa yksinkertainen muokkauspaneeli teksteille. Landing page tehdään valmiiksi julkaistavana sivuna ilman erillistä säätöpaneelia.',
  },
  {
    q: 'Mitä jos en pidä lopputuloksesta?',
    a: 'Näytän designin sinulle ennen kuin rakennan mitään. Voit kommentoida vapaasti ja tehdä muutoksia – ei ylimääräisiä kuluja. Tavoitteeni on, että olet tyytyväinen. Jos et ole, en laita sivustoa julki.',
  },
]

function Item({ faq, index, inView }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-white/[0.08] rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${
          open ? 'bg-white/[0.05]' : 'hover:bg-white/[0.03]'
        }`}
      >
        <span className="font-medium text-white text-sm lg:text-[15px] leading-snug pr-4">{faq.q}</span>
        <ChevronDown
          size={17}
          className={`text-snake-green flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1">
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ukk" className="py-24 lg:py-28 bg-dark-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] rounded-full bg-snake-green/[0.03] blur-[80px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-5">Kysymyksiä?</div>
          <h2 className="section-title text-4xl lg:text-5xl mb-4">
            Vastaukset{' '}
            <span className="gradient-text">yleisimpiin.</span>
          </h2>
        </motion.div>

        <div className="space-y-3 mb-10">
          {faqs.map((faq, i) => (
            <Item key={faq.q} faq={faq} index={i} inView={inView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-slate-500 text-sm"
        >
          Muuta mielessä?{' '}
          <button
            onClick={() => document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-snake-green hover:underline"
          >
            Laita viestiä
          </button>
          {' '}– vastataan saman päivän aikana.
        </motion.p>
      </div>
    </section>
  )
}

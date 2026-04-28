import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle2, Mail, Phone, Clock } from 'lucide-react'

const serviceOptions = ['Landing page (alk. 250 €)', 'Perussivusto (alk. 450 €)', 'Mobiilisovellus', 'Muu / en tiedä vielä']

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1100))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="yhteydenotto" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-snake-green/[0.04] blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#00d4ff]/[0.04] blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-5">Aloitetaan</div>
          <h2 className="section-title text-4xl lg:text-5xl mb-4">
            Kerro projektistasi.{' '}
            <span className="gradient-text">Vastaan tänään.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Täytä lomake tai lähetä sähköpostia suoraan.
            Tarjous on aina maksuton ja vaatimusvapaa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card p-6 space-y-5">
              {[
                { icon: Mail,  label: 'Sähköposti', value: 'hei@snakebyte.fi' },
                { icon: Phone, label: 'Puhelin',    value: '+358 40 123 4567' },
                { icon: Clock, label: 'Vastausaika','value': 'Saman päivän aikana' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-snake-green/10 border border-snake-green/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-snake-green" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-5 border-snake-green/20 bg-snake-green/[0.03]">
              <h4 className="font-semibold text-white text-sm mb-3">Mitä saat pyytämällä tarjouksen</h4>
              <ul className="space-y-2">
                {[
                  'Kuulet hinnan 24 h sisällä',
                  'Maksuton aloituspalaveri',
                  'Ei myyntipaineita',
                  'Voit kieltäytyä ilman selittelyjä',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={13} className="text-snake-green flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="glass-card p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[380px]">
                <div className="w-14 h-14 rounded-full bg-snake-green/15 border border-snake-green/30 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-snake-green" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Viesti lähetetty!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Palaan sinulle viimeistään huomiseen mennessä. Kiitos yhteydenotostasi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2">Nimi *</label>
                    <input
                      required name="name" value={form.name} onChange={handleChange}
                      placeholder="Matti Meikäläinen"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-snake-green/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2">Sähköposti *</label>
                    <input
                      required type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="matti@yritys.fi"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-snake-green/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">Mitä tarvitset?</label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map(s => (
                      <button
                        key={s} type="button"
                        onClick={() => setForm(p => ({ ...p, service: p.service === s ? '' : s }))}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                          form.service === s
                            ? 'bg-snake-green/20 border-snake-green/50 text-snake-green'
                            : 'bg-white/[0.04] border-white/[0.10] text-slate-400 hover:border-white/20'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">
                    Kerro lyhyesti – mikä yritys, mitä haluat sivustoltasi? *
                  </label>
                  <textarea
                    required name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Esim. olen putkimies ja tarvitsen siistin sivun jonne ohjata Instagram-seuraajat. Kiire saada se ennen kesää."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-snake-green/50 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                      Lähetetään...
                    </>
                  ) : (
                    <>
                      Lähetä viesti <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-slate-600 text-xs text-center">
                  Ei sitoumuksia. Tarjous on maksuton.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

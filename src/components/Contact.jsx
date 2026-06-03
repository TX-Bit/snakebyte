import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

const serviceOptions = ['Landing page', 'Perussivusto', 'Muu / en tiedä vielä']
const contactOptions = ['Puhelu', 'Tekstiviesti', 'WhatsApp', 'Sähköposti']

export default function Contact({ selectedPlan = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    contactPref: '',
    service: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    website: '',
    message: '',
  })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors]   = useState({})

  useEffect(() => {
    if (selectedPlan) {
      setForm(p => ({ ...p, service: selectedPlan }))
    }
  }, [selectedPlan])

  const capitalizeWords = (str) =>
    str.replace(/(?:^|\s)\S/g, c => c.toUpperCase())

  const handleChange = (e) => {
    const { name, value } = e.target
    let processed = value

    if (name === 'name') {
      processed = capitalizeWords(value)
    } else if (name === 'phone') {
      processed = value.replace(/[^\d+\s\-()]/g, '')
    }

    setForm(p => ({ ...p, [name]: processed }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: false }))
  }

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.email.trim() && !form.phone.trim()) {
      e.email = true
      e.phone = true
    } else if (form.email.trim() && !isValidEmail(form.email)) {
      e.email = true
    }
    if (!form.message.trim()) e.message = true
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setLoading(true)
    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nimi: form.name,
          yritys: form.company,
          sähköposti: form.email,
          puhelinnumero: form.phone,
          yhteydenottotapa: form.contactPref,
          paketti: form.service,
          facebook: form.facebook,
          instagram: form.instagram,
          linkedin: form.linkedin,
          nykyinen_sivusto: form.website,
          viesti: form.message,
        }),
      })
      if (res.ok) {
        setSent(true)
      } else {
        alert('Viestin lähetys epäonnistui. Yritä uudelleen.')
      }
    } catch {
      alert('Verkkovirhe. Tarkista yhteys ja yritä uudelleen.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-slate-600 text-sm focus:outline-none focus:bg-white/[0.06] transition-all ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-500/80'
        : 'border-white/[0.10] focus:border-snake-green/50'
    }`

  return (
    <section id="yhteydenotto" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-snake-green/[0.04] blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#00d4ff]/[0.04] blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-5">Pyydä esikatselu</div>
          <h2 className="section-title text-4xl lg:text-5xl mb-4">
            Näe miltä sivustosi{' '}
            <span className="gradient-text">voisi näyttää.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Täytä tiedot yrityksestäsi – rakennan sinulle ilmaisen demoversion ja lähetän linkin.
            Ei sitoumuksia.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <div className="glass-card p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[380px]">
                <div className="w-14 h-14 rounded-full bg-snake-green/15 border border-snake-green/30 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-snake-green" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Pyyntö lähetetty!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Rakennan demoversion ja otan yhteyttä pikapuoliin. Kiitos!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-7 space-y-5">

                {/* Nimi */}
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">Nimi *</label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    placeholder="Matti Meikäläinen"
                    className={inputClass('name')}
                  />
                </div>

                {/* Yrityksen nimi */}
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">Yrityksen nimi</label>
                  <input
                    name="company" value={form.company} onChange={handleChange}
                    placeholder="Putkifirma Virtanen Oy"
                    className={inputClass('company')}
                  />
                </div>

                {/* Sähköposti */}
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">
                    Sähköposti
                  </label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="matti@yritys.fi"
                    className={inputClass('email')}
                  />
                </div>

                {/* Puhelinnumero */}
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">
                    Puhelinnumero
                  </label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+358 40 123 4567"
                    className={inputClass('phone')}
                  />
                </div>
                {(errors.email && errors.phone) && (
                  <p className="text-red-400 text-xs -mt-3">Anna vähintään sähköposti tai puhelinnumero.</p>
                )}

                {/* Yhteydenottotapa */}
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">Miten haluat että otan yhteyttä?</label>
                  <div className="flex flex-wrap gap-2">
                    {contactOptions.map(opt => (
                      <button
                        key={opt} type="button"
                        onClick={() => setForm(p => ({ ...p, contactPref: p.contactPref === opt ? '' : opt }))}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                          form.contactPref === opt
                            ? 'bg-snake-green/20 border-snake-green/50 text-snake-green'
                            : 'bg-white/[0.04] border-white/[0.10] text-slate-400 hover:border-white/20'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Paketti */}
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">Mitä tarvitset?</label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map(s => (
                      <button
                        key={s} type="button"
                        onClick={() => setForm(p => ({ ...p, service: p.service === s ? '' : s }))}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                          form.service === s
                            ? 'bg-[#00d4ff]/20 border-[#00d4ff]/50 text-[#00d4ff]'
                            : 'bg-white/[0.04] border-white/[0.10] text-slate-400 hover:border-white/20'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Some-linkit */}
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">
                    Somekanavat ja nykyinen sivusto{' '}
                    <span className="text-slate-600 font-normal">(valinnainen – käytän tietoja demoon)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      name="website" value={form.website} onChange={handleChange}
                      placeholder="Nykyinen sivusto (URL)"
                      className={inputClass('website')}
                    />
                    <input
                      name="facebook" value={form.facebook} onChange={handleChange}
                      placeholder="Facebook-sivu (URL)"
                      className={inputClass('facebook')}
                    />
                    <input
                      name="instagram" value={form.instagram} onChange={handleChange}
                      placeholder="Instagram-profiili (URL)"
                      className={inputClass('instagram')}
                    />
                    <input
                      name="linkedin" value={form.linkedin} onChange={handleChange}
                      placeholder="LinkedIn (URL)"
                      className={inputClass('linkedin')}
                    />
                  </div>
                </div>

                {/* Viesti */}
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">
                    Kerro lyhyesti – mikä yritys, mitä haluat sivustoltasi? *
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Esim. olen putkiyrittäjä Kuopiossa. Haluan yksinkertaiset sivut joilla esittelen palvelut ja kerään yhteydenottoja."
                    className={inputClass('message') + ' resize-none'}
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
                      Pyydä esikatselu <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-slate-600 text-xs text-center">
                  Saat demoversion sähköpostitse tai puhelimitse. Ei sitoumuksia.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

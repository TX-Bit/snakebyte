import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, CheckCircle2,
  Phone, Mail, MapPin, Monitor, Sparkles, Send,
} from 'lucide-react'

/* ─── Pricing data ──────────────────────────────────────────── */
const PLANS = [
  {
    id: 'kotisivu',
    tag: 'Perussivusto',
    name: 'Perussivusto',
    price: '450',
    delivery: 'alk. + alv',
    color: '#00ff88',
    popular: false,
    features: [
      '2–4 sivua',
      'muokkauspaneeli teksteille',
      'palveluiden tai referenssien osio',
      'perus hakukoneoptimointi',
      'sivuston julkaisu',
    ],
  },
]

/* ─── Mini-site preview ─────────────────────────────────────── */
function SitePreview({ form }) {
  const name     = form.companyName || 'Sinun Yritys Oy'
  const tagline  = form.tagline     || 'Lisää kuvauksesi tähän'
  const city     = form.city        || 'Helsinki'
  const phone    = form.phone       || '+358 40 000 0000'
  const email    = form.email       || 'info@yritys.fi'
  const services = [form.service1, form.service2, form.service3].filter(Boolean)

  return (
    <div className="bg-[#080810] h-full overflow-y-auto text-white">
      {/* Hero */}
      <div className="relative px-6 py-10 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-[#00ff88]/[0.07] blur-[70px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#00ff88]/25 bg-[#00ff88]/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-[#00ff88] text-[10px] font-semibold tracking-widest uppercase">{city}</span>
          </div>
          <h1 className="font-bold text-xl text-white mb-2 leading-tight">{name}</h1>
          <p className="text-slate-400 text-xs mb-5 max-w-[230px] mx-auto leading-relaxed">{tagline}</p>
          <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#080810]">
            Ota yhteyttä <ArrowRight size={10} />
          </button>
        </div>
      </div>

      {/* Services */}
      {services.length > 0 && (
        <div className="px-4 py-5 border-t border-white/[0.05]">
          <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase text-center mb-3">
            Palvelut
          </p>
          <div className="space-y-2">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] flex-shrink-0" />
                <span className="text-white text-xs font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact */}
      <div className="px-4 py-5 border-t border-white/[0.05]">
        <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase text-center mb-3">
          Yhteystiedot
        </p>
        <div className="space-y-2.5">
          {[
            { Icon: Phone, val: phone },
            { Icon: Mail,  val: email },
            { Icon: MapPin, val: city },
          ].map(({ Icon, val }) => (
            <div key={val} className="flex items-center gap-2 text-xs text-slate-300">
              <Icon size={11} className="text-[#00ff88] flex-shrink-0" />
              {val}
            </div>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div className="px-4 py-3 bg-white/[0.02] border-t border-white/[0.04] text-center">
        <p className="text-slate-600 text-[10px]">
          Tehty{' '}
          <span className="text-[#00ff88] font-semibold">SnakeBytella</span>
          {' '}· snakebyte.fi
        </p>
      </div>
    </div>
  )
}

function BrowserFrame({ form }) {
  const domainSlug = form.companyName
    ? form.companyName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '') + '.fi'
    : 'sinunyritys.fi'

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.12] shadow-[0_12px_60px_rgba(0,0,0,0.7)] flex flex-col" style={{ height: '520px' }}>
      {/* Chrome bar */}
      <div className="flex-shrink-0 bg-[#111120] border-b border-white/[0.08] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 bg-[#080810] rounded-lg px-3 py-1.5 flex items-center gap-2 max-w-[200px]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]/60 flex-shrink-0" />
          <span className="text-slate-500 text-xs truncate">{domainSlug}</span>
        </div>
        <Monitor size={12} className="text-slate-600 ml-auto" />
      </div>

      {/* Page content */}
      <div className="flex-1 overflow-hidden">
        <SitePreview form={form} />
      </div>
    </div>
  )
}

/* ─── Main component ────────────────────────────────────────── */
export default function DemoPage() {
  const [form, setForm] = useState({
    companyName: '',
    tagline: '',
    service1: '',
    service2: '',
    service3: '',
    phone: '',
    email: '',
    city: '',
  })
  const [selectedPlan, setSelectedPlan] = useState('kotisivu')
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')

  const update = (field) => (e) => setForm(p => ({ ...p, [field]: e.target.value }))

  const goBack = () => {
    window.history.pushState({}, '', '/')
    window.location.reload()
  }

  const handleSend = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1100))
    setLoading(false)
    setSent(true)
  }

  const inputCls = `w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white
    placeholder-slate-600 text-sm focus:outline-none focus:border-snake-green/50
    focus:bg-white/[0.06] transition-all`
  const labelCls = 'block text-slate-400 text-xs font-medium mb-1.5'

  const selectedPlanData = PLANS.find(p => p.id === selectedPlan)

  return (
    <div className="min-h-screen bg-dark-950 text-white">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-dark-900/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Takaisin</span>
          </button>
          <div className="flex items-center gap-2">
            <img src="/snake-icon-64.png" alt="SnakeByte" className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]" />
            <span className="font-display font-bold text-lg text-white">
              Snake<span className="gradient-text">Byte</span>
            </span>
          </div>
          <a href="mailto:hei@snakebyte.fi" className="btn-primary text-sm hidden sm:flex">
            Ota yhteyttä
          </a>
          <div className="sm:hidden w-24" />
        </div>
      </header>

      {/* ── Intro ── */}
      <div className="relative overflow-hidden py-12 text-center px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-snake-green/[0.05] blur-[100px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <div className="section-label mb-4">
            <Sparkles size={12} />
            Ilmainen demo
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Näe miltä <span className="gradient-text">oma sivustosi</span>{' '}
            voisi näyttää
          </h1>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Täytä yrityksesi tiedot vasemmalle ja katso reaaliajassa, miten SnakeByte
            rakentaisi sivustosi. Ei vaadi rekisteröitymistä.
          </p>
        </motion.div>
      </div>

      {/* ── Form + Preview ── */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start">

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="xl:col-span-2 space-y-4"
          >
            {/* Company */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="font-display font-semibold text-white text-sm uppercase tracking-widest opacity-60 mb-2">
                1 · Yrityksen tiedot
              </h2>
              <div>
                <label className={labelCls}>Yrityksen nimi</label>
                <input
                  value={form.companyName}
                  onChange={update('companyName')}
                  placeholder="Esim. Mäkinen Autohuolto"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Lyhyt kuvaus tai slogan</label>
                <input
                  value={form.tagline}
                  onChange={update('tagline')}
                  placeholder="Esim. Luotettavaa autohuoltoa Helsingissä"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Paikkakunta</label>
                <input
                  value={form.city}
                  onChange={update('city')}
                  placeholder="Helsinki"
                  className={inputCls}
                />
              </div>
            </div>

            {/* Services */}
            <div className="glass-card p-6 space-y-3">
              <h2 className="font-display font-semibold text-white text-sm uppercase tracking-widest opacity-60 mb-2">
                2 · Palvelut (1–3)
              </h2>
              {[
                { key: 'service1', ph: 'Esim. Öljynvaihto' },
                { key: 'service2', ph: 'Esim. Jarruhuolto' },
                { key: 'service3', ph: 'Esim. Renkaanvaihto' },
              ].map(({ key, ph }) => (
                <input
                  key={key}
                  value={form[key]}
                  onChange={update(key)}
                  placeholder={ph}
                  className={inputCls}
                />
              ))}
            </div>

            {/* Contact */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="font-display font-semibold text-white text-sm uppercase tracking-widest opacity-60 mb-2">
                3 · Yhteystiedot
              </h2>
              <div>
                <label className={labelCls}>Puhelinnumero</label>
                <input
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+358 40 123 4567"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Sähköposti</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="info@yritys.fi"
                  className={inputCls}
                />
              </div>
            </div>

            {/* Mobile hint */}
            <p className="text-slate-600 text-xs text-center xl:hidden">
              Esikatselu näkyy alapuolella ↓
            </p>
          </motion.div>

          {/* Preview column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="xl:col-span-3 xl:sticky xl:top-24"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-slate-500 text-xs font-medium">
                Esikatselu – päivittyy reaaliajassa
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-snake-green">
                <span className="w-1.5 h-1.5 rounded-full bg-snake-green animate-pulse" />
                Live
              </span>
            </div>
            <BrowserFrame form={form} />
            <p className="text-slate-600 text-xs text-center mt-3">
              Oikea sivustosi olisi näyttävämpi – tämä on vain suuntaa antava esikatselu.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Pricing ── */}
      <div className="border-t border-white/[0.06] bg-dark-900 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="section-label mb-4">Hinnoittelu</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
              Kaksi pakettia.{' '}
              <span className="gradient-text">Kiinteä hinta.</span>
            </h2>
            <p className="text-slate-400 max-w-md mx-auto">
              Kerrot mitä haluat, me toimitamme. Hinta on aina selvillä ennen kuin
              aloitetaan – ei tuntilaskutusta, ei yllätyksiä.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative glass-card p-7 flex flex-col cursor-pointer transition-all duration-200 ${
                  selectedPlan === plan.id
                    ? 'border-snake-green/50 bg-snake-green/[0.06] shadow-snake'
                    : ''
                }`}
              >
                {selectedPlan === plan.id && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle2 size={18} className="text-snake-green" />
                  </div>
                )}

                <p className="text-xs font-semibold mb-3" style={{ color: plan.color }}>
                  {plan.tag}
                </p>
                <h3 className="font-display font-bold text-2xl text-white mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display font-bold text-5xl text-white">{plan.price} €</span>
                </div>
                <p className="text-slate-500 text-sm mb-6">{plan.delivery}</p>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-snake-green flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div
                  className={`py-2 text-center rounded-xl text-sm font-semibold transition-all ${
                    selectedPlan === plan.id
                      ? 'bg-snake-green/20 border border-snake-green/50 text-snake-green'
                      : 'bg-white/[0.04] border border-white/[0.10] text-slate-400'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Valittu ✓' : 'Valitse tämä'}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Send form ── */}
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Lähetetään demosi SnakeBytelle
              </h3>
              <p className="text-slate-400 text-sm">
                Saat tarjouksen 24 tunnin sisällä. Maksuton ja sitoutumaton.
              </p>
            </motion.div>

            {sent ? (
              <div className="glass-card p-10 flex flex-col items-center text-center gap-5">
                <div className="w-14 h-14 rounded-full bg-snake-green/15 border border-snake-green/30 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-snake-green" />
                </div>
                <h4 className="font-display font-bold text-2xl text-white">Lähetetty!</h4>
                <p className="text-slate-400 text-sm max-w-xs">
                  Palaan sinulle viimeistään huomiseen mennessä. Kiitos yhteydenotostasi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSend} className="glass-card p-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Nimesi *</label>
                    <input
                      required
                      value={contactName}
                      onChange={e => setContactName(e.target.value)}
                      placeholder="Etunimi Sukunimi"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Sähköpostisi *</label>
                    <input
                      required
                      type="email"
                      value={contactEmail}
                      onChange={e => setContactEmail(e.target.value)}
                      placeholder="sinä@yritys.fi"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Summary box */}
                <div className="bg-dark-800 rounded-xl p-4 border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs font-medium">Paketti</span>
                    <span className="text-white text-sm font-semibold">
                      {selectedPlanData?.name} – {selectedPlanData?.price} €
                    </span>
                  </div>
                  {form.companyName && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs font-medium">Yritys</span>
                      <span className="text-white text-sm">
                        {form.companyName}{form.city ? ` · ${form.city}` : ''}
                      </span>
                    </div>
                  )}
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
                    <>Pyydä tarjous <Send size={16} /></>
                  )}
                </button>

                <p className="text-slate-600 text-xs text-center">
                  Ei sitoumuksia. Tarjous on maksuton.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Contact from '../components/Contact'
import FAQList from '../components/FAQList'
import SEO from '../components/SEO'
import { packages } from '../content/siteContent'

const pricingFaqs = [
  {
    q: 'Mitä hintoihin sisältyy?',
    a: 'Hintaan sisältyy sivuston suunnittelu, toteutus, yhteydenottolomake, kevyt hakukoneoptimointi ja julkaisu sovitulla tavalla.',
  },
  {
    q: 'Mitä domain ja hosting maksavat?',
    a: 'Domain ja hosting ovat erillisiä kuluja, mutta ne käydään läpi selkeästi ennen aloitusta.',
  },
  {
    q: 'Voiko landing pagen laajentaa myöhemmin?',
    a: 'Kyllä. Landing pagesta voidaan tehdä myöhemmin perussivusto, ja laajennuksessa hyvitetään 50 €.',
  },
  {
    q: 'Voiko sivulle tehdä pieniä muutoksia julkaisun jälkeen?',
    a: 'Kyllä. Julkaisun jälkeen saat tukea alkuun, ja pienet muutokset voidaan sopia erikseen tarpeen mukaan.',
  },
]

export default function PricingPage({ selectedPlan, onSelectPlan }) {
  return (
    <>
      <SEO
        title="Hinnasto - nettisivut yritykselle | SnakeByte"
        description="SnakeByte-hinnasto: landing page 250 € + alv ja perussivusto 600 € + alv. Selkeä hinta ennen aloitusta."
        path="/hinnasto"
        faqItems={pricingFaqs}
      />
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[620px] h-[420px] rounded-full bg-snake-green/[0.05] blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-label mb-6">Hinnasto</div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Selkeät hinnat nettisivuille
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Kaksi pakettia, joilla pääsee liikkeelle ilman turhaa epäselvyyttä.
            Valitaan yhdessä sopiva laajuus ennen aloitusta.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-dark-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {packages.map((pkg) => (
            <div key={pkg.name} className="glass-card p-7 flex flex-col">
              <h2 className="font-display font-bold text-2xl text-white mb-3">{pkg.name}</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{pkg.description}</p>
              <div className="flex items-baseline gap-1.5 mb-7">
                <span className="font-display font-bold text-5xl gradient-text">{pkg.price}</span>
                <span className="text-slate-400 text-sm">{pkg.priceNote}</span>
              </div>
              <ul className="space-y-3.5 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={15} className="text-snake-green flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  onSelectPlan(pkg.name)
                  document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary justify-center"
              >
                Pyydä esikatselu <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center mt-9">
          <p className="text-slate-400 text-sm leading-relaxed">
            Voit aloittaa landing-sivulla ja päivittää myöhemmin perussivustoksi.
            Laajennuksessa hyvitetään 50 €. Julkaisun jälkeisestä ylläpidosta ja pienistä muutoksista sovitaan tarpeen mukaan.
          </p>
          <p className="text-sm text-slate-400 mt-4">
            Lue tarkempi hintaopas:{' '}
            <Link to="/opas/nettisivut-yritykselle-hinta" className="text-snake-green hover:underline">
              nettisivut yritykselle hinta – mitä kotisivut maksavat? →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-dark-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-9">
            <div className="section-label mb-5">Hinnoittelu FAQ</div>
            <h2 className="section-title text-3xl lg:text-5xl">
              Usein kysyttyä hinnoista
            </h2>
          </div>
          <FAQList items={pricingFaqs} />
          <div className="text-center mt-8">
            <Link to="/#yhteydenotto" className="btn-outline">
              Siirry etusivun esikatselu-CTA:han
            </Link>
          </div>
        </div>
      </section>
      <Contact selectedPlan={selectedPlan} />
    </>
  )
}

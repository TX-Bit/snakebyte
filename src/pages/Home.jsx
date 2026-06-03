import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import FAQList from '../components/FAQList'
import { packages, processSteps, solutionLinks, genericFaqs } from '../content/siteContent'

function PackageHighlights({ onSelectPlan }) {
  return (
    <section id="hinnasto" className="py-20 lg:py-24 bg-dark-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="section-label mb-5">Aloita tästä</div>
          <h2 className="section-title text-3xl lg:text-5xl mb-4">
            Kaksi selkeää <span className="gradient-text">pääpakettia.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Valitse kevyt yhden sivun aloitus tai laajempi perussivusto. Tarvittaessa autan valitsemaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {packages.map((pkg) => (
            <div key={pkg.name} className="glass-card p-7 flex flex-col">
              <h3 className="font-display font-bold text-2xl text-white mb-3">{pkg.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{pkg.description}</p>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="font-display font-bold text-4xl gradient-text">{pkg.price}</span>
                <span className="text-slate-400 text-sm">{pkg.priceNote}</span>
              </div>
              <ul className="space-y-3 mb-7 flex-1">
                {pkg.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={15} className="text-snake-green flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onSelectPlan(pkg.name)
                    document.querySelector('#yhteydenotto')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-primary justify-center"
                >
                  Pyydä esikatselu <ArrowRight size={15} />
                </button>
                <Link to={pkg.href} className="btn-outline justify-center">
                  Tutustu pakettiin
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-7">
          <p className="text-slate-400 text-sm max-w-lg">
            Landing-sivusta voidaan myöhemmin tehdä perussivusto. Laajennuksessa hyvitetään 50 €.
          </p>
          <Link to="/hinnasto" className="text-snake-green text-sm hover:underline whitespace-nowrap flex-shrink-0">
            Katso täysi hinnasto →
          </Link>
        </div>
      </div>
    </section>
  )
}

function CompactProcess() {
  return (
    <section className="py-20 lg:py-24 bg-dark-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="section-label mb-5">Helppo prosessi</div>
          <h2 className="section-title text-3xl lg:text-5xl mb-4">
            Sinun ei tarvitse <span className="gradient-text">säätää tekniikkaa.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Selkeä eteneminen, kevyt yhteydenpito ja esikatselu ennen toteutusta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="glass-card p-6">
              <div className="font-display font-bold text-snake-green text-sm mb-3">
                0{index + 1}
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionLinks() {
  return (
    <section id="ratkaisut" className="py-20 lg:py-24 bg-dark-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="section-label mb-5">Ratkaisut</div>
          <h2 className="section-title text-3xl lg:text-5xl mb-4">
            Valitse tarpeeseesi <span className="gradient-text">sopiva ratkaisu.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutionLinks.map((link) => (
            <Link key={link.href} to={link.href} className="glass-card p-6 group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-white text-xl mb-2">{link.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{link.description}</p>
                </div>
                <ArrowRight className="text-snake-green flex-shrink-0 transition-transform group-hover:translate-x-1" size={19} />
              </div>
            </Link>
          ))}
          <Link to="/hinnasto" className="glass-card p-6 group">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display font-semibold text-white text-xl mb-2">Hinnasto</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Landing page 250 € + alv ja perussivusto 600 € + alv. Vertaa paketteja ja valitse sopiva.</p>
              </div>
              <ArrowRight className="text-snake-green flex-shrink-0 transition-transform group-hover:translate-x-1" size={19} />
            </div>
          </Link>
          <Link to="/opas/nettisivut-yritykselle-hinta" className="glass-card p-6 group">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display font-semibold text-white text-xl mb-2">Nettisivujen hinta – opas</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Mitä yrityksen nettisivut maksavat ja mistä hinta muodostuu? Selkeä opas pienyrittäjälle.</p>
              </div>
              <ArrowRight className="text-snake-green flex-shrink-0 transition-transform group-hover:translate-x-1" size={19} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home({ selectedPlan, onSelectPlan }) {
  return (
    <>
      <SEO
        title="SnakeByte - nettisivut pienyrityksille helposti"
        description="SnakeByte rakentaa selkeät nettisivut pienyrityksille ilman teknistä säätöä. Landing page 250 € + alv ja perussivusto 600 € + alv."
        path="/"
      />
      <Hero />
      <section className="py-14 bg-dark-950">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-lg leading-relaxed">
            SnakeByte tekee modernit kotisivut yrittäjille, toiminimille ja pienyrityksille.
            Saat selkeän sivuston, jonka tarkoitus on kertoa mitä teet ja tehdä yhteydenotosta helppoa.
          </p>
        </div>
      </section>
      <PackageHighlights onSelectPlan={onSelectPlan} />
      <CompactProcess />
      <SolutionLinks />
      <section className="py-20 lg:py-24 bg-dark-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-9">
            <div className="section-label mb-5">FAQ</div>
            <h2 className="section-title text-3xl lg:text-5xl">
              Usein kysyttyä
            </h2>
          </div>
          <FAQList items={genericFaqs} />
          <p className="text-center mt-6 text-sm text-slate-400">
            Lisää kysymyksiä:{' '}
            <Link to="/nettisivut-yritykselle" className="text-snake-green hover:underline">
              nettisivut yritykselle →
            </Link>
            {' '}tai{' '}
            <Link to="/hinnasto" className="text-snake-green hover:underline">
              hinnasto →
            </Link>
          </p>
        </div>
      </section>
      <Contact selectedPlan={selectedPlan} />
    </>
  )
}

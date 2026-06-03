import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Contact from '../components/Contact'
import FAQList from '../components/FAQList'
import SEO from '../components/SEO'
import { genericFaqs, packages, processSteps } from '../content/siteContent'

const pages = {
  '/nettisivut-yritykselle': {
    title: 'Nettisivut yritykselle helposti ja selkeästi | SnakeByte',
    description: 'Modernit nettisivut pienyritykselle, yrittäjälle ja toiminimelle ilman teknistä säätöä. Landing page 250 € + alv tai perussivusto 600 € + alv.',
    h1: 'Nettisivut yritykselle helposti ja selkeästi',
    eyebrow: 'Nettisivut yritykselle',
    intro:
      'Saat modernit kotisivut ilman teknistä säätöä. Palvelu sopii pienyrityksille, yrittäjille ja toiminimille, jotka haluavat selkeät sivut ja helpon tavan saada yhteydenottoja.',
    sections: [
      {
        heading: 'Kenelle tämä sopii',
        items: [
          'Pienyrityksille ja palveluyrityksille',
          'Toiminimille ja aloittaville yrittäjille',
          'Yrityksille, joiden sivut kaipaavat päivitystä',
          'Yrittäjille, jotka haluavat ulkoistaa teknisen toteutuksen',
          'Yrityksille, joilla ei ole aikaa rakentaa sivuja itse',
        ],
      },
      {
        heading: 'Mitä saat',
        items: [
          'Responsiivinen sivusto, joka toimii puhelimella',
          'Palveluiden ja yrityksen selkeä esittely',
          'Yhteydenottolomake suoraan sivustolta',
          'Kevyt hakukoneoptimointi tärkeimmille hakutermeille',
          'Julkaisu omalle domainille',
          'Mahdollisuus laajentaa myöhemmin perussivustoksi',
        ],
      },
    ],
    priceText:
      'Voit aloittaa landing pagella 250 € + alv tai valita perussivuston 600 € + alv. Laajuus sovitaan yhdessä ennen aloitusta.',
    faqs: [
      {
        q: 'Paljonko nettisivut yritykselle maksavat?',
        a: 'Landing page maksaa 250 € + alv ja sisältää yhden selkeän sivun, yhteydenottolomakkeen ja kevyen hakukoneoptimoinnin. Perussivusto on 600 € + alv ja kattaa 2–4 sivua palveluille ja yritysesittelylle. Hinta sovitaan ennen aloitusta – yllätyksiä ei tule.',
      },
      {
        q: 'Sopivatko sivut pienyritykselle tai toiminimelle?',
        a: 'Kyllä. Palvelu on suunniteltu erityisesti pienyrityksiä, toiminimiä ja aloittavia yrittäjiä varten. Prosessi on kevyt eikä vaadi pitkiä kokouksia tai teknistä osaamista.',
      },
      {
        q: 'Tarvitsenko teknistä osaamista?',
        a: 'Ei. Riittää, kun kerrot mitä yritys tekee, kenelle ja miten sinuun saa yhteyden. Tekninen toteutus, tekstien muotoilu ja julkaisu hoidetaan puolestasi. Saat esikatselun ennen rakentamista.',
      },
      {
        q: 'Voiko sivustoa laajentaa myöhemmin?',
        a: 'Kyllä. Landing pagen voi myöhemmin laajentaa 2–4 sivun perussivustoksi, ja laajennuksessa hyvitetään 50 €. Aloittaminen pienestä on hyvä valinta, jos tarve kasvaa vasta myöhemmin.',
      },
      {
        q: 'Saako sivuille yhteydenottolomakkeen?',
        a: 'Kyllä. Yhteydenottolomake kuuluu kaikkiin toteutuksiin. Se tekee asiakkaille helpoksi ottaa yhteyttä suoraan sivustolta.',
      },
    ],
  },
  '/landing-page': {
    title: 'Landing page yritykselle nopeasti ja edullisesti | SnakeByte',
    description: 'Landing page yritykselle 250 € + alv. Yksi selkeä sivu uudelle yritykselle, palvelulle tai kampanjalle.',
    h1: 'Landing page yritykselle nopeasti ja edullisesti',
    eyebrow: 'Landing page',
    intro:
      'Landing page on yhden sivun kokonaisuus, joka kertoo olennaisen ja ohjaa kävijän ottamaan yhteyttä. Se on hyvä tapa päästä nopeasti liikkeelle ilman isoa sivustoprojektia.',
    sections: [
      {
        heading: 'Mitä 250 € + alv sisältää',
        items: [
          'Yhden modernin ja mobiiliystävällisen sivun',
          'Yrityksen tai palvelun perustiedot',
          'Selkeän yhteydenottolomakkeen',
          'Kevyen hakukoneoptimoinnin ja julkaisun',
        ],
      },
      {
        heading: 'Milloin landing page sopii',
        items: [
          'Uudelle pienelle yritykselle',
          'Yksittäiselle palvelulle tai kampanjalle',
          'Kun haluat nopeasti uskottavan verkkoläsnäolon',
          'Kun et vielä tarvitse useita alasivuja',
        ],
      },
    ],
    priceText:
      'Landing page maksaa 250 € + alv. Jos laajennat sen myöhemmin perussivustoksi, hyvitetään laajennuksen hinnasta 50 €.',
    faqs: [
      {
        q: 'Voiko landing pagen päivittää perussivustoksi?',
        a: 'Kyllä. Landing page voidaan myöhemmin laajentaa 2-4 sivun perussivustoksi, ja laajennuksessa hyvitetään 50 €.',
      },
      {
        q: 'Onko yksi sivu liian vähän?',
        a: 'Ei aina. Jos palvelu on selkeä ja tavoitteena on yhteydenotto, yksi hyvin rakennettu sivu voi olla juuri oikea ratkaisu.',
      },
      ...genericFaqs.slice(0, 2),
    ],
  },
  '/nettisivujen-uudistus': {
    title: 'Nettisivujen uudistus selkeästi ja helposti | SnakeByte',
    description: 'Nettisivujen uudistus tekee vanhasta sivustosta modernin, mobiiliystävällisen ja helpommin yhteydenottoja tuovan.',
    h1: 'Nettisivujen uudistus selkeästi ja helposti',
    eyebrow: 'Uudistus',
    intro:
      'Jos vanhat sivut näyttävät aikansa eläneiltä, toimivat huonosti puhelimella tai eivät tuo yhteydenottoja, ne kannattaa uusia selkeämmäksi kokonaisuudeksi.',
    sections: [
      {
        heading: 'Mitä uudistuksessa parannetaan',
        items: [
          'Vanhat sivut moderniksi ja selkeämmäksi',
          'Parempi mobiilikäyttö puhelimella selaaville asiakkaille',
          'Yhteydenoton, puhelinnumeron ja lomakkeen parempi näkyvyys',
          'Nykyisen sisällön hyödyntäminen järkevissä kohdissa',
        ],
      },
      {
        heading: 'Miten projekti etenee',
        items: [
          'Käydään läpi mikä nykyisessä sivussa toimii ja mikä ei',
          'Suunnitellaan uusi rakenne nykyisen sisällön pohjalta',
          'Näet esikatselun ennen toteutusta',
          'Julkaisu tehdään sovitusti, kun kokonaisuus tuntuu oikealta',
        ],
      },
    ],
    priceText:
      'Uudistus voidaan toteuttaa landing pagena 250 € + alv tai perussivustona 600 € + alv riippuen nykyisen sisällön määrästä.',
    faqs: [
      {
        q: 'Voidaanko vanhoja tekstejä käyttää?',
        a: 'Kyllä. Hyvä nykyinen sisältö voidaan hyödyntää, mutta rakennetta ja sanamuotoja kannattaa usein selkeyttää.',
      },
      {
        q: 'Meneekö vanha sivusto pois heti?',
        a: 'Ei. Uusi sivusto voidaan valmistella rauhassa ja julkaista vasta, kun se on hyväksytty.',
      },
      ...genericFaqs.slice(0, 2),
    ],
  },
}

function HeroBlock({ page }) {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[620px] h-[420px] rounded-full bg-snake-green/[0.05] blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="section-label mb-6">{page.eyebrow}</div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
          {page.h1}
        </h1>
        <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
          {page.intro}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/#yhteydenotto" className="btn-primary justify-center">
            Pyydä esikatselu <ArrowRight size={16} />
          </Link>
          <Link to="/hinnasto" className="btn-outline justify-center">
            Katso hinnasto
          </Link>
        </div>
      </div>
    </section>
  )
}

function ContentSections({ page }) {
  return (
    <section className="py-16 lg:py-20 bg-dark-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {page.sections.map((section) => (
          <div key={section.heading} className="glass-card p-7">
            <h2 className="font-display font-bold text-2xl text-white mb-5">{section.heading}</h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                  <CheckCircle2 size={16} className="text-snake-green flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function PriceLift({ page }) {
  return (
    <section className="py-16 lg:py-20 bg-dark-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-9">
          <div className="section-label mb-5">Hinnat</div>
          <h2 className="section-title text-3xl lg:text-5xl mb-4">
            Selkeä hinta <span className="gradient-text">ennen aloitusta.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{page.priceText}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {packages.map((pkg) => (
            <Link key={pkg.name} to="/hinnasto" className="glass-card p-6">
              <h3 className="font-display font-bold text-xl text-white mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="font-display font-bold text-3xl gradient-text">{pkg.price}</span>
                <span className="text-slate-400 text-sm">{pkg.priceNote}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{pkg.description}</p>
            </Link>
          ))}
        </div>
        <p className="text-center mt-6 text-sm text-slate-400">
          Lue tarkempi hintaopas:{' '}
          <Link to="/opas/nettisivut-yritykselle-hinta" className="text-snake-green hover:underline">
            nettisivut yritykselle hinta →
          </Link>
        </p>
      </div>
    </section>
  )
}

function ProcessLift() {
  return (
    <section className="py-16 lg:py-20 bg-dark-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-9">
          <div className="section-label mb-5">Prosessi</div>
          <h2 className="section-title text-3xl lg:text-5xl mb-4">
            Helppo tapa saada <span className="gradient-text">sivut valmiiksi.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="glass-card p-6">
              <div className="font-display font-bold text-snake-green text-sm mb-3">0{index + 1}</div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicePage({ path, selectedPlan }) {
  const page = pages[path] || pages['/nettisivut-yritykselle']

  return (
    <>
      <SEO title={page.title} description={page.description} path={path} faqItems={page.faqs} />
      <HeroBlock page={page} />
      <ContentSections page={page} />
      <PriceLift page={page} />
      <ProcessLift />
      <section className="py-16 lg:py-20 bg-dark-950">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-9">
            <div className="section-label mb-5">FAQ</div>
            <h2 className="section-title text-3xl lg:text-5xl">
              Usein kysyttyä
            </h2>
          </div>
          <FAQList items={page.faqs} />
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link to="/hinnasto" className="btn-outline justify-center">
              Vertaa paketteja hinnastossa
            </Link>
            <Link to="/#yhteydenotto" className="btn-primary justify-center">
              Pyydä esikatselu
            </Link>
          </div>
        </div>
      </section>
      <Contact selectedPlan={selectedPlan} />
    </>
  )
}
